"""Create a small, credential-free GISTDA 3D Tiles snapshot for Bang Pa-in."""
import copy
import hashlib
import json
import math
import os
from pathlib import Path
import shutil
import sys
import urllib.error
import urllib.parse
import urllib.request
from datetime import datetime, timezone

ENTRY = 'https://api-gateway.gistda.or.th/api/2.0/resources/3d-tiles/thailand-lod/tileset.json'
OUTPUT = Path('docs/assets/gistda3d/bang-pa-in')
KEY = os.environ.get('GISTDA_3D_API_KEY', '').strip()
BBOX = [100.56, 14.16, 100.65, 14.25]
LIMIT = 150 * 1024 * 1024
IDENTITY = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]


def clean_url(url):
    p = urllib.parse.urlsplit(url)
    query = [(k, v) for k, v in urllib.parse.parse_qsl(p.query) if k.lower() not in ('api_key', 'api-key', 'token', 'access_token')]
    return urllib.parse.urlunsplit((p.scheme, p.netloc, p.path, urllib.parse.urlencode(query), ''))


def multiply(a, b):
    return [sum(a[k * 4 + row] * b[col * 4 + k] for k in range(4)) for col in range(4) for row in range(4)]


def transform(p, m):
    return [sum(m[k * 4 + row] * p[k] for k in range(3)) + m[12 + row] for row in range(3)]


def overlaps(volume, matrix):
    region = volume.get('region')
    if region:
        west, south, east, north = [math.degrees(x) for x in region[:4]]
        return not (east < BBOX[0] or west > BBOX[2] or north < BBOX[1] or south > BBOX[3])
    if 'sphere' in volume:
        center = transform(volume['sphere'][:3], matrix)
        radius = volume['sphere'][3] * max(math.sqrt(sum(matrix[c*4+r]**2 for r in range(3))) for c in range(3))
    elif 'box' in volume:
        box = volume['box']
        center = transform(box[:3], matrix)
        radius = sum(math.sqrt(sum(sum(matrix[k*4+r]*box[3+c*3+k] for k in range(3))**2 for r in range(3))) for c in range(3))
    else:
        return True
    x, y, z = center
    distance = math.sqrt(x*x+y*y+z*z)
    if distance < radius or distance < 6000000:
        return True
    lon = math.degrees(math.atan2(y, x))
    lat = math.degrees(math.atan2(z, math.hypot(x,y)))
    # Geocentric latitude differs from geodetic latitude: expand conservatively.
    span = math.degrees(math.asin(min(1, radius/distance))) + .25
    lon_span = span/max(.1, math.cos(math.radians(lat)))
    return not (lon+lon_span < BBOX[0] or lon-lon_span > BBOX[2] or lat+span < BBOX[1] or lat-span > BBOX[3])


