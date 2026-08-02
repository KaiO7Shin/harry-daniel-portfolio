import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");

function walk(dir, files = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (
      entry.name === "node_modules" ||
      entry.name === ".next" ||
      entry.name === "source" ||
      entry.name === "scripts"
    ) {
      continue;
    }
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, files);
    else if (/\.(ts|tsx|js|jsx|mjs|css)$/.test(entry.name)) files.push(full);
  }
  return files;
}

const files = walk(root);
const re = /["'`](\/images\/[^"'`\s)]+)["'`]/g;
const refs = new Map();

for (const file of files) {
  const content = fs.readFileSync(file, "utf8");
  let m;
  while ((m = re.exec(content))) {
    const p = m[1];
    if (!refs.has(p)) refs.set(p, new Set());
    refs.get(p).add(path.relative(root, file).replace(/\\/g, "/"));
  }
}

const missing = [];
const present = [];
const tiny = [];

for (const [imgPath, sources] of [...refs.entries()].sort()) {
  const disk = path.join(root, "public", imgPath.replace(/^\//, ""));
  const exists = fs.existsSync(disk);
  const size = exists ? fs.statSync(disk).size : 0;
  const kb = Math.round(size / 1024);
  const usedIn = [...sources].slice(0, 4).join(", ");
  if (!exists) missing.push({ imgPath, usedIn });
  else if (size < 30000 && !imgPath.endsWith(".svg"))
    tiny.push({ imgPath, kb, usedIn });
  else present.push({ imgPath, kb, usedIn });
}

console.log(`=== PRESENT (${present.length}) ===`);
for (const r of present) console.log(`OK   ${r.imgPath} (${r.kb}KB)`);

console.log(`\n=== TINY / SUSPECT (${tiny.length}) ===`);
if (tiny.length === 0) console.log("(none)");
for (const r of tiny) console.log(`TINY ${r.imgPath} (${r.kb}KB) <- ${r.usedIn}`);

console.log(`\n=== MISSING (${missing.length}) ===`);
if (missing.length === 0) console.log("(none)");
for (const r of missing) console.log(`MISS ${r.imgPath} <- ${r.usedIn}`);

// Section mapping for UI
const sectionMap = {
  "Hero": ["hero.png", "hero-mobile.png"],
  "Profil": ["portrait.jpg"],
  "Présentation accueil": ["profile-action.jpg"],
  "Objectifs / focus": ["focus.jpg"],
  "Open Graph": ["og.jpg"],
  "Drapeau": ["madagascar-flag.svg", "madagascar-flag.png"],
};

console.log("\n=== SECTIONS UI ===");
for (const [section, names] of Object.entries(sectionMap)) {
  for (const name of names) {
    const disk = path.join(
      root,
      "public",
      name.includes("madagascar") ? "images" : "images/harry",
      name.includes("madagascar") ? name : name,
    );
    // fix path
  }
}

const checks = [
  ["Hero", "public/images/harry/hero.png"],
  ["Hero mobile", "public/images/harry/hero-mobile.png"],
  ["Profil portrait", "public/images/harry/portrait.jpg"],
  ["Présentation", "public/images/harry/profile-action.jpg"],
  ["Focus objectifs", "public/images/harry/focus.jpg"],
  ["OG", "public/images/harry/og.jpg"],
  ["Drapeau SVG", "public/images/madagascar-flag.svg"],
  ["Drapeau PNG", "public/images/madagascar-flag.png"],
];

for (const [label, rel] of checks) {
  const disk = path.join(root, rel);
  const ok =
    fs.existsSync(disk) &&
    (rel.endsWith(".svg")
      ? fs.statSync(disk).size >= 100
      : fs.statSync(disk).size >= 1000);
  console.log(`${ok ? "OK" : "MISS"}  ${label} -> ${rel}`);
}

// Gallery items
const gallery = await import(path.join(root, "data/gallery.ts").replace(/\\/g, "/")).catch(() => null);

// Parse gallery without ts import
const gallerySrc = fs.readFileSync(path.join(root, "data/gallery.ts"), "utf8");
const items = [...gallerySrc.matchAll(/id:\s*"(g\d+)"[\s\S]*?src:\s*"([^"]+)"/g)];
console.log("\n=== GALLERY ITEMS ===");
let galleryMiss = 0;
for (const [, id, src] of items) {
  const disk = path.join(root, "public", src.replace(/^\//, ""));
  const ok = fs.existsSync(disk) && fs.statSync(disk).size >= 30000;
  if (!ok) galleryMiss++;
  console.log(`${ok ? "OK" : "MISS"}  ${id} -> ${src}`);
}

const previewBlock = gallerySrc.match(/galleryPreviewIds\s*=\s*\[([\s\S]*?)\]/)?.[1] || "";
const previewIds = [...previewBlock.matchAll(/"(g\d+)"/g)].map((m) => m[1]);
const idToSrc = Object.fromEntries(items.map((m) => [m[1], m[2]]));
console.log("\n=== HOME PREVIEW ===");
for (const id of previewIds) {
  const src = idToSrc[id];
  const disk = src ? path.join(root, "public", src.replace(/^\//, "")) : "";
  const ok = src && fs.existsSync(disk);
  console.log(`${ok ? "OK" : "MISS"}  ${id} -> ${src || "unknown id"}`);
}

const clubs = fs.readFileSync(path.join(root, "data/clubs.ts"), "utf8");
const chapterImgs = [...clubs.matchAll(/image:\s*"([^"]+)"/g)].map((m) => m[1]);
console.log("\n=== JOURNEY / DATA CLUBS IMAGES ===");
for (const img of chapterImgs) {
  const disk = path.join(root, "public", img.replace(/^\//, ""));
  const ok = fs.existsSync(disk) && fs.statSync(disk).size >= 30000;
  console.log(`${ok ? "OK" : "MISS"}  ${img}`);
}

const player = fs.readFileSync(path.join(root, "data/player.ts"), "utf8");
const playerImgs = [...player.matchAll(/:\s*"(\/images\/[^"]+)"/g)].map((m) => m[1]);
console.log("\n=== PLAYER.IMAGES ===");
for (const img of playerImgs) {
  const disk = path.join(root, "public", img.replace(/^\//, ""));
  const size = fs.existsSync(disk) ? fs.statSync(disk).size : 0;
  const ok = size > 0 && (img.endsWith(".svg") ? size >= 100 : size >= 1000);
  console.log(`${ok ? "OK" : "MISS"}  ${img}`);
}

console.log(
  `\nSUMMARY: missing=${missing.length}, tiny=${tiny.length}, galleryMiss=${galleryMiss}, present=${present.length}`,
);
if (missing.length || tiny.length || galleryMiss) process.exit(1);
