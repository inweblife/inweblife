import type { NextApiRequest, NextApiResponse } from "next";
import { Feed } from "feed";
import { SITE_URL } from "../../lib/config";

const SITE_NAME = "inweblife";

const posts = [
  {
    path: "/website-and-google-ads",
    title: "Изработка на сайт и реклама в Гугъл",
    description: "Изработка на сайт и реклама в Гугъл: реални бюджети, оптимизация и ефективен подход за бизнес растеж.",
    date: new Date("2026-03-27"),
  },
  {
    path: "/ai-seo-lie",
    title: "Голямата лъжа за SEO оптимизацията за AI",
    description: "LLM оптимизацията е мит. Разбери защо доброто SEO вече те позиционира и в AI резултатите без излишен бюджет.",
    date: new Date("2026-02-15"),
  },
  {
    path: "/telemarketing-seo",
    title: "Телемаркетинг + SEO",
    description: "Синергия между директната продажба по телефон и оптимизацията за търсачки.",
    date: new Date("2026-02-15"),
  },
  {
    path: "/how-to-make-site",
    title: "Как да направим сайт: основни етапи",
    description: "Ръководство за успешна разработка на сайт, от концепция до публикуване.",
    date: new Date("2026-02-13"),
  },
  {
    path: "/powerful-site",
    title: "Мощен сайт за бизнеса ви",
    description: "Как да изградиш сайт, който продава и поддържа марката ти.",
    date: new Date("2026-02-13"),
  },
  {
    path: "/modern-site",
    title: "Модерен сайт: дизайн и изпълнение",
    description: "Построяване на модерен сайт с UX, SEO и мобилна скорост.",
    date: new Date("2026-02-13"),
  },
  {
    path: "/seo-fashion",
    title: "SEO за модната индустрия",
    description: "Как модните брандове да печелят от органичния трафик.",
    date: new Date("2026-02-13"),
  },
];

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  const feed = new Feed({
    title: SITE_NAME,
    description: "Последни публикации от inweblife — SEO, PPC и уеб разработка",
    id: `${SITE_URL}/`,
    link: `${SITE_URL}/`,
    language: "bg",
    feedLinks: { rss: `${SITE_URL}/rss.xml` },
    copyright: `© ${new Date().getFullYear()} ${SITE_NAME}`,
  });

  for (const post of posts) {
    const url = `${SITE_URL}${post.path}`;
    feed.addItem({
      title: post.title,
      id: url,
      link: url,
      description: post.description,
      date: post.date,
    });
  }

  res.setHeader("Content-Type", "application/rss+xml; charset=utf-8");
  res.status(200).send(feed.rss2());
}
