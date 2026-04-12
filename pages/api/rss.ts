import type { NextApiRequest, NextApiResponse } from "next";
import { Feed } from "feed";
import { SITE_URL } from "../../lib/config";

const SITE_NAME = "inweblife";

const posts = [
  {
    path: "/izrabotka-na-sait",
    title: "РљР°Рє СЃРµ РёР·СЂР°Р±РѕС‚РІР° СЃР°Р№С‚ вЂ” СЃС‚СЉРїРєРё, С‚РµС…РЅРѕР»РѕРіРёРё Рё С†РµРЅР°",
    description: "РљР°РєРІРѕ РІРєР»СЋС‡РІР° РёР·СЂР°Р±РѕС‚РєР°С‚Р° РЅР° СѓРµР±СЃР°Р№С‚ вЂ” РѕС‚ РїСЂРѕСѓС‡РІР°РЅРµ Рё СЃС‚СЂСѓРєС‚СѓСЂР° РґРѕ РёР·Р±РѕСЂ РЅР° С‚РµС…РЅРѕР»РѕРіРёСЏ, С†РµРЅРё Рё РїРѕРґРґСЂСЉР¶РєР° СЃР»РµРґ РїСѓР±Р»РёРєСѓРІР°РЅРµС‚Рѕ.",
    category: "РЈРµР± СЂР°Р·СЂР°Р±РѕС‚РєР°",
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
    title: "Телемаркетингът – последното убежище на слабия SEO специалист",
    description: "SEO агенция, която разчита на студени обаждания вместо на органичен трафик, показва точно колко вярва в собствената си услуга.",
    category: "SEO",
    date: new Date("2026-03-10"),
  },
  {
    path: "/ai-seo-lie",
    title: "Голямата лъжа за SEO оптимизацията за AI",
    description: "Агенциите вече продават AI SEO на завишена цена. Проблемът: не съществува като отделна дисциплина. Ако сайтът ти е добре оптимизиран, ChatGPT и Bing вече те намират.",
    category: "SEO",
    date: new Date("2026-02-25"),
  },
  {
    path: "/seo-fashion",
    title: "В ерата на смартфоните",
    description: "Мобилният потребител не чете — сканира. Как се проектира сайт около това поведение и защо мобилното UX е директен SEO сигнал.",
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
