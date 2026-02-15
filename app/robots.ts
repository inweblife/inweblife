import type { MetadataRoute } from "next";

const SITE_URL = "https://inweblife.vercel.app";

export const revalidate = 86400;
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",
          "/_next/data/",
          "/_vercel/",
          "/admin/",
          "/dashboard/",
          "/private/",
          "/auth/",
        ],
      },
    ],
    host: SITE_URL,
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
