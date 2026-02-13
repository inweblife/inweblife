import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>SEO и Web Development | inweblife</title>
        <meta
          name="description"
          content="Практични материали за SEO, PPC и модерна уеб разработка."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.webp" />
      </Head>

      <main className={styles.main} id="main-content">
        <figure className={styles.picture}>
          <Image
            src="/working.webp"
            alt="Работно пространство за уеб разработка"
            width={900}
            height={540}
            priority
            className={styles.image}
          />
        </figure>

        <header className={styles.hero}>
          <h1 className={styles.title}>Животът в мрежата</h1>
          <p className={styles.subtitle}>Заемете своето онлайн пространство</p>
        </header>

        <section className={styles.text}>
          <article className={styles.paragraph}>
            <p>
              SEO и PPC работят най-добре заедно. Когато сайтът е технически
              добре структуриран и съдържанието е оптимизирано, рекламните
              кампании постигат по-ниска цена и по-висока възвръщаемост.
            </p>
            <h2 className={styles.sectionTitle}>
              Защо е важно SEO да започне още при изграждането
            </h2>
            <p>
              Оптимизацията не е последна стъпка. Навигацията, вътрешните
              връзки, заглавията, скоростта и мобилният изглед трябва да се
              планират в началото, за да няма скъпи промени по-късно.
            </p>
            <p>
              Ако търсите практични насоки за изграждане на сайт, разгледайте
              статията за{" "}
              <Link href="/how-to-make-site">
                <strong>как се прави сайт</strong>
              </Link>{" "}
              и материала за{" "}
              <Link href="/modern-site">
                <strong>модерен уеб подход</strong>
              </Link>
              .
            </p>
            <figure className={styles.picture}>
              <Image
                src="/desk.webp"
                alt="Бюро с компютър и работни материали"
                width={600}
                height={500}
                className={styles.image}
              />
            </figure>
            <p>
              Работя с бизнеси, които искат устойчиво онлайн присъствие:
              технически надежден сайт, ясна структура на съдържанието и
              измерими резултати от SEO и реклама.
            </p>
          </article>
        </section>

        <section className={styles.cta}>
          <Link className={styles.ctaLink} href="/about">
            За мен
          </Link>
          <a className={styles.ctaLink} href="mailto:inweblife@yandex.com">
            За контакт
          </a>
        </section>
      </main>
    </>
  );
}
