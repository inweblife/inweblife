import Image from "next/image";
import Link from "next/link";
import SeoHead from "../components/SeoHead";

import styles from "../styles/About.module.css";

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "РРІР°РЅ",
  jobTitle: "Experienced Full-Stack Developer and SEO & PPC Strategist",
  knowsAbout: [
    "Semantic SEO",
    "PPC Management at scale",
    "Next.js",
    "Software Architecture",
  ],
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

const About = () => {
  return (
    <>
      <SeoHead
        title="За мен | inweblife"
        description="Иван Димитров - web development, SEO и дигитални стратегии."
        path="/about"
        image="/ivan.webp"
        imageAlt="Портрет на Иван Димитров"
        type="profile"
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </SeoHead>

      <main className={styles.main} id="main-content">
        <section className={styles.heroBanner} aria-label="Р—Р° РРІР°РЅ">
          <Image
            src="/coffee.webp"
            alt="Р Р°Р±РѕС‚РЅРѕ Р±СЋСЂРѕ СЃ Р»Р°РїС‚РѕРї Рё С‡Р°С€Р° РєР°С„Рµ"
            fill
            sizes="100vw"
            priority
            className={styles.heroImage}
          />
          <div className={styles.heroOverlay}>
            <h1 className={styles.title}>РРІР°РЅ Р”РёРјРёС‚СЂРѕРІ</h1>
            <p className={styles.subtitle}>Fullstack JavaScript Developer</p>
          </div>
        </section>

        <section className={styles.text}>
          <article className={styles.paragraph}>
            <p>
              Р—Р°РЅРёРјР°РІР°Рј СЃРµ СЃ web development Рё SEO СЃ С„РѕРєСѓСЃ РІСЉСЂС…Сѓ СѓСЃС‚РѕР№С‡РёРІ
              СЂР°СЃС‚РµР¶: РґРѕР±СЉСЂ РєРѕРґ, СЏСЃРЅР° СЃС‚СЂСѓРєС‚СѓСЂР° Рё Р±СЉСЂР·Рё СЃС‚СЂР°РЅРёС†Рё.
            </p>
            <p>
              Р Р°Р±РѕС‚СЏ РїРѕ С†СЏР»РѕСЃС‚РµРЅ РїСЂРѕС†РµСЃ: Р°СЂС…РёС‚РµРєС‚СѓСЂР°, СЃСЉРґСЉСЂР¶Р°РЅРёРµ, С‚РµС…РЅРёС‡РµСЃРєР°
              РѕРїС‚РёРјРёР·Р°С†РёСЏ Рё СЂРµРєР»Р°РјРЅР° РїРѕРґРіРѕС‚РѕРІРєР°. Р Р°Р·РіР»РµРґР°Р№С‚Рµ Рё РјРѕРёС‚Рµ РјР°С‚РµСЂРёР°Р»Рё РІ{" "}
              <Link href="/blog">Р±Р»РѕРіР°</Link>.
            </p>
            <p className={styles.authorityCopy}>
              Р•РєСЃРїРµСЂС‚ СЃ РґРѕРєР°Р·Р°РЅ РѕРїРёС‚ РІ СѓРїСЂР°РІР»РµРЅРёРµС‚Рѕ РЅР° PPC Р±СЋРґР¶РµС‚Рё Р·Р° РјРёР»РёРѕРЅРё
              РµРІСЂР° Рё Р°СЂС…РёС‚РµРєС‚ РЅР° SEO СЃС‚СЂР°С‚РµРіРёРё Р·Р° Р»РёРґРµСЂРёС‚Рµ РІ Automotive &
              Recycling РёРЅРґСѓСЃС‚СЂРёСЏС‚Р°. РњРѕСЏС‚ РєРѕРґ РЅРµ РїСЂРѕСЃС‚Рѕ СЂР°Р±РѕС‚Рё - С‚РѕР№ РґРѕРјРёРЅРёСЂР°
              СЃРµРјР°РЅС‚РёС‡РЅРѕ.
            </p>

            <section className={styles.strategySection} aria-labelledby="strategy-title">
              <h2 id="strategy-title">РЎС‚СЂР°С‚РµРіРёС‡РµСЃРєРѕ СѓРїСЂР°РІР»РµРЅРёРµ Рё Р±РёР·РЅРµСЃ СЂР°СЃС‚РµР¶</h2>
              <p>
                РњРѕСЏС‚ РїСЉС‚ РІ РґРёРіРёС‚Р°Р»РЅРёСЏ СЃРІСЏС‚ Рµ Р±РµР»СЏР·Р°РЅ РѕС‚ СЂР°Р±РѕС‚Р° РїРѕ РєР»СЋС‡РѕРІРё
                РёРЅРґСѓСЃС‚СЂРёР°Р»РЅРё РїСЂРѕРµРєС‚Рё РєР°С‚Рѕ{" "}
                <a href="https://carco.bg/" target="_blank" rel="noopener noreferrer">
                  <strong>Carco.bg</strong>
                </a>
                ,{" "}
                <a href="https://ecometal.bg/" target="_blank" rel="noopener noreferrer">
                  <strong>Ecometal.bg</strong>
                </a>{" "}
                Рё{" "}
                <a href="https://kolazascrap.com/" target="_blank" rel="noopener noreferrer">
                  <strong>Kolazascrap.com</strong>
                </a>
                . РћРїРёС‚СЉС‚ РјРё РІРєР»СЋС‡РІР°:
              </p>
              <div className={styles.capabilityGrid}>
                <article className={styles.capabilityCard}>
                  <h3>РЈРїСЂР°РІР»РµРЅРёРµ РЅР° РјРёР»РёРѕРЅРЅРё Р±СЋРґР¶РµС‚Рё</h3>
                  <p className={styles.premiumText}>
                    Р”РѕРєР°Р·Р°РЅР° РµРєСЃРїРµСЂС‚РёР·Р° РІ Google Ads Рё СЃРѕС†РёР°Р»РЅРё РјСЂРµР¶Рё СЃ С„РѕРєСѓСЃ
                    РІСЉСЂС…Сѓ РјР°РєСЃРёРјР°Р»РЅР° РІСЉР·РІСЂСЉС‰Р°РµРјРѕСЃС‚ (ROAS).
                  </p>
                </article>
                <article className={styles.capabilityCard}>
                  <h3>РЎРµРјР°РЅС‚РёС‡РЅР° Р°СЂС…РёС‚РµРєС‚СѓСЂР°</h3>
                  <p className={styles.premiumText}>
                    РџСЂРѕРµРєС‚РёСЂР°РЅРµ РЅР° СЃР»РѕР¶РЅРё РїСЂРёР»РѕР¶РµРЅРёСЏ Рё Pillar Pages, РєРѕРёС‚Рѕ
                    РѕСЃРёРіСѓСЂСЏРІР°С‚ СѓСЃС‚РѕР№С‡РёРІ РѕСЂРіР°РЅРёС‡РµРЅ С‚СЂР°С„РёРє.
                  </p>
                </article>
                <article className={styles.capabilityCard}>
                  <h3>РРЅРґСѓСЃС‚СЂРёР°Р»РµРЅ РјР°С‰Р°Р±</h3>
                  <p>
                    Р”СЉР»Р±РѕРєРѕ РїРѕР·РЅР°РІР°РЅРµ РЅР° Р»РѕРіРёСЃС‚РёС‡РЅРёС‚Рµ Рё РѕРїРµСЂР°С‚РёРІРЅРё РїСЂРѕС†РµСЃРё РІ
                    СЃРµРєС‚РѕСЂРёС‚Рµ СЂРµС†РёРєР»РёСЂР°РЅРµ Рё С‚СЉСЂРіРѕРІРёСЏ СЃ Р°РІС‚РѕС‡Р°СЃС‚Рё.
                  </p>
                </article>
              </div>
              <p className={styles.strategyConclusion}>
                Р’СЏСЂРІР°Рј, С‡Рµ РёСЃС‚РёРЅСЃРєРёСЏС‚ Р°РІС‚РѕСЂРёС‚РµС‚ СЃРµ РіСЂР°РґРё С‡СЂРµР· РєРѕРјР±РёРЅР°С†РёСЏ РѕС‚
                С‚РµС…РЅРёС‡РµСЃРєРѕ СЃСЉРІСЉСЂС€РµРЅСЃС‚РІРѕ Рё РґСЉР»Р±РѕРєРѕ СЂР°Р·Р±РёСЂР°РЅРµ РЅР° Р±РёР·РЅРµСЃ Р»РѕРіРёРєР°С‚Р°.
              </p>
            </section>

            <section
              className={styles.expertiseSection}
              aria-labelledby="projects-expertise-title"
            >
              <div className={styles.expertiseContent}>
                <h2 id="projects-expertise-title">РњРѕРёС‚Рµ РїСЂРѕРµРєС‚Рё Рё РµРєСЃРїРµСЂС‚РёР·Р°</h2>
                <p className={styles.portfolioLead}>
                  Р”РёР·Р°Р№РЅСЉС‚ Рё Р°СЂС…РёС‚РµРєС‚СѓСЂР°С‚Р° С‚СЂСЏР±РІР° РґР° РІРЅСѓС€Р°РІР°С‚ РµРєСЃРїРµСЂС‚РёР·Р° Рё
                  РґРѕРІРµСЂРёРµ. Р’СЃРµРєРё РїСЂРѕРµРєС‚ Рµ СЃС‚СЂСѓРєС‚СѓСЂРёСЂР°РЅ РєР°С‚Рѕ РґСЉР»РіРѕСЃСЂРѕС‡РµРЅ Р°РєС‚РёРІ,
                  Р° РЅРµ РїСЂРѕСЃС‚Рѕ РєР°С‚Рѕ СЃРїРёСЃСЉРє РѕС‚ Р»РёРЅРєРѕРІРµ.
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
                    <span>РђРІС‚РѕС‡Р°СЃС‚Рё РІС‚РѕСЂР° СѓРїРѕС‚СЂРµР±Р°</span>
                  </a>
                  <a
                    className={styles.projectCard}
                    href="https://ecometal.bg/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className={styles.projectTag}>RECYCLING</span>
                    <strong>Ecometal.bg</strong>
                    <span>Р•РєРѕРјРµС‚Р°Р»</span>
                  </a>
                  <a
                    className={styles.projectCard}
                    href="https://kolazascrap.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className={styles.projectTag}>LEAD GEN</span>
                    <strong>Kolazascrap.com</strong>
                    <span>РљРѕР»Рё Р·Р° СЃРєСЂР°Рї</span>
                  </a>
                  <a
                    className={styles.projectCard}
                    href="https://kolizascrap.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className={styles.projectTag}>TOOLING</span>
                    <strong>Kolizascrap.com</strong>
                    <span>РљРѕР»Рё Р·Р° СЃРєСЂР°Рї РєР°Р»РєСѓР»Р°С‚РѕСЂ</span>
                  </a>
                </div>
                <p>
                  РР·РіСЂР°Р¶РґР°РЅРµС‚Рѕ РЅР° С‚РµРјР°С‚РёС‡РµРЅ Р°РІС‚РѕСЂРёС‚РµС‚ Рµ РґРѕСЃС‚Р° РїРѕ-РІР°Р¶РЅРѕ РѕС‚
                  РЅР°СЃС‚СЂРѕР№РІР°РЅРµ РЅР° СЃР°Р№С‚РѕРІРµС‚Рµ Р·Р° LLM, Р° РёР·РіСЂР°Р¶РґР°РЅРµС‚Рѕ РЅР° pillar
                  pages Рµ РІ РѕСЃРЅРѕРІР°С‚Р° РЅР° СЃРµРјР°РЅС‚РёС‡РЅР°С‚Р° Р°СЂС…РёС‚РµРєС‚СѓСЂР° РЅР° Р°РїР»РёРєР°С†РёРёС‚Рµ.
                </p>
              </div>

              <figure className={styles.expertiseMedia}>
                <Image
                  src="/ivan.webp"
                  alt="РџРѕСЂС‚СЂРµС‚ РЅР° РРІР°РЅ Р”РёРјРёС‚СЂРѕРІ"
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
            Р—Р° РєРѕРЅС‚Р°РєС‚
          </a>
          <Link className={styles.ctaLink} href="/blog">
            Р‘Р»РѕРі
          </Link>
        </section>
      </main>
    </>
  );
};

export default About;




