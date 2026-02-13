import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import styles from "../styles/Article.module.css";

const ModernSite = () => {
  return (
    <>
      <Head>
        <title>Как се прави модерен сайт | inweblife</title>
        <meta
          name="description"
          content="Mobile-first подход, архитектура и SEO основи за модерен уеб сайт."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className={styles.main} id="main-content">
        <section className={styles.heroBanner} aria-label="Модерен сайт">
          <Image
            src="/workplace.webp"
            alt="Модерен работен кът за уеб разработка"
            fill
            sizes="100vw"
            priority
            className={styles.heroImage}
          />
          <div className={styles.heroOverlay}>
            <h1>Как се прави модерен сайт</h1>
          </div>
        </section>

        <article className={styles.article}>
          <section>
            <p>
              Модерният сайт е комбинация от бързина, удобна навигация и добра
              структура на съдържанието. В основата стои mobile-first подход,
              за да работи отлично на телефон, таблет и десктоп.
            </p>
            <p>
              Техническата част включва оптимизирани изображения, семантичен
              HTML, ясни заглавия и минимален CSS/JS товар. Това подобрява
              както потребителското изживяване, така и видимостта в търсачките.
            </p>
          </section>
          <nav className={styles.next} aria-label="Свързани статии">
            <Link href="/seo-fashion">В ерата на смартфоните</Link>
            <Link href="/powerful-site">Създайте мощен сайт</Link>
          </nav>
        </article>
      </main>
    </>
  );
};

export default ModernSite;
