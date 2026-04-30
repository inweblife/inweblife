import type { NextApiRequest, NextApiResponse } from "next";
import { SITE_URL } from "../../lib/config";

function formatDate(date: string | Date): string {
  const d = typeof date === "string" ? new Date(date) : date;
  return d.toISOString().substring(0, 10);
}

type SitemapEntry = {
  url: string;
  lastModified?: string | Date;
  changeFrequency?: string;
  priority?: number;
  image?: string;
};

function buildXml(entries: SitemapEntry[]) {
  const rows = entries
    .map((entry) => {
      const loc = entry.url;
      const lastmod = entry.lastModified ? `\n    <lastmod>${formatDate(entry.lastModified)}</lastmod>` : "";
      const changefreq = entry.changeFrequency ? `\n    <changefreq>${entry.changeFrequency}</changefreq>` : "";
      const priority = entry.priority != null ? `\n    <priority>${entry.priority}</priority>` : "";
      const image = entry.image ? `\n    <image:image>\n      <image:loc>${entry.image}</image:loc>\n    </image:image>` : "";
      return `  <url>\n    <loc>${loc}</loc>${lastmod}${changefreq}${priority}${image}\n  </url>`;
    })
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n${rows}\n</urlset>`;
}

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  const staticRoutes = [
    { path: "/", changeFrequency: "weekly", priority: 1.0, imageSlug: "home" },
    { path: "/about", changeFrequency: "monthly", priority: 0.9, imageSlug: "about" },
    { path: "/blog", changeFrequency: "weekly", priority: 0.95, imageSlug: "blog" },
  ];

  const blogPostRoutes = [
    { path: "/kalkulator-digitalen-marketing", lastModified: "2026-04-24" },
    { path: "/google-ads-reklama", lastModified: "2026-04-23" },
    { path: "/ads-without-seo", lastModified: "2026-04-23" },
    { path: "/seo-optimizaciya-na-ueb-sait", lastModified: "2026-04-16" },
    { path: "/izrabotka-na-sait", lastModified: "2026-04-12" },
    { path: "/quality-score-seo", lastModified: "2026-04-23" },
    { path: "/website-and-google-ads", lastModified: "2026-04-23" },
    { path: "/ai-seo-lie", lastModified: "2026-04-14" },
    { path: "/modern-site", lastModified: "2026-04-12" },
    { path: "/telemarketing-seo", lastModified: "2026-04-14" },
    { path: "/powerful-site", lastModified: "2026-04-12" },
    { path: "/how-to-make-site", lastModified: "2026-04-23" },
    { path: "/seo-fashion", lastModified: "2026-04-18" },
    { path: "/seo-slug-kanibalizaciya", lastModified: "2026-04-30" },
  ];

  const staticLastModified = new Date("2026-04-12");

  const pages = staticRoutes.map((route) => ({
    url: `${SITE_URL}${route.path}`,
    lastModified: staticLastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
    image: `${SITE_URL}/og/${route.imageSlug}.png`,
  }));

  const posts = blogPostRoutes.map((post) => ({
    url: `${SITE_URL}${post.path}`,
    lastModified: new Date(post.lastModified),
    changeFrequency: "monthly",
    priority: 0.8,
    image: `${SITE_URL}/og${post.path}.png`,
  }));

  const entries = [...pages, ...posts];
  const xml = buildXml(entries);

  res.setHeader("Content-Type", "application/xml; charset=utf-8");
  res.setHeader("Cache-Control", "public, s-maxage=3600, stale-while-revalidate=86400");
  res.setHeader("X-Robots-Tag", "noindex");
  res.status(200).send(xml);
}
