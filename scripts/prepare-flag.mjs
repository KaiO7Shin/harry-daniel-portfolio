import fs from "fs";
import path from "path";
import sharp from "sharp";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const outDir = path.join(root, "public", "images");

const source = path.join(
  process.env.USERPROFILE || "",
  ".cursor",
  "projects",
  "c-Users-syvio-OneDrive-Documents-PERSONAL-HARRY-PORTFOLIO",
  "assets",
  "c__Users_syvio_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_image-b2982aab-d41e-49ab-a390-e56fd2eb2fa8.png",
);

fs.mkdirSync(path.join(outDir, "source"), { recursive: true });

if (fs.existsSync(source)) {
  await sharp(source)
    .png()
    .toFile(path.join(outDir, "source", "madagascar-flag-original.png"));
}

// Clean high-res PNG from SVG (crisp for UI)
const svg = fs.readFileSync(path.join(outDir, "madagascar-flag.svg"));
await sharp(svg).resize(900, 600).png().toFile(path.join(outDir, "madagascar-flag.png"));

console.log("Flag assets ready.");
