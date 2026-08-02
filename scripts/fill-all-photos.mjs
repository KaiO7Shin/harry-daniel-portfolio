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

function asset(name) {
  return path.join(assetsDir, name);
}

async function enhance(src, dest, { width, height, position = "centre" }) {
  if (!fs.existsSync(src)) throw new Error(`Missing ${src}`);
  const meta = await sharp(src).metadata();
  console.log(`${path.basename(dest)} ← ${meta.width}x${meta.height}`);

  await sharp(src)
    .rotate()
    .resize({
      width,
      height,
      fit: "cover",
      position,
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
    .toFile(dest);
}

async function archive(src, name) {
  await sharp(src).toFile(path.join(sourceDir, name));
}

// ---- New photos ----
const newPhotos = [
  {
    src: asset(
      "c__Users_syvio_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_image-1fe36f03-d352-4f42-86d4-35c6845268fb.png",
    ),
    out: "gaborone-forehand.jpg",
    archive: "gaborone-forehand-original.png",
    width: 1600,
    height: 1067,
  },
  {
    src: asset(
      "c__Users_syvio_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_image-be1ae2c3-9582-4c38-b44c-c60e4fbc770d.png",
    ),
    out: "competition-ready.jpg",
    archive: "competition-ready-original.png",
    width: 1400,
    height: 1750,
    position: "attention",
  },
  {
    src: asset(
      "c__Users_syvio_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_image-a201a115-d16e-4804-ae66-c7a4186c2fd2.png",
    ),
    out: "equipe-doubles.jpg",
    archive: "equipe-doubles-original.png",
    width: 1600,
    height: 1067,
  },
  {
    src: asset(
      "c__Users_syvio_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_image-c0969b46-8846-4379-b85e-e1e9942fdccc.png",
    ),
    out: "media-interview.jpg",
    archive: "media-interview-original.png",
    width: 1200,
    height: 1600,
    position: "centre",
  },
];

for (const item of newPhotos) {
  await archive(item.src, item.archive);
  await enhance(item.src, path.join(outDir, item.out), item);
}

// Wide variant for doubles / ready
await enhance(
  asset(
    "c__Users_syvio_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_image-be1ae2c3-9582-4c38-b44c-c60e4fbc770d.png",
  ),
  path.join(outDir, "competition-ready-wide.jpg"),
  { width: 1600, height: 1067, position: "centre" },
);

// ---- Replace remaining placeholders with real photos ----
const replacements = [
  // gallery slots as unique named copies
  ["gaborone-forehand.jpg", "gallery-02.jpg", 1400, 933],
  ["antananaivo-serve.jpg", "gallery-03.jpg", 1400, 933],
  ["competition-ready-wide.jpg", "gallery-04.jpg", 1400, 933],
  ["equipe-doubles.jpg", "gallery-05.jpg", 1400, 933],
  ["media-interview.jpg", "gallery-06.jpg", 1100, 1375],
  ["portrait.jpg", "gallery-01.jpg", 1100, 1375],
];

for (const [from, to, w, h] of replacements) {
  await sharp(path.join(outDir, from))
    .resize({ width: w, height: h, fit: "cover", position: "centre" })
    .jpeg({ quality: 90, mozjpeg: true })
    .toFile(path.join(outDir, to));
  console.log("mapped", to, "←", from);
}

// Focus section: stronger action/ready image
await sharp(path.join(outDir, "competition-ready.jpg"))
  .jpeg({ quality: 92, mozjpeg: true })
  .toFile(path.join(outDir, "focus.jpg"));

// Profile action: use dynamic Gaborone forehand crop vertical
await enhance(
  asset(
    "c__Users_syvio_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_image-1fe36f03-d352-4f42-86d4-35c6845268fb.png",
  ),
  path.join(outDir, "profile-action.jpg"),
  { width: 1400, height: 1750, position: "right" },
);

// OG image 1200x630 from portrait / action
await sharp(path.join(outDir, "gaborone-forehand.jpg"))
  .resize({ width: 1200, height: 630, fit: "cover", position: "centre" })
  .jpeg({ quality: 90, mozjpeg: true })
  .toFile(path.join(outDir, "og.jpg"));

console.log("\nFinal inventory:");
for (const file of fs.readdirSync(outDir).filter((f) => /\.(jpg|png)$/i.test(f))) {
  const p = path.join(outDir, file);
  const info = await sharp(p).metadata();
  const kb = Math.round(fs.statSync(p).size / 1024);
  const flag = kb < 30 ? " ⚠ PLACEHOLDER?" : "";
  console.log(`  ${file}: ${info.width}x${info.height} (${kb}KB)${flag}`);
}

console.log("Done.");
