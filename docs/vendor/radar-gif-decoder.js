// GIF89a frame decoder for browsers without the WebCodecs ImageDecoder API.
// Keeps compressed frames in memory and decodes one frame at a time.
export function createGifPlayer(buffer) {
  const bytes = new Uint8Array(buffer);
  let offset = 0;
  const byte = () => bytes[offset++];
  const word = () => byte() | (byte() << 8);
  const header = String.fromCharCode(...bytes.subarray(0, 6));
  if (header !== 'GIF89a' && header !== 'GIF87a') throw Error('Invalid GIF');
  offset = 6;
  const width = word(), height = word(), screenFlags = byte();
  byte(); byte(); // Background index and pixel aspect ratio.
  const palette = size => { const colors = bytes.subarray(offset, offset + size * 3); offset += size * 3; return colors; };
  const globalColors = screenFlags & 128 ? palette(1 << ((screenFlags & 7) + 1)) : null;
  const blocks = () => {
    const pieces = []; let total = 0, length;
    while ((length = byte())) { pieces.push(bytes.subarray(offset, offset + length)); offset += length; total += length; }
    const data = new Uint8Array(total); let position = 0;
    for (const piece of pieces) { data.set(piece, position); position += piece.length; }
    return data;
  };
  const frames = [];
  let control = { delay: 100, disposal: 0, transparent: -1 };
  while (offset < bytes.length) {
    const marker = byte();
    if (marker === 0x3b) break;
    if (marker === 0x21) {
      const label = byte();
      if (label === 0xf9) {
        byte(); const flags = byte(), delay = word(), transparent = byte(); byte();
        control = { delay: Math.max(50, delay * 10), disposal: (flags >> 2) & 7, transparent: flags & 1 ? transparent : -1 };
      } else blocks();
    } else if (marker === 0x2c) {
      const left = word(), top = word(), w = word(), h = word(), flags = byte();
      const colors = flags & 128 ? palette(1 << ((flags & 7) + 1)) : globalColors;
      const codeSize = byte(), data = blocks();
      frames.push({ left, top, w, h, interlaced: !!(flags & 64), colors, codeSize, data, ...control });
      control = { delay: 100, disposal: 0, transparent: -1 };
    } else throw Error('Invalid GIF block');
  }
  if (!frames.length || !width || !height) throw Error('GIF has no frames');

  function pixels(frame) {
    const clear = 1 << frame.codeSize, end = clear + 1;
    const prefix = new Uint16Array(4096), suffix = new Uint8Array(4096), stack = new Uint8Array(4096);
    const out = new Uint8Array(frame.w * frame.h);
    let bits = 0, bitCount = 0, position = 0, codeWidth = frame.codeSize + 1, available = end + 1;
    let previous = -1, first = 0, written = 0;
    const read = () => {
      while (bitCount < codeWidth) { if (position >= frame.data.length) return -1; bits |= frame.data[position++] << bitCount; bitCount += 8; }
      const result = bits & ((1 << codeWidth) - 1); bits >>>= codeWidth; bitCount -= codeWidth; return result;
    };
    for (let code; (code = read()) >= 0 && written < out.length;) {
      if (code === clear) { codeWidth = frame.codeSize + 1; available = end + 1; previous = -1; continue; }
      if (code === end) break;
      const original = code; let depth = 0;
      if (code >= available) { if (previous < 0) throw Error('Invalid GIF LZW code'); stack[depth++] = first; code = previous; }
      while (code >= clear) { if (depth >= stack.length) throw Error('Invalid GIF LZW chain'); stack[depth++] = suffix[code]; code = prefix[code]; }
      first = code; stack[depth++] = first;
      while (depth && written < out.length) out[written++] = stack[--depth];
      if (previous >= 0 && available < 4096) {
        prefix[available] = previous; suffix[available] = first; available++;
        if (available === (1 << codeWidth) && codeWidth < 12) codeWidth++;
      }
      previous = original;
    }
    return out;
  }

  const canvas = document.createElement('canvas'); canvas.width = width; canvas.height = height;
  const context = canvas.getContext('2d', { willReadFrequently: true });
  let current = -1, restore = null;
  function next() {
    if (current >= 0) {
      const old = frames[current];
      if (old.disposal === 2) context.clearRect(old.left, old.top, old.w, old.h);
      if (old.disposal === 3 && restore) context.putImageData(restore, 0, 0);
    }
    current = (current + 1) % frames.length;
    if (current === 0) context.clearRect(0, 0, width, height);
    const frame = frames[current];
    restore = frame.disposal === 3 ? context.getImageData(0, 0, width, height) : null;
    const indices = pixels(frame), patch = context.createImageData(frame.w, frame.h);
    for (let row = 0, source = 0; row < frame.h; row++) {
      let targetRow = row;
      if (frame.interlaced) {
        const first = Math.ceil(frame.h / 8), second = Math.ceil(Math.max(0, frame.h - 4) / 8), third = Math.ceil(Math.max(0, frame.h - 2) / 4);
        targetRow = row < first ? row * 8 : row < first + second ? 4 + (row - first) * 8 : row < first + second + third ? 2 + (row - first - second) * 4 : 1 + (row - first - second - third) * 2;
      }
      for (let x = 0; x < frame.w; x++, source++) {
        const index = indices[source]; if (index === frame.transparent) continue;
        const at = (targetRow * frame.w + x) * 4, color = index * 3;
        patch.data[at] = frame.colors[color]; patch.data[at + 1] = frame.colors[color + 1]; patch.data[at + 2] = frame.colors[color + 2]; patch.data[at + 3] = 255;
      }
    }
    // putImageData replaces transparent pixels, so composite the patch with drawImage.
    const tile = document.createElement('canvas'); tile.width = frame.w; tile.height = frame.h;
    tile.getContext('2d').putImageData(patch, 0, 0);
    context.drawImage(tile, frame.left, frame.top);
    return { image: canvas, delay: frame.delay };
  }
  return { width, height, frameCount: frames.length, next };
}
