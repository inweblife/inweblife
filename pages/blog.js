import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

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
      "Mobile-first подходът е стандарт за индексиране, използваемост и конверсии.",
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
      <Head>
        <title>inweblife - блог</title>
        <meta
          name="description"
          content="Статии за уеб разработка, SEO и digital стратегии."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.webp" />
      </Head>

      <main className={styles.main} id="main-content">
        <h1 className={styles.heading}>Блог за уеб съдържание</h1>
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
