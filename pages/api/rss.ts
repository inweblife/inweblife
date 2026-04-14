import type { NextApiRequest, NextApiResponse } from "next";
import { Feed } from "feed";
import { SITE_URL } from "../../lib/config";

const SITE_NAME = "inweblife";

const posts = [
  {
    path: "/izrabotka-na-sait",
    title: "Как се изработва сайт – стъпки, технологии и цена",
    description: "Какво реално включва изработката на уебсайт – от проучване и структура до избор на технология, цени и поддръжка след публикуването.",
    category: "Уеб разработка",
    date: new Date("2026-04-12"),
  },
  {
    path: "/quality-score-seo",
    title: "Как работи Quality Score и защо засяга и SEO",
    description: "Quality Score и органичното SEO използват едни и същи сигнали. Разберете как подобряването на Landing Page Experience, CTR и уместността на рекламата намалява CPC и едновременно повишава органичните позиции.",
    category: "SEO",
    date: new Date("2026-04-09"),
  },
  {
    path: "/website-and-google-ads",
    title: "Изработка на сайт и реклама в Гугъл",
    description: "Колко струва реално да имаш сайт и Google Ads? Без маркетингови клишета — числа, логика и кое работи за малкия бизнес.",
    category: "PPC",
    date: new Date("2026-03-27"),
  },
  {
    path: "/telemarketing-seo",
    title: "Доброто SEO, което продава, се вижда в SERP",
    description: "Агенция, която не се класира сама в Google, не може да ви класира там вас. Разберете защо доброто SEO се вижда в SERP.",
    category: "SEO",
    date: new Date("2026-03-10"),
  },
  {
    path: "/ai-seo-lie",
    title: "SEO оптимизация за AI Overview",
    description: "Как AI агентите намират и цитират сайтове в реално време и защо доброто SEO е единственото условие да се появите в Google AI Overview.",
    category: "SEO",
    date: new Date("2026-02-25"),
  },
  {
    path: "/seo-fashion",
    title: "Mobile-First SEO и поведението на мобилния потребител",
    description: "Мобилният потребител е по-нетърпелив и по-близо до решение. Как се проектира сайт около това поведение и защо mobile-first е директен SEO сигнал.",
    category: "SEO",
    date: new Date("2026-02-18"),
  },
  {
    path: "/powerful-site",
    title: "Създайте мощен сайт",
    description: "Красивият сайт не продава. Продава сайтът с ясна conversion архитектура, реални trust сигнали и правилно настроен tracking преди първата реклама.",
    category: "Уеб разработка",
    date: new Date("2026-02-10"),
  },
  {
    path: "/modern-site",
    title: "Как се прави модерен сайт",
    description: "Core Web Vitals, mobile-first индексиране и техническото SEO, което повечето агенции пропускат. С конкретни числа — LCP, CLS, INP.",
    category: "Уеб разработка",
    date: new Date("2026-02-03"),
  },
  {
    path: "/how-to-make-site",
    title: "Как се прави сайт",
    description: "Повечето сайтове се провалят още преди да е написан ред код. Ето 5-те решения, които определят дали сайтът ще работи за бизнеса — с реални цени и рамка за избор.",
    category: "Уеб разработка",
    date: new Date("2026-01-27"),
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
