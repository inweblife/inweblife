import Image from "next/image";
import Link from "next/link";
import SeoHead from "../components/SeoHead";

import styles from "../styles/Blog.module.css";

const SITE_URL = "https://inweblife.vercel.app";

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Начало", item: `${SITE_URL}/` },
    { "@type": "ListItem", position: 2, name: "Блог", item: `${SITE_URL}/blog` },
  ],
};
const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Блог | inweblife",
  url: `${SITE_URL}/blog`,
  inLanguage: "bg-BG",
  description:
    "Блог с практически статии за SEO, PPC, техническа архитектура, вътрешна свързаност и AI-ready съдържание.",
  isPartOf: {
    "@type": "WebSite",
    name: "inweblife",
    url: `${SITE_URL}/`,
  },
};

const posts = [
  {
    href: "/website-and-google-ads",
    title: "Изработка на сайт и реклама в Гугъл",
    image: "/website and google ads.webp",
    alt: "Изработка на сайт и реклама в Google Ads",
    summary:
      "Защо сайтът е само началото и как SEO + Google Ads дават устойчив бизнес растеж.",
  },
  {
    href: "/ai-seo-lie",
    title: "Голямата лъжа за SEO оптимизацията за AI",
    image: "/about the hype.webp",
    alt: "Визуална метафора за AI hype и SEO",
    summary:
      "Митът за отделна LLM оптимизация често е маркетингов шум върху фундаменти, които доброто SEO вече покрива.",
  },
  {
    href: "/telemarketing-seo",
    title: "Телемаркетингът – последното убежище на слабия SEO специалист",
    image: "/A high-quality digital.webp",
    alt: "Дигитална работна среда за маркетинг и SEO",
    summary:
      "Когато SEO се продава със студени обаждания, проблемът обикновено е в липсата на позициониране и авторитет.",
  },
  {
    href: "/modern-site",
    title: "Как се прави модерен сайт",
    image: "/workplace.webp",
    alt: "Модерна работна станция",
    summary:
      "Практичен поглед върху структура, UX и performance при съвременни уеб проекти.",
  },
  {
    href: "/seo-fashion",
    title: "В ерата на смартфоните",
    image: "/desk.webp",
    alt: "Бюро с техника за работа",
    summary:
      "Mobile-first подходът е стандарт за индексиране, използваемост и по-силни конверсии.",
  },
  {
    href: "/powerful-site",
    title: "Създайте мощен сайт",
    image: "/computer.webp",
    alt: "Компютър с отворен уеб проект",
    summary:
      "Комбинация от стабилна архитектура, чист код и ясни бизнес цели.",
  },
  {
    href: "/how-to-make-site",
    title: "Как се прави сайт",
    image: "/working.webp",
    alt: "Работа по уеб сайт",
    summary:
      "Основни стъпки от планиране до публикуване и последваща оптимизация.",
  },
  {
    href: "/website-and-google-ads",
    title: "Изработка на сайт и реклама в Гугъл",
    image: "/website and google ads.webp",
    alt: "Изработка на сайт и реклама в Google Ads",
    summary:
      "Защо сайтът е само началото и как SEO + Google Ads дават устойчив бизнес растеж.",
  },
];

const Blog = () => {
  return (
    <>
      <SeoHead
        title="Блог | SEO, PPC и Full-Stack стратегии за дигитален растеж"
        description="Блог за SEO, PPC, JavaScript и WordPress: semantic clusters, pillar content, technical SEO, mobile-first UX и topical authority."
        keywords="SEO блог, PPC стратегии, Next.js специалист, JavaScript Developer, WordPress Developer, semantic clusters, pillar content, topical authority, technical SEO"
        path="/blog"
        image="/og/blog-og.png"
        imageAlt="Съвременна работна станция за уеб проекти"
        type="website"
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
        />
      </SeoHead>

      <main className={styles.main} id="main-content">
        <section className={styles.heroBanner} aria-label="Блог хедър">
          <Image
            src="/workplace.webp"
            alt="Съвременна работна станция за уеб проекти"
            fill
            sizes="100vw"
            priority
            className={styles.heroImage}
          />
          <div className={styles.heroOverlay}>
            <h1 className={styles.heading}>Блог на PPC Експерт, SEO Архитект и Full-Stack Developer</h1>
          </div>
        </section>

        <section className={styles.intro} aria-label="Въведение към блога">
          <p>
            Тук публикувам практически насоки за изграждане на сайт, който е едновременно
            технически стабилен, ясен за потребителя и разбираем за търсачките. Фокусът е върху
            реални процеси, които носят дългосрочен резултат, а не върху временни тактики.
          </p>
          <p>
            Статиите обхващат теми като семантична структура, mobile-first подход, оптимизация и
            тематичен авторитет. Ако искаш сайт, който расте органично и подкрепя бизнес целите,
            започни от материалите по-долу.
          </p>
        </section>

        <section className={styles.grid} aria-label="Списък със статии">
          {posts.map((post) => (
            <article key={post.href} className={styles.card}>
              <Image
                src={post.image}
                alt={post.alt}
                width={780}
                height={500}
                className={styles.image}
              />
              <h2>{post.title}</h2>
              <p>{post.summary}</p>
              <Link href={post.href}>Виж още</Link>
            </article>
          ))}
        </section>
      </main>
    </>
  );
};

export default Blog;
