import type { MetadataRoute } from "next";

const SITE_URL = "https://inweblife.vercel.app";

export const revalidate = 86400;
export const dynamic = "force-static";

const staticRoutes: Array<{
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
}> = [
  { path: "/", changeFrequency: "weekly", priority: 1.0 },
  { path: "/about", changeFrequency: "monthly", priority: 0.9 },
  { path: "/blog", changeFrequency: "weekly", priority: 0.95 },
];

const blogPostRoutes: Array<{ path: string; lastModified: string }> = [
  { path: "/modern-site", lastModified: "2026-02-13" },
  { path: "/seo-fashion", lastModified: "2026-02-13" },
  { path: "/powerful-site", lastModified: "2026-02-13" },
  { path: "/how-to-make-site", lastModified: "2026-02-13" },
  { path: "/telemarketing-seo", lastModified: "2026-02-15" },
  { path: "/ai-seo-lie", lastModified: "2026-02-15" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticLastModified = new Date("2026-02-15");

  const pages = staticRoutes.map((route) => ({
    url: `${SITE_URL}${route.path}`,
    lastModified: staticLastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  const posts = blogPostRoutes.map((post) => ({
    url: `${SITE_URL}${post.path}`,
    lastModified: new Date(post.lastModified),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...pages, ...posts];
}
