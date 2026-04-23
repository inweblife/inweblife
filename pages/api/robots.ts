import type { NextApiRequest, NextApiResponse } from "next";
import { SITE_HOST, SITE_URL } from "../../lib/config";

const ROBOTS_TXT = `User-agent: *
Allow: /
Disallow: /api/
Disallow: /_next/data/
Disallow: /_vercel/
Disallow: /admin/
Disallow: /dashboard/
Disallow: /private/
Disallow: /auth/
Host: ${SITE_HOST}
Sitemap: ${SITE_URL}/sitemap.xml
`;

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  res.setHeader("Content-Type", "text/plain; charset=utf-8");
  res.setHeader("Cache-Control", "public, s-maxage=3600, stale-while-revalidate=86400");
  res.setHeader("X-Robots-Tag", "noindex");
  res.status(200).send(ROBOTS_TXT);
}
