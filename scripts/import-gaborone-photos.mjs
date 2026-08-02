import fs from "fs";
import path from "path";
import sharp from "sharp";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const outDir = path.join(root, "public", "images", "harry");
const sourceDir = path.join(outDir, "source");
const assetsDir = path.join(
  process.env.USERPROFILE || "",
  ".cursor",
  "projects",
  "c-Users-syvio-OneDrive-Documents-PERSONAL-HARRY-PORTFOLIO",
  "assets",
);

fs.mkdirSync(outDir, { recursive: true });
fs.mkdirSync(sourceDir, { recursive: true });

const inputs = [
  {
    src: path.join(
      assetsDir,
      "c__Users_syvio_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_image-d6ce9faf-6a06-4269-9320-9d1a0c91e5a6.png",
    ),
    out: "gaborone-action.jpg",
    archive: "gaborone-action-original.png",
    width: 1600,
    height: 1067,
  },
  {
    src: path.join(
      assetsDir,
      "c__Users_syvio_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_harry_1-ea508dba-3f00-4c0d-8b63-3d56e68f41f2.png",
    ),
    out: "gaborone-back.jpg",
    archive: "gaborone-back-original.png",
    width: 1400,
    height: 1750,
  },
];

async function enhance(src, { width, height, out, archive }) {
  if (!fs.existsSync(src)) {
    throw new Error(`Missing source: ${src}`);
  }

  const meta = await sharp(src).metadata();
  console.log(path.basename(src), meta.width, "x", meta.height);

  await sharp(src).toFile(path.join(sourceDir, archive));

  await sharp(src)
    .rotate()
    .resize({
      width,
      height,
      fit: "cover",
      position: "centre",
      kernel: sharp.kernel.lanczos3,
    })
    .sharpen({
      sigma: 1.1,
      m1: 0.55,
      m2: 0.3,
      x1: 2,
      y2: 10,
      y3: 20,
    })
    .modulate({ brightness: 1.03, saturation: 1.05 })
    .linear(1.04, -4)
    .jpeg({ quality: 92, mozjpeg: true, chromaSubsampling: "4:4:4" })
    .toFile(path.join(outDir, out));

  // Also copy useful gallery aliases
  return path.join(outDir, out);
}

const front = await enhance(inputs[0].src, inputs[0]);
const back = await enhance(inputs[1].src, inputs[1]);

// Map into gallery slots for competition / national team / matchs
await sharp(front)
  .resize({ width: 1400, height: 933, fit: "cover" })
  .jpeg({ quality: 90, mozjpeg: true })
  .toFile(path.join(outDir, "gallery-02.jpg"));

await sharp(back)
  .resize({ width: 1100, height: 1375, fit: "cover" })
  .jpeg({ quality: 90, mozjpeg: true })
  .toFile(path.join(outDir, "gallery-05.jpg"));

await sharp(front)
  .resize({ width: 1400, height: 933, fit: "cover" })
  .jpeg({ quality: 90, mozjpeg: true })
  .toFile(path.join(outDir, "gallery-04.jpg"));

for (const file of [
  "gaborone-action.jpg",
  "gaborone-back.jpg",
  "gallery-02.jpg",
  "gallery-04.jpg",
  "gallery-05.jpg",
]) {
  const p = path.join(outDir, file);
  const info = await sharp(p).metadata();
  console.log(
    `${file}: ${info.width}x${info.height} (${Math.round(fs.statSync(p).size / 1024)}KB)`,
  );
}

console.log("Done.");
