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
    src: "c__Users_syvio_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_image-4e02ab97-d2ae-44f6-be37-c7690dfb2844.png",
    out: "antananaivo-serve.jpg",
    archive: "antananaivo-serve-original.png",
  },
  {
    src: "c__Users_syvio_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_image-87eeae0b-316d-4dd9-bb2a-cacd347f9c6c.png",
    out: "antananaivo-serve-close.jpg",
    archive: "antananaivo-serve-close-original.png",
  },
  {
    src: "c__Users_syvio_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_image-14a4958f-44c8-4f82-827e-d04b623f330d.png",
    out: "antananaivo-match.jpg",
    archive: "antananaivo-match-original.png",
  },
];

for (const item of inputs) {
  const src = path.join(assetsDir, item.src);
  if (!fs.existsSync(src)) {
    console.error("Missing:", src);
    process.exit(1);
  }

  const meta = await sharp(src).metadata();
  console.log(item.out, "←", meta.width, "x", meta.height);

  await sharp(src).toFile(path.join(sourceDir, item.archive));

  await sharp(src)
    .rotate()
    .resize({
      width: 1600,
      height: 1067,
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
    .toFile(path.join(outDir, item.out));
}

await sharp(path.join(outDir, "antananaivo-serve.jpg"))
  .jpeg({ quality: 90, mozjpeg: true })
  .toFile(path.join(outDir, "gallery-03.jpg"));

console.log("Done.");
