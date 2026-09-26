#!/usr/bin/env python3
"""Refresh transparent, animated TMD radar echoes for the IEAT map."""
import io
from pathlib import Path
from urllib.request import Request, urlopen

from PIL import Image


RADARS = {
    'mhs': ('https://weather.tmd.go.th/mhs/mhsloop.gif', 415, 393),
    'lmp': ('https://weather.tmd.go.th/lmp/lmploop.gif', 410, 393),
    'skm': ('https://weather.tmd.go.th/skm/skmloop.gif', 437, 393),
    'hyi': ('https://weather.tmd.go.th/hyi/hyiLoop.gif', 414, 393),
}
PALETTE = [
    (202, 0, 0), (252, 0, 251), (229, 0, 229), (198, 0, 199),
    (186, 0, 1), (210, 0, 0), (248, 0, 0), (254, 104, 1),
    (254, 236, 1), (239, 0, 241), (213, 0, 212), (184, 0, 184),
    (255, 85, 0), (254, 122, 1), (254, 180, 0), (254, 197, 1),
    (254, 219, 1), (254, 253, 1), (1, 253, 1), (1, 218, 1),
    (1, 196, 1), (1, 140, 1), (1, 123, 1), (1, 100, 1),
    (1, 85, 1), (170, 0, 169), (170, 0, 0), (234, 0, 1),
    (254, 140, 2), (1, 236, 1), (1, 179, 1), (254, 165, 2),
]


def make_overlay(name, url, cx, cy):
    request = Request(url, headers={'User-Agent': 'IEAT-radar-map/1.0'})
    with urlopen(request, timeout=45) as response:
        data = response.read(15_000_001)
    if len(data) > 15_000_000:
        raise ValueError('GIF exceeds size limit')
    source = Image.open(io.BytesIO(data))
    if source.size != (800, 800) or source.n_frames < 2:
        raise ValueError('Unexpected TMD radar image')
    frames, durations = [], []
    for i in range(source.n_frames):
        source.seek(i)
        frame = source.convert('RGB')
        # Match the discrete echo palette, excluding terrain, sea, labels, and legend.
        colors = frame.getcolors(640000) or []
        lookup = {
            rgb: any(sum((rgb[j] - echo[j]) ** 2 for j in range(3)) <= 300 for echo in PALETTE)
            for _, rgb in colors
        }
        pixels = frame.load()
        rgba = Image.new('RGBA', frame.size)
        out = rgba.load()
        for y in range(8, 775):
            for x in range(10, 790):
                if (x-cx)**2 + (y-cy)**2 > 385**2:
                    continue
                rgb = pixels[x, y]
                # Mae Hong Son's CMAX product also uses a muted green echo.
                muted_mhs_echo = (name == 'mhs' and rgb[1] > 145
                                  and rgb[1] > rgb[0] * 1.45
                                  and rgb[1] > rgb[2] * 1.45
                                  and rgb[2] < 115)
                if lookup.get(rgb, False) or muted_mhs_echo:
                    out[x, y] = (*rgb, 255)
        pal = rgba.convert('RGB').quantize(colors=254, method=Image.Quantize.FASTOCTREE)
        mask = rgba.getchannel('A')
        pal.putpalette((pal.getpalette() or [])[:765] + [0, 0, 0])
        pal.paste(255, (0, 0, 800, 800), Image.eval(mask, lambda a: 255 - a))
        pal.info['transparency'] = 255
        frames.append(pal)
        durations.append(max(100, source.info.get('duration', 500)))
    output = Path('docs/data') / f'{name}-rain-overlay.gif'
    output.parent.mkdir(parents=True, exist_ok=True)
    frames[0].save(output, save_all=True, append_images=frames[1:],
                   duration=durations, loop=0, transparency=255,
                   disposal=2, optimize=False)
    print(f'{name}: {source.n_frames} frames, {output.stat().st_size} bytes')


if __name__ == '__main__':
    failures = []
    for key, (url, center_x, center_y) in RADARS.items():
        try:
            make_overlay(key, url, center_x, center_y)
        except Exception as error:
            failures.append(key)
            print(f'{key}: {error}; keeping previous overlay')
    if len(failures) == len(RADARS):
        raise SystemExit('No radar could be refreshed')
