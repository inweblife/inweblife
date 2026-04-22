import type { NextApiRequest, NextApiResponse } from "next";
import { SITE_URL } from "../../lib/config";

function formatDate(date: string | Date): string {
  const d = typeof date === "string" ? new Date(date) : date;
  return d.toISOString().substring(0, 10);
}

function buildXml(entries: Array<{ url: string; lastModified?: string | Date; changeFrequency?: string; priority?: number }>) {
  const rows = entries
    .map((entry) => {
      const loc = entry.url;
      const lastmod = entry.lastModified ? `\n    <lastmod>${formatDate(entry.lastModified)}</lastmod>` : "";
      const changefreq = entry.changeFrequency ? `\n    <changefreq>${entry.changeFrequency}</changefreq>` : "";
      const priority = entry.priority != null ? `\n    <priority>${entry.priority}</priority>` : "";
      return `  <url>\n    <loc>${loc}</loc>${lastmod}${changefreq}${priority}\n  </url>`;
    })
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${rows}\n</urlset>`;
}

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  const staticRoutes = [
    { path: "/", changeFrequency: "weekly", priority: 1.0 },
    { path: "/about", changeFrequency: "monthly", priority: 0.9 },
    { path: "/blog", changeFrequency: "weekly", priority: 0.95 },
  ];

  const blogPostRoutes = [
    { path: "/ads-without-seo", lastModified: "2026-04-22" },
    { path: "/seo-optimizaciya-na-ueb-sait", lastModified: "2026-04-16" },
    { path: "/izrabotka-na-sait", lastModified: "2026-04-12" },
    { path: "/quality-score-seo", lastModified: "2026-04-12" },
    { path: "/website-and-google-ads", lastModified: "2026-04-12" },
    { path: "/ai-seo-lie", lastModified: "2026-04-14" },
    { path: "/modern-site", lastModified: "2026-04-12" },
    { path: "/telemarketing-seo", lastModified: "2026-04-14" },
    { path: "/powerful-site", lastModified: "2026-04-12" },
    { path: "/how-to-make-site", lastModified: "2026-04-12" },
    { path: "/seo-fashion", lastModified: "2026-04-18" },
  ];

  const staticLastModified = new Date("2026-04-12");

  const pages = staticRoutes.map((route) => ({
    url: `${SITE_URL}${route.path}`,
    lastModified: staticLastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  const posts = blogPostRoutes.map((post) => ({
    url: `${SITE_URL}${post.path}`,
    lastModified: new Date(post.lastModified),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const entries = [...pages, ...posts];
  const xml = buildXml(entries);

  res.setHeader("Content-Type", "application/xml; charset=utf-8");
  res.status(200).send(xml);
}