class Snapshot:
    def __init__(self, folder):
        self.folder = folder
        self.files = {}
        self.total = 0
        self.binary_count = 0
        self.active = set()

    def request(self, url):
        url = clean_url(url)
        p = urllib.parse.urlsplit(url)
        if p.scheme != 'https' or p.hostname not in ('api-gateway.gistda.or.th', '3d.gistda.or.th'):
            raise RuntimeError('Unsupported resource host; snapshot stopped')
        headers = {'User-Agent': 'IEAT-EMCC-3D-Demo/1.0'}
        if p.hostname == 'api-gateway.gistda.or.th':
            headers['API-Key'] = KEY
        # Reject cross-host redirects rather than forwarding the API key.
        class NoRedirect(urllib.request.HTTPRedirectHandler):
            def redirect_request(self, req, fp, code, msg, hdrs, newurl):
                raise RuntimeError('Upstream redirect requires review')
        try:
            with urllib.request.build_opener(NoRedirect).open(urllib.request.Request(url, headers=headers), timeout=45) as r:
                raw = r.read(45*1024*1024+1)
        except urllib.error.HTTPError as e:
            raise RuntimeError('GISTDA returned HTTP '+str(e.code)) from None
        except urllib.error.URLError:
            raise RuntimeError('Cannot connect to GISTDA') from None
        if len(raw) > 45*1024*1024:
            raise RuntimeError('Tile exceeds the safe repository file size')
        self.total += len(raw)
        if self.total > LIMIT:
            raise RuntimeError('Demo download exceeds 150 MB; use streaming hosting instead')
        if KEY.encode() in raw:
            raise RuntimeError('Credential appeared in upstream response; publishing stopped')
        return raw

    def resource(self, url, matrix):
        url = clean_url(url)
        key = (url, tuple(matrix))
        if key in self.files:
            return self.files[key]
        if key in self.active:
            raise RuntimeError('Cyclic tileset reference')
        self.active.add(key)
        raw = self.request(url)
        ext = Path(urllib.parse.urlsplit(url).path).suffix.lower()
        name = hashlib.sha256((url+str(matrix)).encode()).hexdigest()[:24] + (ext or '.bin')
        if raw.lstrip().startswith(b'{'):
            data = json.loads(raw)
            if 'root' in data and 'asset' in data:
                root = self.tile(data['root'], url, matrix)
                if not root:
                    self.active.remove(key)
                    return None
                data['root'] = root
            elif data.get('asset', {}).get('version') == '2.0':
                for collection in ('buffers', 'images'):
                    for item in data.get(collection, []):
                        uri = item.get('uri', '')
                        if uri and not uri.startswith('data:'):
                            item['uri'] = self.resource(urllib.parse.urljoin(url, uri), IDENTITY)
            else:
                raise RuntimeError('Unrecognized JSON resource')
            raw = json.dumps(data, separators=(',', ':')).encode()
        else:
            if ext not in ('.glb', '.b3dm', '.i3dm', '.pnts', '.cmpt', '.bin', '.jpg', '.jpeg', '.png', '.ktx2', '.webp'):
                raise RuntimeError('Unsupported tile resource format')
            if ext in ('.glb', '.b3dm', '.i3dm', '.pnts', '.cmpt'):
                self.binary_count += 1
        (self.folder/name).write_bytes(raw)
        self.files[key] = name
        self.active.remove(key)
        return name

    def tile(self, source, base_url, parent_matrix):
        tile = copy.deepcopy(source)
        matrix = multiply(parent_matrix, tile.get('transform', IDENTITY))
        if not overlaps(tile.get('boundingVolume', {}), matrix):
            return None
        if 'implicitTiling' in tile or '3DTILES_implicit_tiling' in tile.get('extensions', {}):
            raise RuntimeError('Implicit tiles require a streaming service; snapshot not published')
        children = [self.tile(t, base_url, matrix) for t in tile.get('children', [])]
        if 'children' in tile:
            tile['children'] = [t for t in children if t]
        contents = []
        for content in ([tile['content']] if 'content' in tile else tile.get('contents', [])):
            uri = content.get('uri', content.get('url'))
            if not uri or not overlaps(content.get('boundingVolume', tile.get('boundingVolume', {})), matrix):
                continue
            local = self.resource(urllib.parse.urljoin(base_url, uri), matrix)
            if local:
                content.pop('url', None)
                content['uri'] = local
                contents.append(content)
        tile.pop('content', None)
        tile.pop('contents', None)
        if len(contents) == 1:
            tile['content'] = contents[0]
        elif contents:
            tile['contents'] = contents
        return tile if contents or tile.get('children') else None


def main():
    if not KEY:
        raise RuntimeError('Missing repository secret GISTDA_3D_API_KEY')
    stage = OUTPUT.with_name('bang-pa-in-staging')
    shutil.rmtree(stage, ignore_errors=True)
    stage.mkdir(parents=True)
    snapshot = Snapshot(stage)
    data = json.loads(snapshot.request(ENTRY))
    if 'root' not in data:
        raise RuntimeError('GISTDA response is not a 3D Tiles tileset')
    data['root'] = snapshot.tile(data['root'], ENTRY, IDENTITY)
    if not data['root'] or not snapshot.binary_count:
        raise RuntimeError('No building tiles found for Bang Pa-in')
    (stage/'tileset.json').write_text(json.dumps(data,separators=(',', ':')))
    for p in stage.iterdir():
        if KEY.encode() in p.read_bytes():
            raise RuntimeError('Secret scan failed')
    shutil.rmtree(OUTPUT, ignore_errors=True)
    stage.rename(OUTPUT)
    status = {'ready':True,'area':'บางปะอิน','bbox':BBOX,'tiles':snapshot.binary_count,'bytes':snapshot.total,'updated_at':datetime.now(timezone.utc).isoformat(),'source':'GISTDA Thailand LOD1','message':'พร้อมแสดงอาคาร 3 มิติ บางปะอิน'}
    (OUTPUT/'status.json').write_text(json.dumps(status,ensure_ascii=False))
    print('Prepared Bang Pa-in snapshot:', snapshot.binary_count, 'tiles;', snapshot.total, 'bytes')


if __name__ == '__main__':
    try:
        main()
    except Exception as error:
        message = str(error).replace(KEY, '[redacted]') if KEY else str(error)
        OUTPUT.mkdir(parents=True,exist_ok=True)
        # Keep a previous working snapshot available when refresh fails.
        ready = (OUTPUT/'tileset.json').exists()
        (OUTPUT/'status.json').write_text(json.dumps({'ready':ready,'area':'บางปะอิน','message':message,'updated_at':datetime.now(timezone.utc).isoformat()},ensure_ascii=False))
        print('3D snapshot:',message)
        sys.exit(1)
