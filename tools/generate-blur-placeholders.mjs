import path from "node:path";
import fs from "node:fs/promises";
import { fileURLToPath } from "node:url";
import sharp from "sharp";
import { posts } from "../lib/posts.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, "..", "public");
const outputFile = path.join(__dirname, "..", "lib", "blurPlaceholders.json");

const imagePaths = [...new Set(posts.map((post) => post.image))];

const result = {};

for (const imagePath of imagePaths) {
  const filePath = path.join(publicDir, imagePath);
  const buffer = await sharp(filePath)
    .resize(16)
    .jpeg({ quality: 40 })
    .toBuffer();
  result[imagePath] = `data:image/jpeg;base64,${buffer.toString("base64")}`;
}

await fs.writeFile(outputFile, `${JSON.stringify(result, null, 2)}\n`);
console.log(
  `[blur-placeholders] Generated ${imagePaths.length} placeholders -> ${path.relative(process.cwd(), outputFile)}`
);
