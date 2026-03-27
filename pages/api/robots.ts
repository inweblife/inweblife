import type { NextApiRequest, NextApiResponse } from "next";

const SITE_URL = "https://inweblife.vercel.app";

const ROBOTS_TXT = `User-agent: *
Allow: /
Disallow: /api/
Disallow: /_next/data/
Disallow: /_vercel/
Disallow: /admin/
Disallow: /dashboard/
Disallow: /private/
Disallow: /auth/
Host: ${SITE_URL}
Sitemap: ${SITE_URL}/sitemap.xml
`;

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader("Content-Type", "text/plain; charset=utf-8");
  res.status(200).send(ROBOTS_TXT);
}
