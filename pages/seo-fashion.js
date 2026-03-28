import Image from "next/image";
import Link from "next/link";
import SeoHead from "../components/SeoHead";

import styles from "../styles/Article.module.css";
import ShareButtons from "../components/ShareButtons";
import PostNavigation from "../components/PostNavigation";
import RelatedPosts from "../components/RelatedPosts";
import { SITE_URL } from "../lib/config";

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "В ерата на смартфоните",
  description:
    "Mobile-first SEO и PPC за AI търсене: ChatGPT, Gemini, Perplexity, semantic clarity и topical authority с практичен подход.",
  image: ["https://inweblife.vercel.app/desk.webp"],
  author: {
    "@type": "Person",
    name: "Иван Димитров",
    url: `${SITE_URL}/about`,
  },
  publisher: {
    "@type": "Organization",
    name: "inweblife",
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/favicon.webp`,
    },
  },
  inLanguage: "bg-BG",
  datePublished: "2026-02-13",
  dateModified: "2026-02-13",
  mainEntityOfPage: `${SITE_URL}/seo-fashion`,
};
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Начало", item: `${SITE_URL}/` },
    { "@type": "ListItem", position: 2, name: "Блог", item: `${SITE_URL}/blog` },
    {
      "@type": "ListItem",
      position: 3,
      name: "В ерата на смартфоните",
      item: `${SITE_URL}/seo-fashion`,
    },
  ],
};

const SeoFashion = () => {
  return (
    <>
      <SeoHead
        title="В ерата на смартфоните | SEO, PPC и AI видимост в търсене"
        description="Mobile-first SEO и PPC за AI търсене: ChatGPT, Gemini, Perplexity, semantic clarity и topical authority с практичен подход."
        keywords="mobile-first SEO, PPC експерт, AI търсене, ChatGPT SEO, Gemini, Perplexity, semantic clarity, topical authority, Next.js специалист"
        path="/seo-fashion"
        image="/og/seo-fashion-og.png"
        imageAlt="Работно бюро с фокус върху мобилни устройства"
        type="article"
        publishedTime="2026-02-13T00:00:00+02:00"
        modifiedTime="2026-02-13T00:00:00+02:00"
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      </SeoHead>

      <main className={styles.main} id="main-content">
        <section className={styles.heroBanner} aria-label="В ерата на смартфоните">
          <Image
            src="/desk.webp"
            alt="Работно бюро с фокус върху мобилни устройства"
            fill
            sizes="100vw"
            priority
            className={styles.heroImage}
          />
          <div className={styles.heroOverlay}>
            <h1>В ерата на смартфоните</h1>
          </div>
        </section>

        <article className={styles.article}>
          <section>
            <p>
              <strong>Автор:</strong> Иван Димитров | <strong>Публикувано:</strong>{" "}
              <time dateTime="2026-02-13">13 февруари 2026</time>
            </p>
            <p>
              Смартфонът промени не само как хората сърфират — промени как мислят, как търсят и
              колко търпение имат. Потребителят на мобилно устройство е различен човек от
              десктоп потребителя. По-нетърпелив, по-конкретен, по-близо до решение. Ако сайтът
              ви не е проектиран около това, губите клиенти, без да го усещате.
            </p>
            <p>
              За техническите изисквания на мобилния сайт виж{" "}
              <Link href="/modern-site">
                <strong>как се прави технически модерен сайт</strong>
              </Link>
              . Тук говорим за поведението зад числата.
            </p>
          </section>

          <section>
            <h2>Мобилният потребител не чете — той сканира</h2>
            <p>
              На десктоп хората четат. На телефон те сканират. Очите се движат по заглавия,
              удебелен текст и първите два реда на всеки параграф. Ако отговорът на въпроса им
              не е видим при бързо преглеждане, те натискат назад — и Google го вижда.
            </p>
            <p>
              Това означава конкретни неща за структурата на съдържанието: кратки параграфи
              (максимум 3–4 изречения), заглавия, които казват точно за какво е секцията, и
              ключовото твърдение в началото — не в края. Журналистическата пирамида работи
              на мобилно по-добре от академичния стил.
            </p>
            <p>
              Bounce rate при мобилно устройство е систематично по-висок от десктоп при едни
              и същи страници. Не защото съдържанието е по-лошо — а защото форматът не е
              пригоден за бързото сканиране на малък екран. За архитектурата на страницата виж{" "}
              <Link href="/how-to-make-site">
                <strong>как се прави сайт</strong>
              </Link>
              .
            </p>
          </section>

          <section>
            <h2>Локалното търсене е почти изцяло мобилно</h2>
            <p>
              &quot;Ресторант наблизо&quot;, &quot;автосервиз Sofia&quot;, &quot;зъболекар до мен&quot; — тези търсения се
              правят от телефон, докато човекът е навън. Не от вкъщи с лаптоп. Това означава,
              че за всеки бизнес с физическо присъствие мобилната оптимизация не е опция,
              а условие за оцеляване.
            </p>
            <p>
              Google My Business профилът трябва да е актуален: работно време, адрес, телефон,
              снимки. Когато потребителят търси на телефона, Google показва резултати от
              Google Maps преди органичните. Ако не сте там — не съществувате за тези търсения.
            </p>
            <p>
              Скоростта на зареждане на мобилно е особено критична при локалните търсения.
              Потребителят е на улицата, на 4G или слаб Wi-Fi, и чака максимум 3 секунди.
              След това отваря следващия резултат в списъка.
            </p>
          </section>

          <section>
            <h2>Гласовото търсене и как промени ключовите думи</h2>
            <p>
              На клавиатура човек пише &quot;евтин хотел Банско&quot;. На глас казва &quot;кой е
              най-евтиният хотел в Банско с безплатен паркинг&quot;. Разликата е огромна за SEO.
              Гласовите заявки са по-дълги, по-разговорни и по-конкретни.
            </p>
            <p>
              Сайтове, структурирани около реални въпроси (как, защо, кое, колко струва),
              се справят по-добре при гласово търсене. Не защото е специална оптимизация,
              а защото отговарят на начина, по който хората реално говорят. Секция FAQ на
              страницата с услуги е добър пример — покрива дългите въпросителни заявки,
              без да компрометира краткото търсене.
            </p>
          </section>

          <section>
            <h2>Мобилното UX е SEO сигнал, не само дизайн въпрос</h2>
            <p>
              Google измерва поведението на потребителите. Ако хората отварят сайта от
              мобилни резултати и веднага се връщат — това е сигнал, че страницата не е
              отговорила на нуждата. Повтарящото се поведение влияе на класирането.
            </p>
            <p>
              Конкретните неща, които повишават задържането на мобилно: бутон за обаждане
              на видно място (click-to-call), адресът да е линк към Google Maps, формата
              за контакт да работи с мобилна клавиатура без хоризонтален скролинг. Дребни
              детайли — но точно те решават дали потребителят ще се свърже или ще потърси
              конкурента. За резултатите, когато всичко е наред, виж{" "}
              <Link href="/powerful-site">
                <strong>мощен сайт</strong>
              </Link>
              .
            </p>
          </section>

          <RelatedPosts currentHref="/seo-fashion" styles={styles} />

          <ShareButtons path="/seo-fashion" title="В ерата на смартфоните" styles={styles} />

          <PostNavigation currentHref="/seo-fashion" styles={styles} />
        </article>
      </main>
    </>
  );
};

export default SeoFashion;
