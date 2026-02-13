import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import styles from "../styles/About.module.css";

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Иван",
  jobTitle: "Senior Full-Stack Developer & SEO Expert",
  knowsAbout: [
    "Semantic SEO",
    "PPC Management at scale",
    "Next.js",
    "Software Architecture",
  ],
};

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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
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
              <Link href="/blog">блога</Link>.
            </p>
            <p>
              Примери за проекти и подход ще намерите в статиите за{" "}
              <Link href="/powerful-site">мощен сайт</Link> и{" "}
              <Link href="/modern-site">модерен сайт</Link>.
            </p>

            <section className={styles.strategySection} aria-labelledby="strategy-title">
              <h2 id="strategy-title">Стратегическо управление и бизнес растеж</h2>
              <p>
                Моят път в дигиталния свят е белязан от работа по ключови
                индустриални проекти като{" "}
                <a href="https://carco.bg/" target="_blank" rel="noopener noreferrer">
                  <strong>Carco.bg</strong>
                </a>
                ,{" "}
                <a href="https://ecometal.bg/" target="_blank" rel="noopener noreferrer">
                  <strong>Ecometal.bg</strong>
                </a>{" "}
                и{" "}
                <a href="https://kolazascrap.com/" target="_blank" rel="noopener noreferrer">
                  <strong>Kolazascrap.com</strong>
                </a>
                . Опитът ми включва:
              </p>
              <div className={styles.capabilityGrid}>
                <article className={styles.capabilityCard}>
                  <h3>Управление на милионни бюджети</h3>
                  <p className={styles.premiumText}>
                    Доказана експертиза в Google Ads и социални мрежи с фокус
                    върху максимална възвръщаемост (ROAS).
                  </p>
                </article>
                <article className={styles.capabilityCard}>
                  <h3>Семантична архитектура</h3>
                  <p className={styles.premiumText}>
                    Проектиране на сложни приложения и Pillar Pages, които
                    осигуряват устойчив органичен трафик.
                  </p>
                </article>
                <article className={styles.capabilityCard}>
                  <h3>Индустриален мащаб</h3>
                  <p>
                    Дълбоко познаване на логистичните и оперативни процеси в
                    секторите рециклиране и търговия с авточасти.
                  </p>
                </article>
              </div>
              <p className={styles.strategyConclusion}>
                Вярвам, че истинският авторитет се гради чрез комбинация от
                техническо съвършенство и дълбоко разбиране на бизнес логиката.
              </p>
            </section>

            <section
              className={styles.expertiseSection}
              aria-labelledby="projects-expertise-title"
            >
              <div className={styles.expertiseContent}>
                <h2 id="projects-expertise-title">Моите проекти и експертиза</h2>
                <p className={styles.portfolioLead}>
                  Дизайнът и архитектурата трябва да внушават експертиза и
                  доверие. Всеки проект е структуриран като дългосрочен актив,
                  а не просто като списък от линкове.
                </p>
                <div className={styles.projectGrid}>
                  <a
                    className={styles.projectCard}
                    href="https://carco.bg/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className={styles.projectTag}>AUTOMOTIVE</span>
                    <strong>Carco.bg</strong>
                    <span>Авточасти втора употреба</span>
                  </a>
                  <a
                    className={styles.projectCard}
                    href="https://ecometal.bg/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className={styles.projectTag}>RECYCLING</span>
                    <strong>Ecometal.bg</strong>
                    <span>Екометал</span>
                  </a>
                  <a
                    className={styles.projectCard}
                    href="https://kolazascrap.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className={styles.projectTag}>LEAD GEN</span>
                    <strong>Kolazascrap.com</strong>
                    <span>Коли за скрап</span>
                  </a>
                  <a
                    className={styles.projectCard}
                    href="https://kolizascrap.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className={styles.projectTag}>TOOLING</span>
                    <strong>Kolizascrap.com</strong>
                    <span>Коли за скрап калкулатор</span>
                  </a>
                </div>
                <p>
                  Изграждането на тематичен авторитет е доста по-важно от
                  настройване на сайтовете за LLM, а изграждането на pillar
                  pages е в основата на семантичната архитектура на апликациите.
                </p>
              </div>

              <figure className={styles.expertiseMedia}>
                <Image
                  src="/ivan.webp"
                  alt="Портрет на Иван Димитров"
                  width={600}
                  height={600}
                  className={styles.portrait}
                  priority
                />
              </figure>
            </section>
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
