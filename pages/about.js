import Image from "next/image";
import Link from "next/link";
import SeoHead from "../components/SeoHead";

import styles from "../styles/About.module.css";
import { SITE_URL } from "../lib/config";

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Иван Димитров",
  url: `${SITE_URL}/about`,
  image: `${SITE_URL}/ivan.webp`,
  description:
    "SEO консултант, Google Ads специалист и Full-Stack Developer с 10+ години опит в Automotive и Recycling индустрията. Архитект на семантични SEO стратегии и управлявани PPC бюджети над €1M.",
  jobTitle: [
    "High-Budget PPC Strategist",
    "Semantic SEO Expert",
    "Full-Stack Developer",
  ],
  knowsAbout: [
    "Semantic SEO",
    "Topical Authority",
    "Pillar Page Architecture",
    "Keyword Mapping",
    "High-Budget PPC Strategy",
    "Google Ads",
    "Performance Max",
    "Quality Score Optimization",
    "Google Tag Manager",
    "Google Analytics 4",
    "Conversion Tracking",
    "Core Web Vitals",
    "Technical SEO",
    "Next.js",
    "WordPress",
    "HTML",
    "CSS",
    "Software Architecture",
  ],
  sameAs: ["https://www.linkedin.com/in/inweblife/"],
  workExample: [
    {
      "@type": "CreativeWork",
      name: "Carco.bg",
      url: "https://carco.bg/",
    },
    {
      "@type": "CreativeWork",
      name: "Ecometal.bg",
      url: "https://ecometal.bg/",
    },
    {
      "@type": "CreativeWork",
      name: "Kolazascrap.com",
      url: "https://kolazascrap.com/",
    },
  ],
};
const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "За мен | inweblife",
  url: `${SITE_URL}/about`,
  inLanguage: "bg-BG",
  description:
    "Профил на Иван Димитров с SEO, PPC и Full-Stack експертиза, фокус върху техническа архитектура и устойчив органичен растеж.",
  isPartOf: {
    "@type": "WebSite",
    name: "inweblife",
    url: `${SITE_URL}/`,
  },
};

