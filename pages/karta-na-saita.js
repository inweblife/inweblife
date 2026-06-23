import Link from "next/link";
import SeoHead from "../components/SeoHead";
import { posts } from "../lib/posts";

import styles from "../styles/Sitemap.module.css";

const KartaNaSaita = () => {
  return (
    <>
      <SeoHead
        title="Карта на сайта | inweblife"
        description="Пълна карта на сайта inweblife - всички страници и публикации на едно място за лесна навигация."
        path="/karta-na-saita"
      />

      <main className={styles.main} id="main-content">
        <h1>Карта на сайта</h1>

        <section className={styles.section}>
          <h2>Страници</h2>
          <ul className={styles.list}>
            <li>
              <Link href="/">Начало</Link>
            </li>
            <li>
              <Link href="/blog">Блог</Link>
            </li>
            <li>
              <Link href="/about">За мен</Link>
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>Публикации</h2>
          <ul className={styles.list}>
            {posts.map((post) => (
              <li key={post.href}>
                <Link href={post.href}>{post.title}</Link>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </>
  );
};

export default KartaNaSaita;
