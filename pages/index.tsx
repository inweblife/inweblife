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
        <section className={styles.heroBanner} aria-label="Въведение">
          <Image
            src="/working.webp"
            alt="Работно пространство за уеб разработка"
            fill
            sizes="100vw"
            priority
            className={styles.heroImage}
          />
          <div className={styles.heroOverlay}>
            <h1 className={styles.title}>Животът в мрежата</h1>
            <p className={styles.subtitle}>Заемете своето онлайн пространство</p>
          </div>
        </section>

        <section className={styles.highlightSection} aria-labelledby="hero-expertise-title">
          <article className={styles.highlightCard}>
            <p className={styles.highlightIcon} aria-hidden="true">
              ◎
            </p>
            <h2 id="hero-expertise-title">Експертиза в мащабни дигитални екосистеми</h2>
            <p>
              С над 10 години опит в управлението на сложни онлайн структури,
              моят фокус е върху изграждането на семантичен авторитет и
              високоефективна архитектура. Специализирам в управлението на
              мащабни PPC кампании с бюджети, надхвърлящи милиони евро, където
              всяко решение е подкрепено от данни и стратегическо планиране.
            </p>
          </article>
        </section>

        <section className={styles.text}>
          <article className={styles.paragraph}>
            <h2 className={styles.sectionTitle}>Когато SEO е силно, PPC става още по-ефективно</h2>
            <p>
              Най-добрите резултати идват, когато SEO и PPC работят в синхрон.
              Добре структурираният сайт с качествено съдържание подобрява
              Quality Score, намалява цената на клик и увеличава процента на
              конверсия от платения трафик.
            </p>
            <p>
              Силното SEO дава контекст: ясни тематични страници, вътрешни
              връзки и доверие в нишата. PPC добавя скорост: бърз достъп до
              данни, бързи тестове и контрол върху бюджета. Заедно създават
              система за устойчив растеж, а не временни пикове.
            </p>
            <p>
              Ако искате този модел да работи във ваша полза, започнете с
              правилна архитектура на сайта, както е описано в{" "}
              <Link href="/modern-site">
                <strong>Как се прави модерен сайт</strong>
              </Link>
              , след което добавете ясна стратегия за скалиране в{" "}
              <Link href="/powerful-site">
                <strong>Създайте мощен сайт</strong>
              </Link>{" "}
              и mobile-first оптимизация от{" "}
              <Link href="/seo-fashion">
                <strong>В ерата на смартфоните</strong>
              </Link>
              .
            </p>
            <p>
              Резултатът е платформа, която не просто присъства онлайн, а
              доминира по ключови търсения и превръща трафика в реален бизнес.
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
