#!/usr/bin/env python3
"""Extract colored rain echoes from TMD Rayong radar loop (visual overlay)."""
import colorsys
import io
import pathlib
import urllib.request
from PIL import Image

SOURCE = 'https://weather.tmd.go.th/ryg/rygloop.gif'
OUTPUT = pathlib.Path('docs/data/ryg-rain-overlay.gif')
ORIGINAL = pathlib.Path('docs/data/ryg-original.gif')


def color_is_echo(r, g, b, x, y):
    # The first 800x800 pixels contain the circular 240 km scan; right side is legend.
    if (x-410)**2 + (y-395)**2 > 399**2:
        return False
    h, s, v = colorsys.rgb_to_hsv(r/255, g/255, b/255)
    # Rain echoes use saturated green/yellow/orange/red/magenta.
    # Suppress beige land, blue sea, dark text, borders and map labels.
    if s < 0.34 or v < 0.22:
        return False
    hue = h*360
    if 65 <= hue <= 170 and g > r*1.27 and g > b*1.18:
        return True
    if 30 <= hue < 65 and r > b*1.7 and g > b*1.55 and g > 90:
        return True
    if (hue < 30 or hue > 330) and r > g*1.35 and r > b*1.35 and r > 105:
        return True
    if 270 <= hue <= 330 and r > b*.7 and b > g*1.3:
        return True
    return False


def main():
    req=urllib.request.Request(SOURCE,headers={'User-Agent':'IEAT-map-radar/1.0'})
    with urllib.request.urlopen(req,timeout=45) as resp:
        data=resp.read(15_000_000)
    source=Image.open(io.BytesIO(data))
    if source.n_frames < 2 or source.size[0] < 800:
        raise RuntimeError('TMD image is incomplete; preserving previous files')
    frames=[]; durations=[]
    for idx in range(source.n_frames):
        source.seek(idx)
        frame=source.convert('RGB').crop((0,0,800,800))
        rgba=Image.new('RGBA',frame.size,(0,0,0,0))
        pixels=frame.load(); out=rgba.load()
        for y in range(800):
            for x in range(800):
                r,g,b=pixels[x,y]
                if color_is_echo(r,g,b,x,y):
                    out[x,y]=(r,g,b,255)
        pal=rgba.convert('RGB').quantize(colors=254,method=Image.Quantize.FASTOCTREE)
        mask=rgba.getchannel('A')
        # Reserve palette slot 255 for transparent pixels.
        pal.putpalette((pal.getpalette() or [])[:765]+[0,0,0])
        pal.paste(255,(0,0,800,800),Image.eval(mask,lambda a:255-a))
        pal.info['transparency']=255
        frames.append(pal)
        durations.append(max(100,source.info.get('duration',500)))
    OUTPUT.parent.mkdir(parents=True,exist_ok=True)
    ORIGINAL.write_bytes(data)
    frames[0].save(OUTPUT,save_all=True,append_images=frames[1:],duration=durations,loop=0,transparency=255,disposal=2,optimize=False)
    print(f'{OUTPUT}: {len(frames)} frames, {OUTPUT.stat().st_size} bytes')

if __name__=='__main__': main()
