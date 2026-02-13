import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import styles from "../styles/About.module.css";

const About = () => {
  return (
    <>
      <Head>
        <title>За мен | inweblife</title>
        <meta
          name="description"
          content="Иван Димитров - web development, SEO и дигитални стратегии."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.webp" />
      </Head>

      <main className={styles.main} id="main-content">
        <header className={styles.hero}>
          <figure className={styles.picture}>
            <Image
              src="/coffee.webp"
              alt="Работно бюро с лаптоп и чаша кафе"
              width={900}
              height={540}
              className={styles.image}
              priority
            />
          </figure>
          <h1 className={styles.title}>Иван Димитров</h1>
          <p className={styles.subtitle}>Fullstack JavaScript Developer</p>
        </header>

        <section className={styles.text}>
          <article className={styles.paragraph}>
            <p>
              Занимавам се с web development и SEO с фокус върху устойчив
              растеж: добър код, ясна структура и бързи страници.
            </p>
            <p>
              Работя по цялостен процес: архитектура, съдържание, техническа
              оптимизация и рекламна подготовка. Разгледайте и моите материали в{" "}
              <Link href="/blog">
                <strong>блога</strong>
              </Link>
              .
            </p>
            <p>
              Примери за проекти и подход ще намерите в статиите за{" "}
              <Link href="/powerful-site">
                <strong>мощен сайт</strong>
              </Link>{" "}
              и{" "}
              <Link href="/modern-site">
                <strong>модерен сайт</strong>
              </Link>
              .
            </p>

            <section aria-labelledby="projects-expertise-title">
              <h2 id="projects-expertise-title">Моите проекти и експертиза</h2>
              <ul>
                <li>
                  <a
                    href="https://carco.bg/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Авточасти втора употреба
                  </a>
                </li>
                <li>
                  <a
                    href="https://kolazascrap.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    коли за скрап
                  </a>
                </li>
                <li>
                  <a
                    href="https://ecometal.bg/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    екометал
                  </a>
                </li>
                <li>
                  <a
                    href="https://kolizascrap.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    коли за скрап калкулатор
                  </a>
                </li>
              </ul>
              <p>
                Изграждането на тематичен авторитет е доста по-важно от
                настройване на сайтовете за LLM, а изграждането на pillar pages
                е в основата на семантичната архитектура на апликациите.
              </p>
            </section>

            <figure className={styles.picture}>
              <Image
                src="/ivan.webp"
                alt="Портрет на Иван Димитров"
                width={500}
                height={400}
                className={styles.image}
              />
            </figure>
          </article>
        </section>

        <section className={styles.cta}>
          <a className={styles.ctaLink} href="mailto:inweblife@yandex.com">
            За контакт
          </a>
          <Link className={styles.ctaLink} href="/blog">
            Блог
          </Link>
        </section>
      </main>
    </>
  );
};

export default About;
