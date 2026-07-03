import type { NextApiRequest, NextApiResponse } from "next";
import { Feed } from "feed";
import { SITE_URL } from "../../lib/config";

const SITE_NAME = "inweblife";

const posts = [
  {
    path: "/wordpress-site",
    title: "Изработка на WordPress сайт",
    description:
      "Устойчиво дигитално присъствие. Професионалната изработка на WordPress сайт съчетава бързина, чист код и правилна SEO стратегия за успех",
    category: "Уеб разработка",
    date: new Date("2026-07-03"),
    image: "/og/wordpress-sait.png",
  },
  {
    path: "/kak-raboti-google-ads",
    title: "Как работи Google Ads: Къде печелите и къде губите пари",
    description:
      "Как работи Google Ads на практика. Вижте как се определя цената на клик, как Quality Score ви пести пари и кои настройки източват бюджета ви.",
    category: "PPC",
    date: new Date("2026-06-25"),
  },
  {
    path: "/redizain-ili-nov-sait",
    title: "Редизайн на сайт или нов сайт - кое е по-доброто решение",
    description:
      "Редизайн на сайт или нов сайт? Кога редизайнът е достатъчен, кога ви трябва нов сайт и как да запазите SEO класиранията при миграция.",
    category: "Уеб разработка",
    date: new Date("2026-06-23"),
  },
  {
    path: "/wordpress-seo",
    title: "WordPress SEO за най-добрата видимост в търсачките",
    description:
      "Как да настроите сайта си за максимален трафик? WordPress SEO за най-добрата видимост в търсачките. Вижте как да сте на първа страница.",
    category: "SEO",
    date: new Date("2026-06-05"),
  },
  {
    path: "/kak-raboti-seo",
    title: "Как работи SEO и защо някои сайтове са невидими в Google",
    description:
      "Как работи SEO - как Google обхожда, индексира и класира сайтовете, защо линковете още имат значение и как AI променя търсенето.",
    category: "SEO",
    date: new Date("2026-05-22"),
  },
  {
    path: "/aeo-ai-overview",
    title: "AEO оптимизация - как AI Overview променя SEO",
    description:
      "Какво е AEO оптимизация, как Google AI Overviews извлича съдържание с RAG и query fan-out и как да пишете пасажи, които AI цитира. Практически workflow за 2026 г.",
    category: "SEO",
    date: new Date("2026-05-12"),
  },
  {
    path: "/seo-slug-kanibalizaciya",
    title: "SEO slug канибализация - къде Гугъл се обърква",
    description: "Какво е SEO slug канибализация? Как обърква Google и защо вреди. Вижте я в Search Console и спрете вътрешната конкуренция с 301 редирект.",
    category: "SEO",
    date: new Date("2026-04-30"),
  },
  {
    path: "/digitalen-marketing",
    title: "Дигитален маркетинг за печеливш бизнес",
    description:
      "Дигитален маркетинг за малкия бизнес: стратегии, канали и реален план с 300-400 евро. SEO, Google Ads и социални мрежи без корпоративни бюджети.",
    category: "Дигитален маркетинг",
    date: new Date("2026-04-27"),
  },
  {
    path: "/kalkulator-digitalen-marketing",
    title: "Калкулатор за дигитален маркетинг - примерни цени",
    description: "Примерни цени за дигитален маркетинг в България: изработка на сайт, SEO, Google Ads, социални мрежи. Реалистични диапазони, не агенционни обещания.",
    category: "Дигитален маркетинг",
    date: new Date("2026-04-24"),
  },
  {
    path: "/google-ads-reklama",
    title: "Реклама в Гугъл: От кликове към продажби",
    description: "Как работи рекламата в Гугъл, колко струва и как да я настроите правилно - от избор на бюджет и стратегия за наддаване до ключови думи, региони и синергията с SEO.",
    category: "PPC",
    date: new Date("2026-04-23"),
  },
  {
    path: "/ads-without-seo",
    title: "Реклама в LinkedIn без SEO? Не хвърляйте пари на вятъра",
    description: "Защо платената реклама в LinkedIn и Google Ads без SEO основа прахосва бюджета ви. Семантично ядро, пилар клъстери и AEO - пълното ръководство преди да пуснете първата си кампания.",
    category: "SEO",
    date: new Date("2026-04-22"),
  },
  {
    path: "/seo-optimizaciya-na-ueb-sait",
    title: "SEO оптимизация на уеб сайт - цени, процес и стратегия",
    description: "Какво е SEO оптимизация, как се прави оптимизация на уеб сайт стъпка по стъпка, колко струва и каква SEO услуга ви трябва за дългосрочни резултати.",
    category: "SEO",
    date: new Date("2026-04-16"),
  },
  {
    path: "/izrabotka-na-sait",
    title: "Как се изработва сайт - стъпки, технологии и цена",
    description: "Какво реално включва изработката на уебсайт - от проучване и структура до избор на технология, цени и поддръжка след публикуването.",
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
    description: "Колко струва реално да имаш сайт и Google Ads? Без маркетингови клишета - числа, логика и кое работи за малкия бизнес.",
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
    title: "Мобилна оптимизация на сайт - UX, скорост и SEO класиране",
    description: "Как се прави мобилна оптимизация на сайт - скорост, UX и структура, които подобряват SEO класирането в Google.",
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
    description: "Core Web Vitals, mobile-first индексиране и техническото SEO, което повечето агенции пропускат. С конкретни числа - LCP, CLS, INP.",
    category: "Уеб разработка",
    date: new Date("2026-02-03"),
  },
  {
    path: "/how-to-make-site",
    title: "Как се прави сайт",
    description: "Повечето сайтове се провалят още преди да е написан ред код. Ето 5-те решения, които определят дали сайтът ще работи за бизнеса - с реални цени и рамка за избор.",
    category: "Уеб разработка",
    date: new Date("2026-01-27"),
  },
];

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
      image: `${SITE_URL}${post.image ?? `/og${post.path}.png`}`,
    });
  }

  res.setHeader("Content-Type", "application/rss+xml; charset=utf-8");
  res.setHeader("Cache-Control", "public, s-maxage=3600, stale-while-revalidate=86400");
  res.setHeader("X-Robots-Tag", "noindex");
  res.status(200).send(feed.rss2());
}
