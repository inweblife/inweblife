import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";

const ROOT = process.cwd();
const PAGES_DIR = path.join(ROOT, "pages");
const POSTS_FILE = path.join(ROOT, "lib", "posts.js");

const PAGE_EXTENSIONS = new Set([".js", ".tsx"]);
const SKIP_FILES = new Set(["_app.tsx", "_document.tsx"]);

const read = (filePath) => fs.readFileSync(filePath, "utf8");

const findSeoHeadBlock = (source) => {
  const start = source.indexOf("<SeoHead");
  if (start === -1) return null;
  const selfClosingEnd = source.indexOf("/>", start);
  const closeTagEnd = source.indexOf("</SeoHead>", start);

  if (selfClosingEnd !== -1 && (closeTagEnd === -1 || selfClosingEnd < closeTagEnd)) {
    return source.slice(start, selfClosingEnd + 2);
  }
  if (closeTagEnd !== -1) {
    return source.slice(start, closeTagEnd + "</SeoHead>".length);
  }
  return null;
};

const getPropValue = (block, prop) => {
  const rx = new RegExp(`${prop}="([^"]+)"`);
  return block.match(rx)?.[1] ?? null;
};

const getAllPaths = () => {
  const files = fs.readdirSync(PAGES_DIR);
  return files
    .filter((file) => PAGE_EXTENSIONS.has(path.extname(file)))
    .filter((file) => !SKIP_FILES.has(file))
    .map((file) => path.join(PAGES_DIR, file));
};

const failures = [];
const warnings = [];
const articlePaths = [];
const articleMeta = new Map();

for (const filePath of getAllPaths()) {
  const source = read(filePath);
  const fileName = path.basename(filePath);
  const seoBlock = findSeoHeadBlock(source);

  if (!seoBlock) continue;

  const title = getPropValue(seoBlock, "title");
  const description = getPropValue(seoBlock, "description");
  const pathValue = getPropValue(seoBlock, "path");
  const type = getPropValue(seoBlock, "type") ?? "website";
  const image = getPropValue(seoBlock, "image");
  const publishedTime = getPropValue(seoBlock, "publishedTime");
  const modifiedTime = getPropValue(seoBlock, "modifiedTime");

  if (!title) failures.push(`${fileName}: липсва SeoHead.title`);
  if (!description) failures.push(`${fileName}: липсва SeoHead.description`);
  if (!pathValue) failures.push(`${fileName}: липсва SeoHead.path`);

  if (description) {
    if (description.length < 70) {
      warnings.push(`${fileName}: description е къс (${description.length})`);
    }
    if (description.length > 170) {
      warnings.push(`${fileName}: description е дълъг (${description.length})`);
    }
  }

  if (type === "article") {
    articlePaths.push(pathValue);
    articleMeta.set(pathValue, { fileName, description, publishedTime, modifiedTime });

    if (!publishedTime || !modifiedTime) {
      failures.push(`${fileName}: article страница без publishedTime/modifiedTime`);
    }
    if (!source.includes('"@type": "Article"')) {
      failures.push(`${fileName}: article страница без Article schema`);
    }
    if (!source.includes('"@type": "BreadcrumbList"')) {
      failures.push(`${fileName}: article страница без BreadcrumbList schema`);
    }
    if (!image?.startsWith("/og/")) {
      warnings.push(`${fileName}: article image не е от /og/`);
    }
  }
}

// lib/posts.js е източникът за картичките, sitemap.xml и RSS, затова трябва да съвпада със
// SeoHead на всяка статия.
const { posts } = await import(pathToFileURL(POSTS_FILE).href);
const postsByHref = new Map(posts.map((post) => [post.href, post]));
const day = (isoTime) => isoTime?.slice(0, 10);

for (const routePath of articlePaths) {
  if (!routePath) continue;
  const post = postsByHref.get(routePath);
  const meta = articleMeta.get(routePath);
  if (!post) {
    failures.push(`posts.js: липсва статия ${routePath} (няма да е в блога, sitemap и RSS)`);
    continue;
  }
  if (post.published !== day(meta.publishedTime)) {
    failures.push(`posts.js: ${routePath} published ${post.published} ≠ ${meta.fileName} ${day(meta.publishedTime)}`);
  }
  if (post.modified !== day(meta.modifiedTime)) {
    failures.push(`posts.js: ${routePath} modified ${post.modified} ≠ ${meta.fileName} ${day(meta.modifiedTime)}`);
  }
  if (post.summary !== meta.description) {
    failures.push(`posts.js: ${routePath} summary ≠ description в ${meta.fileName}`);
  }
  if (!post.category) {
    failures.push(`posts.js: ${routePath} без category (нужна за RSS)`);
  }
}

if (warnings.length) {
  console.log("SEO warnings:");
  for (const warning of warnings) console.log(`- ${warning}`);
  console.log("");
}

if (failures.length) {
  console.error("SEO check failed:");
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log("SEO check passed.");
