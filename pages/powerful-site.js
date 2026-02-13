import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import styles from "../styles/Article.module.css";

const PowerfulSite = () => {
  return (
    <>
      <Head>
        <title>Създайте мощен сайт | inweblife</title>
        <meta
          name="description"
          content="Как да изградите устойчив и мащабируем сайт с добри SEO основи."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className={styles.main} id="main-content">
        <section className={styles.heroBanner} aria-label="Мощен сайт">
          <Image
            src="/computer.webp"
            alt="Компютърна станция за разработка"
            fill
            sizes="100vw"
            priority
            className={styles.heroImage}
          />
          <div className={styles.heroOverlay}>
            <h1>Създайте мощен сайт</h1>
          </div>
        </section>

        <article className={styles.article}>
          <section>
            <p>
              Мощният сайт не е само красив дизайн. Нужни са стабилна
              архитектура, качествено съдържание и добра подготовка за SEO и
              реклама.
            </p>
            <p>
              Когато структурата е планирана още в началото, сайтът се
              поддържа по-лесно, зарежда по-бързо и води до по-добри резултати
              при реални кампании.
            </p>
          </section>
          <nav className={styles.next} aria-label="Свързани статии">
            <Link href="/seo-fashion">В ерата на смартфоните</Link>
            <Link href="/how-to-make-site">Как се прави сайт</Link>
          </nav>
        </article>
      </main>
    </>
  );
};

export default PowerfulSite;
