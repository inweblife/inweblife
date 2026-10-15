import type { NextApiRequest, NextApiResponse } from "next";
import { Feed } from "feed";
import { SITE_URL } from "../../lib/config";
import { posts } from "../../lib/posts";
import { postOgImage } from "../../lib/postMeta";

const SITE_NAME = "inweblife";

// Датите се въвеждат като ден, но се тълкуват в българско време (+03:00),
// за да съвпадат с article:published_time в мета таговете на страниците.
const bgDate = (day: string) => new Date(`${day}T00:00:00+03:00`);

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  const feed = new Feed({
    title: SITE_NAME,
    description: "Последни публикации от inweblife - SEO, PPC и уеб разработка",
    id: `${SITE_URL}/`,
    link: `${SITE_URL}/`,
    language: "bg",
    image: `${SITE_URL}/favicon.png`,
    favicon: `${SITE_URL}/favicon.png`,
    feedLinks: { rss: `${SITE_URL}/rss.xml` },
    copyright: `© ${new Date().getFullYear()} ${SITE_NAME}`,
    author: { name: SITE_NAME, link: SITE_URL },
  });

  // pubDate е датата на публикуване - обновяването на статия не я прави нов елемент в RSS.
  for (const post of posts) {
    const url = `${SITE_URL}${post.href}`;
    feed.addItem({
      title: post.title,
      id: url,
      link: url,
      description: post.summary,
      date: bgDate(post.published),
      category: [{ name: post.category }],
      author: [{ name: SITE_NAME, link: SITE_URL }],
      image: `${SITE_URL}${postOgImage(post)}`,
    });
  }

  res.setHeader("Content-Type", "application/rss+xml; charset=utf-8");
  res.setHeader("Cache-Control", "public, s-maxage=3600, stale-while-revalidate=86400");
  res.setHeader("X-Robots-Tag", "noindex");
  res.status(200).send(feed.rss2());
}
