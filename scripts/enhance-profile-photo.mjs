import fs from "fs";
import path from "path";
import sharp from "sharp";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");

const source = path.join(
  process.env.USERPROFILE || "",
  ".cursor",
  "projects",
  "c-Users-syvio-OneDrive-Documents-PERSONAL-HARRY-PORTFOLIO",
  "assets",
  "c__Users_syvio_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_image-fe37e19a-609f-4176-bd23-101de16efb86.png",
);

const outDir = path.join(root, "public", "images", "harry");
const archiveDir = path.join(outDir, "source");

fs.mkdirSync(outDir, { recursive: true });
fs.mkdirSync(archiveDir, { recursive: true });

if (!fs.existsSync(source)) {
  console.error("Source image not found:", source);
  process.exit(1);
}

const meta = await sharp(source).metadata();
const w = meta.width || 960;
const h = meta.height || 640;
console.log("Source:", w, "x", h, meta.format);

await sharp(source)
  .png({ compressionLevel: 6 })
  .toFile(path.join(archiveDir, "profile-original.png"));

/**
 * Vertical crop focused on Harry (slightly right of center, facing right).
 * Target ratio 4:5.
 */
const portraitRatio = 4 / 5;
let cropHeight = h;
let cropWidth = Math.round(cropHeight * portraitRatio);

if (cropWidth > w) {
  cropWidth = w;
  cropHeight = Math.round(cropWidth / portraitRatio);
}

// Bias crop toward the subject (right of center)
const idealCenterX = Math.round(w * 0.58);
let cropLeft = Math.round(idealCenterX - cropWidth / 2);
cropLeft = Math.max(0, Math.min(cropLeft, w - cropWidth));
const cropTop = Math.max(0, Math.round((h - cropHeight) / 2));

async function enhance(pipeline, { width, height }) {
  return pipeline
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
    .modulate({
      brightness: 1.05,
      saturation: 1.1,
    })
    .linear(1.06, -8)
    .jpeg({
      quality: 92,
      mozjpeg: true,
      chromaSubsampling: "4:4:4",
    });
}

// Main profile portrait (vertical)
await enhance(
  sharp(source).extract({
    left: cropLeft,
    top: cropTop,
    width: cropWidth,
    height: cropHeight,
  }),
  { width: 1200, height: 1500 },
).then((img) => img.toFile(path.join(outDir, "portrait.jpg")));

// Action / intro photo — same framing, slightly wider feel kept vertical
await enhance(
  sharp(source).extract({
    left: cropLeft,
    top: cropTop,
    width: cropWidth,
    height: cropHeight,
  }),
  { width: 1400, height: 1750 },
).then((img) => img.toFile(path.join(outDir, "profile-action.jpg")));

// Gallery portrait entry
await enhance(
  sharp(source).extract({
    left: cropLeft,
    top: cropTop,
    width: cropWidth,
    height: cropHeight,
  }),
  { width: 1100, height: 1375 },
).then((img) => img.toFile(path.join(outDir, "gallery-01.jpg")));

// Also keep an enhanced landscape version for editorial/wide uses
await enhance(sharp(source), { width: 1920, height: 1280 }).then((img) =>
  img.toFile(path.join(outDir, "portrait-wide.jpg")),
);

for (const file of [
  "portrait.jpg",
  "profile-action.jpg",
  "gallery-01.jpg",
  "portrait-wide.jpg",
]) {
  const filePath = path.join(outDir, file);
  const info = await sharp(filePath).metadata();
  const kb = Math.round(fs.statSync(filePath).size / 1024);
  console.log(`${file}: ${info.width}x${info.height} (${kb}KB)`);
}

console.log("Crop window:", { cropLeft, cropTop, cropWidth, cropHeight });
console.log("Done.");
