import fs from "fs";
import path from "path";
import sharp from "sharp";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const outDir = path.join(root, "public", "images", "harry");
const sourceDir = path.join(outDir, "source");

const source = path.join(
  process.env.USERPROFILE || "",
  ".cursor",
  "projects",
  "c-Users-syvio-OneDrive-Documents-PERSONAL-HARRY-PORTFOLIO",
  "assets",
  "c__Users_syvio_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_image-02515134-56f7-4f65-835b-876aab817290.png",
);

fs.mkdirSync(outDir, { recursive: true });
fs.mkdirSync(sourceDir, { recursive: true });

if (!fs.existsSync(source)) {
  console.error("Source not found:", source);
  process.exit(1);
}

const meta = await sharp(source).metadata();
const w = meta.width || 1024;
const h = meta.height || 681;
console.log("Source:", w, "x", h);

// Archive original
await sharp(source)
  .jpeg({ quality: 95, mozjpeg: true })
  .toFile(path.join(sourceDir, "main-photo-original.jpg"));

// Subject sits on the right — crop vertical 4:5 around him
const ratio = 4 / 5;
let cropH = h;
let cropW = Math.round(cropH * ratio);
if (cropW > w) {
  cropW = w;
  cropH = Math.round(cropW / ratio);
}
const subjectCenterX = Math.round(w * 0.72);
let left = Math.round(subjectCenterX - cropW / 2);
left = Math.max(0, Math.min(left, w - cropW));
const top = Math.max(0, Math.round((h - cropH) / 2));

const crop = { left, top, width: cropW, height: cropH };
console.log("Crop:", crop);

function darkVignetteSvg(width, height) {
  return Buffer.from(`<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="v" cx="55%" cy="40%" r="72%">
      <stop offset="45%" stop-color="#000000" stop-opacity="0"/>
      <stop offset="100%" stop-color="#050505" stop-opacity="0.55"/>
    </radialGradient>
    <linearGradient id="b" x1="0" y1="0" x2="0" y2="1">
      <stop offset="55%" stop-color="#050505" stop-opacity="0"/>
      <stop offset="100%" stop-color="#050505" stop-opacity="0.72"/>
    </linearGradient>
  </defs>
  <rect width="100%" height="100%" fill="url(#v)"/>
  <rect width="100%" height="100%" fill="url(#b)"/>
</svg>`);
}

async function makePortrait(file, width, height, { darken = false } = {}) {
  const base = sharp(source)
    .extract(crop)
    .resize({
      width,
      height,
      fit: "fill",
      kernel: sharp.kernel.lanczos3,
    })
    .sharpen({
      sigma: 1.15,
      m1: 0.6,
      m2: 0.35,
      x1: 2,
      y2: 10,
      y3: 20,
    })
    .modulate({
      brightness: darken ? 0.96 : 1.03,
      saturation: darken ? 0.95 : 1.06,
    })
    .linear(darken ? 1.04 : 1.05, darken ? -6 : -4);

  if (!darken) {
    await base
      .jpeg({ quality: 92, mozjpeg: true, chromaSubsampling: "4:4:4" })
      .toFile(path.join(outDir, file));
    return;
  }

  const resized = await base
    .png()
    .toBuffer();

  await sharp(resized)
    .composite([
      {
        input: darkVignetteSvg(width, height),
        blend: "over",
      },
    ])
    .jpeg({ quality: 92, mozjpeg: true, chromaSubsampling: "4:4:4" })
    .toFile(path.join(outDir, file.endsWith(".png") ? file : file));
}

async function makeHeroPng(file, width, height) {
  const resized = await sharp(source)
    .extract(crop)
    .resize({
      width,
      height,
      fit: "fill",
      kernel: sharp.kernel.lanczos3,
    })
    .sharpen({
      sigma: 1.2,
      m1: 0.65,
      m2: 0.35,
      x1: 2,
      y2: 10,
      y3: 20,
    })
    .modulate({ brightness: 0.97, saturation: 0.96 })
    .linear(1.05, -8)
    .png()
    .toBuffer();

  await sharp(resized)
    .composite([{ input: darkVignetteSvg(width, height), blend: "over" }])
    .png({ quality: 90, compressionLevel: 8 })
    .toFile(path.join(outDir, file));
}

// Profile + homepage intro (natural premium look)
await makePortrait("portrait.jpg", 1200, 1500);
await makePortrait("profile-action.jpg", 1400, 1750);
await makePortrait("gallery-01.jpg", 1100, 1375);

// Hero adapted to dark site style
await makeHeroPng("hero.png", 1200, 1500);
await makeHeroPng("hero-mobile.png", 900, 1125);

// Wide editorial version
await sharp(source)
  .resize({ width: 1920, height: 1280, fit: "cover", position: "right" })
  .sharpen({ sigma: 1.1 })
  .modulate({ brightness: 1.02, saturation: 1.04 })
  .jpeg({ quality: 92, mozjpeg: true })
  .toFile(path.join(outDir, "portrait-wide.jpg"));

// Focus section can reuse the dark-styled hero crop as JPEG
await makePortrait("focus.jpg", 1200, 1500, { darken: true });

for (const file of [
  "portrait.jpg",
  "profile-action.jpg",
  "gallery-01.jpg",
  "hero.png",
  "hero-mobile.png",
  "focus.jpg",
  "portrait-wide.jpg",
]) {
  const p = path.join(outDir, file);
  const info = await sharp(p).metadata();
  console.log(
    `${file}: ${info.width}x${info.height} (${Math.round(fs.statSync(p).size / 1024)}KB)`,
  );
}

console.log("Done.");