const About = () => {
  return (
    <>
      <SeoHead
        title="Иван Димитров | Уеб разработчик, SEO и Google Ads"
        description="Иван Димитров – SEO консултант и Google Ads специалист с 10+ години опит. Full-stack developer с портфолио от мащабни проекти и управляван PPC бюджет над €1M."
        keywords="Иван Димитров, PPC експерт, SEO експерт, Full-Stack Developer, JavaScript Developer, WordPress Developer, Next.js специалист, semantic clusters, topical authority"
        path="/about"
        image="/og/about-og.png"
        imageAlt="Портрет на Иван Димитров"
        type="profile"
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
        />
      </SeoHead>

      <main className={styles.main} id="main-content">
        <section className={styles.heroBanner} aria-label="За Иван">
          <Image
            src="/coffee.webp"
            alt="Работно бюро с лаптоп и чаша кафе"
            fill
            sizes="100vw"
            priority
            className={styles.heroImage}
          />
          <div className={styles.heroOverlay}>
            <h1 className={styles.title}>Иван Димитров – Уеб разработчик, SEO и Google Ads</h1>
            <p className={styles.subtitle}>Full-Stack JavaScript Developer</p>
          </div>
        </section>

        <section className={styles.text}>
          <article className={styles.paragraph}>
            <p>
              Занимавам се с web development и SEO с фокус върху устойчив растеж: добър код,
              ясна структура и бързи страници.
            </p>
            <p>
              Работя по цялостен процес:{" "}
              <Link href="/how-to-make-site">
                <strong>архитектура</strong>
              </Link>
              , съдържание, техническа оптимизация и рекламна подготовка.
            </p>
            <p className={styles.authorityCopy}>
              Експерт с доказан опит в управлението на PPC бюджети за милиони евро и архитект на
              SEO стратегии за лидерите в Automotive & Recycling индустрията. Моят код не просто
              работи - той доминира семантично.
            </p>

            <section className={styles.strategySection} aria-labelledby="story-title">
              <h2 id="story-title">Как стигнах дотук</h2>
              <p>
                Всичко започна като хоби. Правех сайтове на приятели - без бюджет, без клиенти,
                само за да разбера как работи. Постепенно хобито се превърна в занаят: поех
                поддръжката на сайт за авточасти втора употреба и за пръв път видях как добре
                структурираната страница директно определя броя обаждания и реалните продажби.
                Разликата между сайт, направен &bdquo;да изглежда добре&ldquo;, и сайт, изграден
                да носи клиенти, стана очевидна от първия месец.
              </p>
              <p>
                Оттам нататък нещата се развиха логично. Днес обслужвам SEO и{" "}
                <Link href="/google-ads-reklama">
                  <strong>реклама в Гугъл</strong>
                </Link>{" "}
                на сайтове в бранша - изкупуване на коли, авточасти и рециклиране на автомобили.
                Индустрия с конкретни бизнес нужди, измерими резултати и нулева търпимост към
                маркетингови клишета. Тук не работиш с хипотези - работиш с обаждания, запитвания
                и реални сделки. Тази среда те учи да мислиш в резултати, не в метрики.
              </p>
              <p>
                В същото това време управлявам значителни бюджети - не само за реклама в Гугъл,
                но и за{" "}
                <Link href="/seo-optimizaciya-na-ueb-sait">
                  <strong>SEO оптимизация</strong>
                </Link>{" "}
                - и поддържам блог с материали, базирани на реална практика, писани по
                най-съвременните стандарти за семантична архитектура и тематичен авторитет.
              </p>
            </section>

            <section className={styles.strategySection} aria-labelledby="strategy-title">
              <h2 id="strategy-title">Стратегическо управление и бизнес растеж</h2>
              <p>
                Моят път в дигиталния свят е белязан от работа по ключови индустриални проекти като{" "}
                <strong>Carco.bg</strong>, <strong>Ecometal.bg</strong> и{" "}
                <strong>Kolazascrap.com</strong>. Опитът ми включва:
              </p>
              <div className={styles.capabilityGrid}>
                <article className={styles.capabilityCard}>
                  <h3>Управление на милионни бюджети</h3>
                  <p className={styles.premiumText}>
                    Доказана експертиза в Google Ads и социални мрежи с фокус върху максимална
                    възвръщаемост (ROAS). Максималният ROAS започва от висок{" "}
                    <Link href="/quality-score-seo">
                      <strong>Quality Score</strong>
                    </Link>
                    , който намалява CPC и подобрява позицията едновременно.
                  </p>
                </article>
                <article className={styles.capabilityCard}>
                  <h3>Семантична архитектура</h3>
                  <p className={styles.premiumText}>
                    Проектиране на сложни приложения и Pillar Pages, които осигуряват устойчив
                    органичен трафик. Изграждам детайлна карта на ключовите думи за перфектна
                    клъстеризация и успешно планиране на съдържанието - основата, върху която
                    всяка кампания и всяка статия намират точното си място.
                  </p>
                </article>
                <article className={styles.capabilityCard}>
                  <h3>Индустриален мащаб</h3>
                  <p>
                    Дълбоко познаване на логистичните и оперативни процеси в секторите рециклиране
                    и търговия с авточасти. Реалният опит в управление на бизнес структури дава
                    прецизен поглед върху основите на дейността - знам какво движи приходите и
                    откъде тръгват реалните решения.
                  </p>
                </article>
              </div>
              <p className={styles.strategyConclusion}>
                Вярвам, че истинският авторитет се гради чрез комбинация от техническо съвършенство
                и дълбоко разбиране на бизнес логиката.
              </p>
            </section>

            <section className={styles.strategySection} aria-labelledby="casestudy-title">
              <h2 id="casestudy-title">
                Казус: Kolazascrap.com - четири години реална SEO работа
              </h2>
              <p>
                Най-убедителното доказателство за начина ми на работа не е в описания, а в
                резултатите, натрупани с времето. Ето как изграждах тематичен авторитет по
                стъпките на един проект - от празна страница до нишово лидерство.
              </p>
              <div className={styles.capabilityGrid}>
                <article className={styles.capabilityCard}>
                  <h3>2021 - Изграждане от нулата</h3>
                  <p>
                    Сайтът стартира с ясна семантична структура, оптимизиран HTML и съдържание,
                    организирано около реалните въпроси на хората, продаващи коли за скрап.
                    Фундаментът беше положен правилно от самото начало - техническа изрядност,
                    бърза скорост и мобилна оптимизация.
                  </p>
                </article>
                <article className={styles.capabilityCard}>
                  <h3>2023 - Редизайн, реклами и оптимизация</h3>
                  <p>
                    Пълен редизайн с ново техническо ядро и разработено от нулата семантично SEO
                    ядро. Пуснати <strong>Google Ads кампании</strong> за изкупуване на автомобили
                    за скрап. Landing pages оптимизирани за
                    конверсии - целта не е трафик, а реални обаждания и запитвания.
                  </p>
                </article>
                <article className={styles.capabilityCard}>
                  <h3>2024 - Органично изкачване</h3>
                  <p>
                    Системната работа по съдържание, вътрешна структура и технически показатели
                    доведе до видимо изкачване в органичните резултати. Сайтът започна да
                    доминира за ключови заявки в нишата - конкурентна среда, в която всяка
                    позиция се печели с реален авторитет.
                  </p>
                </article>
                <article className={styles.capabilityCard}>
                  <h3>2025 - Калкулатор и тематично лидерство</h3>
                  <p>
                    Добавен интерактивен{" "}
                    <strong>калкулатор за оценка на автомобил за скрап</strong>
                    . Резултатът: изключителен тематичен авторитет по всички процедури,
                    свързани с бракуването на МПС - от документите и цените до логистиката
                    и правните изисквания.
                  </p>
                </article>
              </div>
              <p className={styles.strategyConclusion}>
                Това е начинът, по който работя: стъпка по стъпка, с ясна стратегия и
                реална поддръжка, докато сайтът не стане истински авторитет в своята ниша.
                Резултатите на <strong>Kolazascrap.com</strong> са живото доказателство.
              </p>
            </section>

            <section
              className={styles.expertiseSection}
              aria-labelledby="projects-expertise-title"
            >
              <div className={styles.expertiseContent}>
                <h2 id="projects-expertise-title">Моите проекти и експертиза</h2>
                <div className={styles.expertiseIntroRow}>
                  <aside className={styles.portraitInline} aria-label="Профил">
                    <div className={styles.portraitFrame}>
                      <Image
                        src="/ivan.webp"
                        alt="Портрет на Иван Димитров"
                        width={600}
                        height={600}
                        className={styles.portrait}
                        priority
                      />
                    </div>
                  </aside>
                  <p className={styles.portfolioLead}>
                    Дизайнът и архитектурата трябва да внушават експертиза и доверие. Всеки проект е
                    структуриран като дългосрочен актив, а не просто като списък от линкове.
                  </p>
                </div>
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
                  Изграждането на тематичен авторитет е доста по-важно от настройване на сайтовете
                  за LLM, а изграждането на pillar pages е в основата на семантичната архитектура на
                  апликациите.
                </p>
              </div>
            </section>

            <section className={styles.strategySection} aria-labelledby="webdev-title">
              <h2 id="webdev-title">Уеб разработчик, който изгражда сайтове с реална бизнес стойност</h2>
              <p>
                Работя с <strong>WordPress</strong> и <strong>Next.js</strong> - два различни
                инструмента, всеки с точното си място в зависимост от мащаба, бюджета и
                целите на проекта. Kolazascrap.com е изграден в WordPress - надежден избор за
                сайтове, на които SEO, съдържание и поддръжка са централни. Inweblife е
                изграден в Next.js - за максимална производителност, пълен контрол върху
                кода и Core Web Vitals, водещи класирането. Независимо от избраната
                технология, всеки сайт излиза технически изряден, SEO оптимизиран от основи
                и готов да приема трафик и реклами от деня на пускане.
              </p>
              <p>
                Не предавам сайт и изчезвам. Осигурявам реална бизнес поддръжка във времето -
                съдържание, оптимизации, нови раздели, технически промени - според
                актуалните нужди на собственика и клиентите му. Защото добрият сайт не е
                еднократен проект, а работещ инструмент, който расте заедно с бизнеса.
              </p>
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
