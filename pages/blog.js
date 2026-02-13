import Image from "next/image";
import Link from "next/link";
import SeoHead from "../components/SeoHead";

import styles from "../styles/Blog.module.css";

const posts = [
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
];

const Blog = () => {
  return (
    <>
      <SeoHead
        title="Блог | SEO, PPC и Full-Stack стратегии за растеж"
        description="Практичен блог за SEO, PPC, JavaScript и WordPress с фокус върху semantic clusters, pillar content, technical SEO, mobile-first UX и topical authority."
        keywords="SEO блог, PPC стратегии, Next.js специалист, JavaScript Developer, WordPress Developer, semantic clusters, pillar content, topical authority, technical SEO"
        path="/blog"
        image="/workplace.webp"
        imageAlt="Съвременна работна станция за уеб проекти"
        type="website"
      />

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
