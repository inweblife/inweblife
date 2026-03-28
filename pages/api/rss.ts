import type { NextApiRequest, NextApiResponse } from "next";
import { Feed } from "feed";
import { SITE_URL } from "../../lib/config";

const SITE_NAME = "inweblife";

const posts = [
  {
    path: "/website-and-google-ads",
    title: "Изработка на сайт и реклама в Гугъл",
    description: "Колко струва реално да имаш сайт и Google Ads? Без маркетингови клишета — числа, логика и кое работи за малкия бизнес.",
    category: "PPC",
    date: new Date("2026-03-27"),
  },
  {
    path: "/ai-seo-lie",
    title: "Голямата лъжа за SEO оптимизацията за AI",
    description: "Агенциите вече продават „AI SEO" на завишена цена. Проблемът: не съществува. Ако сайтът ти е добре оптимизиран, ChatGPT и Bing вече те намират.",
    category: "SEO",
    date: new Date("2026-02-15"),
  },
  {
    path: "/telemarketing-seo",
    title: "Телемаркетинг + SEO",
    description: "Телефонът затваря сделки, SEO докарва хората. Двете заедно правят фуния, която не разчита нито само на студени обаждания, нито само на търпение.",
    category: "SEO",
    date: new Date("2026-02-15"),
  },
  {
    path: "/how-to-make-site",
    title: "Как да направим сайт: основни етапи",
    description: "Повечето сайтове се провалят още на етап 1 — преди да е написан ред код. Ето кои са грешките и как се избягват при изработката.",
    category: "Уеб разработка",
    date: new Date("2026-02-13"),
  },
  {
    path: "/powerful-site",
    title: "Мощен сайт за бизнеса ви",
    description: "Красивият сайт не продава. Продава сайтът, построен около това какво търси клиентът — и защо трябва да избере теб.",
    category: "Уеб разработка",
    date: new Date("2026-02-13"),
  },
  {
    path: "/modern-site",
    title: "Модерен сайт: дизайн и изпълнение",
    description: "2024 вдигна летвата: мобилна скорост, Core Web Vitals, достъпност. Ако сайтът ти е от 2019, вероятно вече те боли в класирането.",
    category: "Уеб разработка",
    date: new Date("2026-02-13"),
  },
  {
    path: "/seo-fashion",
    title: "SEO за модната индустрия",
    description: "Модните брандове харчат хиляди за Instagram и нула за SEO. Проблемът: Instagram не те намират, когато клиентът търси конкретен продукт.",
    category: "SEO",
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
    image: `${SITE_URL}/favicon.png`,
    favicon: `${SITE_URL}/favicon.png`,
    feedLinks: { rss: `${SITE_URL}/rss.xml` },
    copyright: `© ${new Date().getFullYear()} ${SITE_NAME}`,
    author: { name: SITE_NAME, link: SITE_URL },
  });

  for (const post of posts) {
    const url = `${SITE_URL}${post.path}`;
    feed.addItem({
      title: post.title,
      id: url,
      link: url,
      description: post.description,
      date: post.date,
      category: [{ name: post.category }],
      author: [{ name: SITE_NAME, link: SITE_URL }],
    });
  }

  res.setHeader("Content-Type", "application/rss+xml; charset=utf-8");
  res.status(200).send(feed.rss2());
}
