import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import styles from "../styles/Article.module.css";

const SeoFashion = () => {
  return (
    <>
      <Head>
        <title>В ерата на смартфоните | inweblife</title>
        <meta
          name="description"
          content="Mobile-first оптимизация за по-добра използваемост и SEO резултати."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className={styles.main} id="main-content">
        <article className={styles.article}>
          <header>
            <h1>В ерата на смартфоните</h1>
          </header>
          <figure className={styles.picture}>
            <Image
              src="/desk.webp"
              alt="Работно бюро с фокус върху мобилни устройства"
              width={780}
              height={500}
              className={styles.image}
              priority
            />
          </figure>
          <section>
            <p>
              Повечето посещения вече идват от мобилни устройства. Затова
              дизайнът трябва да започне от най-малкия екран и после да се
              разширява за таблет и десктоп.
            </p>
            <p>
              Добрата мобилна версия означава четим текст, ясни бутони, липса
              на horizontal overflow и бързо зареждане. Това е критично и за
              SEO, и за конверсии.
            </p>
          </section>
          <nav className={styles.next} aria-label="Свързани статии">
            <Link href="/modern-site">Как се прави модерен сайт</Link>
            <Link href="/powerful-site">Създайте мощен сайт</Link>
          </nav>
        </article>
      </main>
    </>
  );
};

export default SeoFashion;
