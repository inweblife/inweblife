import type { NextApiRequest, NextApiResponse } from "next";
import sitemap from "../../../app/sitemap";

function formatDate(date: string | Date): string {
  const d = typeof date === "string" ? new Date(date) : date;
  return d.toISOString().substring(0, 10);
}

function buildXml(entries: Array<{ url: string; lastModified: Date; changeFrequency: string; priority: number }>) {
  const rows = entries
    .map((entry) => {
      const lastmod = entry.lastModified ? `\n    <lastmod>${formatDate(entry.lastModified)}</lastmod>` : "";
      const changefreq = entry.changeFrequency ? `\n    <changefreq>${entry.changeFrequency}</changefreq>` : "";
      const priority = entry.priority != null ? `\n    <priority>${entry.priority}</priority>` : "";
      return `  <url>\n    <loc>${entry.url}</loc>${lastmod}${changefreq}${priority}\n  </url>`;
    })
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${rows}\n</urlset>`;
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const entries = sitemap();
  const xml = buildXml(entries as Array<{ url: string; lastModified: Date; changeFrequency: string; priority: number }>);

  res.setHeader("Content-Type", "application/xml; charset=utf-8");
  res.status(200).send(xml);
}
