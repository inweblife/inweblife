import { SITE_URL, SITE_HOST } from "../lib/config.js";

const INDEXNOW_KEY = "aaf06956ff0c4faebb5889abb12e19af";
const INDEXNOW_KEY_LOCATION = `${SITE_URL}/${INDEXNOW_KEY}.txt`;

async function getSitemapUrls() {
  const res = await fetch(`${SITE_URL}/api/sitemap`);
  if (!res.ok) throw new Error(`Sitemap fetch failed: ${res.status}`);
  const xml = await res.text();
  return [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => match[1]);
}

async function submitToIndexNow(urlList) {
  const res = await fetch("https://api.indexnow.org/IndexNow", {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({
      host: SITE_HOST,
      key: INDEXNOW_KEY,
      keyLocation: INDEXNOW_KEY_LOCATION,
      urlList,
    }),
  });
  if (!res.ok) throw new Error(`IndexNow submission failed: ${res.status} ${await res.text()}`);
}

async function main() {
  if (process.env.VERCEL_ENV !== "production") {
    console.log("[indexnow] Skipping submission (not a production build).");
    return;
  }

  const urlList = await getSitemapUrls();
  await submitToIndexNow(urlList);
  console.log(`[indexnow] Submitted ${urlList.length} URLs.`);
}

main().catch((err) => {
  console.warn("[indexnow] Submission failed, continuing build:", err.message);
});
