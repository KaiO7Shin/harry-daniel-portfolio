import fs from "fs";
import path from "path";
import sharp from "sharp";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dir = path.join(__dirname, "..", "public", "images", "harry");
fs.mkdirSync(dir, { recursive: true });

const specs = [
  { file: "hero.png", w: 900, h: 1200 },
  { file: "hero-mobile.png", w: 800, h: 1000 },
  { file: "portrait.jpg", w: 900, h: 1200 },
  { file: "profile-action.jpg", w: 900, h: 1200 },
  { file: "focus.jpg", w: 900, h: 1200 },
  { file: "gallery-01.jpg", w: 1000, h: 1400 },
  { file: "gallery-02.jpg", w: 1400, h: 900 },
  { file: "gallery-03.jpg", w: 1200, h: 900 },
  { file: "gallery-04.jpg", w: 1200, h: 900 },
  { file: "gallery-05.jpg", w: 1400, h: 900 },
  { file: "gallery-06.jpg", w: 1000, h: 1400 },
  { file: "og.jpg", w: 1200, h: 630 },
];

for (const spec of specs) {
  const target = path.join(dir, spec.file);
  const svg = Buffer.from(`<svg width="${spec.w}" height="${spec.h}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#141414"/>
        <stop offset="100%" stop-color="#050505"/>
      </linearGradient>
    </defs>
    <rect width="100%" height="100%" fill="url(#g)"/>
    <circle cx="70%" cy="40%" r="18%" fill="#F4C430" fill-opacity="0.08"/>
    <text x="50%" y="48%" text-anchor="middle" font-family="Arial, sans-serif" font-size="${Math.round(spec.w * 0.08)}" font-weight="700" fill="#F4C430" fill-opacity="0.35">HD</text>
    <text x="50%" y="56%" text-anchor="middle" font-family="Arial, sans-serif" font-size="${Math.round(spec.w * 0.028)}" letter-spacing="4" fill="#9A9A9A">PHOTO A VENIR</text>
  </svg>`);

  if (spec.file.endsWith(".png")) {
    await sharp(svg).png().toFile(target);
  } else {
    await sharp(svg).jpeg({ quality: 82 }).toFile(target);
  }
  console.log("wrote", spec.file);
}
