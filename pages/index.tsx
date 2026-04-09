import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import SeoHead from "../components/SeoHead";

import styles from "../styles/Home.module.css";
import { SITE_URL } from "../lib/config";

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "inweblife",
  url: `${SITE_URL}/`,
  description:
    "Изработка на сайтове с Next.js и WordPress, SEO оптимизация и Google Ads управление с 10+ години опит.",
  inLanguage: "bg",
  publisher: {
    "@type": "Person",
    name: "Иван Димитров",
  },
};
const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Изработка на сайтове, SEO и Google Ads | inweblife",
  url: `${SITE_URL}/`,
  inLanguage: "bg-BG",
  description:
    "Иван Димитров – изработвам сайтове с Next.js и WordPress и ги оптимизирам за Google. SEO консултант и Google Ads специалист с 10+ години опит.",
  isPartOf: {
    "@type": "WebSite",
    name: "inweblife",
    url: `${SITE_URL}/`,
  },
};

const successCounters = [
  { target: 10, suffix: "M+", label: "Управляван бюджет (PPC, SEO)" },
  { target: 10, suffix: "+", label: "сайта на първо място в индекса на Google" },
  { target: 10, suffix: "+", label: "Години опит" },
];

export default function Home() {
  const [counterValues, setCounterValues] = useState(successCounters.map(() => 0));

  useEffect(() => {
    const duration = 1400;
    const start = performance.now();

    const animate = (timestamp: number) => {
      const elapsed = timestamp - start;
      const progress = Math.min(elapsed / duration, 1);

      setCounterValues(successCounters.map((item) => Math.floor(item.target * progress)));

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCounterValues(successCounters.map((item) => item.target));
      }
    };

    requestAnimationFrame(animate);
  }, []);

  return (
    <>
      <SeoHead
        title="Изработка на сайтове, SEO и Google Ads | inweblife"
        description="Иван Димитров – изработвам сайтове с Next.js и WordPress и ги оптимизирам за Google. SEO консултант и Google Ads специалист с 10+ години опит."
        keywords="PPC експерт, SEO експерт, Next.js специалист, JavaScript Developer, WordPress Developer, topical authority, semantic clusters, pillar content, technical SEO"
        path="/"
        image="/og/home-og.png"
        imageAlt="Работно пространство за уеб разработка"
        type="website"
      />
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
        />
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
            <h1 className={styles.title}>Изработка на сайтове, SEO и Google Ads</h1>
            <p className={styles.subtitle}>Изработвам сайтове и ги правя видими — SEO, Google Ads и Full-Stack разработка</p>
          </div>
        </section>

        <section className={styles.highlightSection} aria-labelledby="hero-expertise-title">
          <article className={styles.highlightCard}>
            <p className={styles.highlightIcon} aria-hidden="true">
              •
            </p>
            <h2 id="hero-expertise-title">Изработка на сайтове, SEO и Google Ads — всичко под един покрив</h2>
            <p>
              Изграждам сайтове с Next.js и WordPress, оптимизирам ги за Google и управлявам
              Google Ads кампании с бюджети над милиони евро. С над 10 години опит работя по
              целия процес — от архитектурата на сайта до устойчивия органичен ръст и платения
              трафик.
            </p>
          </article>
        </section>

        <section className={styles.countersSection} aria-labelledby="success-counters-title">
          <h2 id="success-counters-title" className={styles.countersTitle}>
            Броячи на успеха
          </h2>
          <div className={styles.countersGrid}>
            {successCounters.map((item, index) => (
              <article className={styles.counterCard} key={item.label}>
                <p className={styles.counterValue}>
                  {counterValues[index]}
                  {item.suffix}
                </p>
                <p className={styles.counterLabel}>{item.label}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.text}>
          <article className={styles.paragraph}>
            <h2 className={styles.sectionTitle}>Изработка на сайт, който се класира най-горе в Гугъл</h2>
            <p>
              Сайтът, който се класира на първа страница в Google, не е случайност — той е резултат
              от конкретни технически и съдържателни решения, взети още при изработката. Бързо
              зареждане, ясна информационна архитектура, семантични клъстери от свързани теми и
              мобилна оптимизация са фундаментът, без който дори добрият дизайн не постига видимост.
              Google обхожда и оценява всяка страница по стотици сигнали — и единственият начин да
              спечелите устойчиво класиране е да отговорите на всеки от тях системно, а не с
              еднократна оптимизация. Когато сайтът е изграден правилно от началото, всяка нова
              страница и всяка публикация усилва авторитета на домейна и прави следващото класиране
              по-лесно.
            </p>
            <h3>SEO оптимизираният сайт печели бързо и лесно клиенти</h3>
            <p>
              SEO оптимизираният сайт не само привлича повече органичен трафик — той намалява и
              рекламните разходи. Техническото качество, което помага на страниците да се класират
              органично, едновременно подобрява{" "}
              <Link href="/quality-score-seo">
                <strong>Quality Score в Google Ads</strong>
              </Link>
              , което означава по-нисък CPC и по-добра рекламна позиция при по-малък бюджет.
              Бизнесът, който инвестира в правилна SEO основа, изгражда актив с нарастваща
              стойност: всяко техническо подобрение, всяко ново съдържание и всяка спечелена
              обратна връзка добавят към авторитета на сайта и носят предвидим ръст — независим
              от рекламния бюджет.
            </p>
          </article>
        </section>

        <section className={styles.text}>
          <article className={styles.paragraph}>
            <h2 className={styles.sectionTitle}>Когато SEO е силно, PPC става още по-ефективно</h2>
            <p>
              Най-добрите резултати идват, когато SEO и PPC работят в синхрон. Добре структуриран
              сайт с качествено съдържание повишава Quality Score, намалява цената на клик и
              увеличава конверсиите от платения трафик.
            </p>
            <p>
              Силното SEO дава контекст и доверие в нишата, а PPC добавя скорост и контрол върху
              бюджета. Заедно създават система за устойчив растеж, а не временни пикове.
            </p>
            <p>
              Ако искате този модел да работи във ваша полза, започнете с{" "}
              <Link href="/how-to-make-site">
                <strong>правилна архитектура на сайта</strong>
              </Link>
              , както е описано в{" "}
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
              Резултатът е платформа, която не просто присъства онлайн, а доминира по ключови
              търсения и превръща трафика в реален бизнес.
            </p>
          </article>
        </section>

        <section className={styles.expertArchitecture} aria-labelledby="expert-architecture-title">
          <article className={styles.highlightCard}>
            <h2 id="expert-architecture-title">Експертна SEO архитектура</h2>
            <p>
              В дигитална ера, доминирана от комплексни алгоритми, истинският успех се крие в
              пресечната точка между безпрецедентен мащаб и технологична прецизност. С опит в
              стратегическото управление на маркетингови бюджети за милиони евро и изграждането на
              семантична архитектура за индустриални лидери като „Карко Индъстри“ ЕООД и
              „Екометал Инженеринг“ ЕООД, аз не просто разработвам софтуер - аз създавам дигитални
              активи с висок авторитет.
            </p>
            <p>
              Моят подход интегрира full-stack девелопмънт с експертно SEO, за да изгради устойчиви
              системи, които доминират в класациите и са подготвени за бъдещето на AI и LLM
              търсенията.
            </p>
          </article>
        </section>

        <section className={styles.expertArchitecture} aria-labelledby="ai-seo-title">
          <article className={styles.highlightCard}>
            <h2 id="ai-seo-title">AI като модерна част от SEO</h2>
            <p>
              AI не заменя SEO. Той променя начина, по който потребителят получава отговори, но
              източникът на доверие остава същият: ясна структура, доказуема експертиза и
              последователно съдържание.
            </p>
            <p>
              Когато сайтът е изграден с тематична дълбочина и силни поведенчески сигнали, той е
              подготвен едновременно за класически резултати и за AI обобщения.
            </p>
            <p>
              Разгледай и{" "}
              <Link href="/ai-seo-lie">
                <strong>Голямата лъжа за SEO оптимизацията за AI</strong>
              </Link>
              , където темата е анализирана технически и практически.
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
