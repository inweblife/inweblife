import Image from "next/image";
import heroImg from "../public/seo-odit.webp";
import Link from "next/link";
import SeoHead from "../components/SeoHead";
import styles from "../styles/Article.module.css";
import AuthorBox from "../components/AuthorBox";
import { authorSchema } from "../lib/author";
import AuthorByline from "../components/AuthorByline";
import TableOfContents from "../components/TableOfContents";
import ShareButtons from "../components/ShareButtons";
import PostNavigation from "../components/PostNavigation";
import RelatedPosts from "../components/RelatedPosts";
import { SITE_URL } from "../lib/config";

const TITLE = "SEO одит на сайт: какво проверява и колко струва";
const DESCRIPTION =
  "SEO одит на сайт. Анализ на технически проблеми, съдържание и външни линкове за подобрено онлайн класиране. Всички тайни на едно място.";

const DO_I_NEED_SEO_URL = "https://developers.google.com/search/docs/fundamentals/do-i-need-seo";
const INDEXING_URL = "https://support.google.com/webmasters/answer/7440203?hl=bg";
const ROBOTS_URL = "https://developers.google.com/search/docs/crawling-indexing/robots/intro";
const SITEMAP_URL = "https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview";
const CANONICAL_URL =
  "https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls";
const CWV_URL = "https://developers.google.com/search/docs/appearance/core-web-vitals";
const CWV_REPORT_URL = "https://support.google.com/webmasters/answer/9205520?hl=bg";
const MOBILE_URL =
  "https://developers.google.com/search/docs/crawling-indexing/mobile/mobile-sites-mobile-first-indexing";
const TITLE_LINK_URL = "https://developers.google.com/search/docs/appearance/title-link";
const HELPFUL_URL = "https://developers.google.com/search/docs/fundamentals/creating-helpful-content";
const LINKS_URL = "https://developers.google.com/search/docs/crawling-indexing/links-crawlable";
const SPAM_URL = "https://developers.google.com/search/docs/essentials/spam-policies";
const MANUAL_URL = "https://support.google.com/webmasters/answer/9044175?hl=bg";
const DISAVOW_URL = "https://support.google.com/webmasters/answer/2648487?hl=bg";
const GBP_URL = "https://support.google.com/business/answer/7091?hl=bg";
const AI_URL = "https://developers.google.com/search/docs/appearance/ai-features";
const USERS_URL = "https://support.google.com/webmasters/answer/7687615?hl=bg";
const PERF_URL = "https://support.google.com/webmasters/answer/7576553?hl=bg";
const URL_INSPECT_URL = "https://support.google.com/webmasters/answer/9012289?hl=bg";
const PSI_URL = "https://pagespeed.web.dev/";
const OPENAI_BOTS_URL = "https://developers.openai.com/api/docs/bots";
const GOOGLE_CRAWLERS_URL =
  "https://developers.google.com/search/docs/crawling-indexing/google-common-crawlers";

const tocItems = [
  { id: "kakvo-e-seo-odit", label: "Какво е SEO одит на сайт" },
  { id: "tehnicheska-optimizatsia-i-analiz", label: "Техническа оптимизация и анализ на сайт" },
  { id: "seo-odit-tsena", label: "SEO одит цена" },
  { id: "seo-analiz-na-sait", label: "SEO анализ на сайт: как да го направите сами" },
];

const Src = ({ href, children }) => (
  <a href={href} target="_blank" rel="noopener noreferrer">
    {children}
  </a>
);

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: TITLE,
  description: DESCRIPTION,
  image: [`${SITE_URL}/og/seo-odit.png`],
  author: authorSchema,
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
  datePublished: "2026-10-30",
  dateModified: "2026-10-30",
  mainEntityOfPage: `${SITE_URL}/seo-odit`,
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Начало", item: `${SITE_URL}/` },
    { "@type": "ListItem", position: 2, name: "Блог", item: `${SITE_URL}/blog` },
    { "@type": "ListItem", position: 3, name: TITLE, item: `${SITE_URL}/seo-odit` },
  ],
};

const SeoOdit = () => {
  return (
    <>
      <SeoHead
        title="SEO одит на сайт: какво проверява и колко струва"
        description="SEO одит на сайт. Анализ на технически проблеми, съдържание и външни линкове за подобрено онлайн класиране. Всички тайни на едно място."
        keywords="SEO одит, SEO одит цена, SEO одит на сайт, SEO анализ на сайт, технически SEO одит, анализ на уеб сайт, безплатен SEO одит"
        path="/seo-odit"
        image="/og/seo-odit.png"
        imageAlt={TITLE}
        type="article"
        publishedTime="2026-10-30T00:00:00+02:00"
        modifiedTime="2026-10-30T00:00:00+02:00"
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
        <section className={styles.heroBanner} aria-label={TITLE}>
          <Image
            src={heroImg}
            alt={TITLE}
            fill
            sizes="100vw"
            priority
            fetchPriority="high"
            placeholder="blur"
            className={styles.heroImage}
          />
          <div className={styles.heroOverlay}>
            <h1>{TITLE}</h1>
          </div>
        </section>

        <article className={styles.article}>
          <section>
            <AuthorByline href="/seo-odit" styles={styles} />
            <p>
              <strong>
                SEO одитът е проверка на целия сайт, която показва защо Google не го индексира, не
                го класира или не му дава кликове, и подрежда проблемите по важност. Подробният
                еднократен одит струва приблизително 460-820 €, а одит само на техническата част - от около
                210 € за малък сайт.
              </strong>
            </p>
            <p>
              Резултатът е списък със задачи. Поправките се плащат отделно.
            </p>
          </section>

          <TableOfContents items={tocItems} styles={styles} />

          <section>
            <h2 id="kakvo-e-seo-odit">Какво е SEO одит на сайт?</h2>
            <p>
              <strong>
                SEO одитът на сайт е проверка на всички страници по техническите, съдържателните и външните
                фактори, които влияят на класирането в Google. Крайният резултат е подреден списък
                с проблеми и решения.
              </strong>
            </p>
            <p>
              Одитът не променя нищо по сайта. Той е диагноза: показва какво пречи и в какъв ред
              да се поправя.
            </p>
            <p>
              Google изброява „преглед на съдържанието или структурата на сайта“ и технически
              съвети за хостинг, пренасочвания и страници за грешки сред услугите, които SEO
              специалистът предлага (<Src href={DO_I_NEED_SEO_URL}>Google: Do you need an SEO?</Src>).
            </p>

            <h3>Каква е разликата между SEO одит и SEO анализ на сайт?</h3>
            <p>
              <strong>
                SEO анализът отговаря на един конкретен въпрос, например защо една страница не се
                класира по една заявка. SEO одитът проверява целия сайт.
              </strong>
            </p>
            <p>
              Затова анализът е по-кратък и по-евтин. Одитът се прави преди стратегия, редизайн
              или смяна на изпълнител, когато трябва пълна картина.
            </p>

            <h3>Какво получавате след SEO одита?</h3>
            <p>
              <strong>
                След SEO одита трябва да получите списък с проблеми, подредени по ефекта им върху
                трафика. За всеки проблем трябва да има доказателство, решение и отговорник.
              </strong>
            </p>
            <p>Всеки ред от добрия одит съдържа шест полета:</p>
            <div className={styles.tableWrap}>
              <table className={`${styles.table} ${styles.tableStack}`}>
                <thead>
                  <tr>
                    <th>Поле</th>
                    <th>Какво съдържа</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Проблем</td>
                    <td data-label="Какво съдържа">Какво точно не е наред, с един ред</td>
                  </tr>
                  <tr>
                    <td>Доказателство</td>
                    <td data-label="Какво съдържа">Адрес, екранна снимка или отчет от Search Console</td>
                  </tr>
                  <tr>
                    <td>Причина</td>
                    <td data-label="Какво съдържа">Защо се получава, а не само какво се вижда</td>
                  </tr>
                  <tr>
                    <td>Решение</td>
                    <td data-label="Какво съдържа">Конкретната поправка, която може да се изпълни</td>
                  </tr>
                  <tr>
                    <td>Отговорник</td>
                    <td data-label="Какво съдържа">Програмист, копирайтър или SEO специалист</td>
                  </tr>
                  <tr>
                    <td>Приоритет</td>
                    <td data-label="Какво съдържа">Колко засяга трафика и запитванията</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              Същите полета има и в чеклиста за изтегляне в края на статията, така че можете да
              сравните получения одит с него.
            </p>

            <h3>Ще се подобрят ли позициите след SEO одит?</h3>
            <p>
              <strong>
                Позициите се подобряват от поправките, не от самия одит. Одитът показва кои
                поправки ще имат най-голям ефект.
              </strong>
            </p>
            <p>
              Пример от практиката: сайтът на автоелектричар с лендинг страница беше индексиран,
              но не се показваше на първа страница по нито една заявка.
            </p>
            <p>Одитът откри четири проблема в структурата:</p>
            <ul>
              <li>
                Съдържанието не беше подредено семантично, по заявките на клиентите (
                <Link href="/semantichno-yadro"><strong>семантично ядро</strong></Link>).
              </li>
              <li>Нямаше йерархия на връзките между страниците.</li>
              <li>Липсваха вътрешни линкове към страниците.</li>
              <li>Нямаше блог, който да отговаря на въпросите на клиентите.</li>
            </ul>
            <p>
              Между 15 и 20 дни след корекциите сайтът излезе на първа страница по 4 заявки.
            </p>

            <h3>Как да разпознаете слаб SEO одит?</h3>
            <p>
              <strong>
                Слабият SEO одит на сайт е дълъг списък с грешки без приоритети и без доказателства, или
                обещава първо място в Google.
              </strong>
            </p>
            <ul>
              <li>
                <strong>Автоматичен експорт.</strong> Десетки страници от инструмент без коментар
                кое от тях има значение.
              </li>
              <li>
                <strong>Гаранция за позиция.</strong> Google пише, че никой не може да гарантира
                първо място, и съветва да търсите друг изпълнител, ако ви го обещават (
                <Src href={DO_I_NEED_SEO_URL}>Do you need an SEO?</Src>).
              </li>
              <li>
                <strong>Disavow „за всеки случай“.</strong> Според Google повечето сайтове нямат
                нужда от този инструмент. Той е за случаите с много изкуствени линкове, които са
                довели или ще доведат до ръчно действие (
                <Src href={DISAVOW_URL}>помощ за Search Console</Src>).
              </li>
              <li>
                <strong>Без адреси.</strong> Проблем, за който няма URL или екранна снимка, не
                може да се провери и поправи.
              </li>
              <li>
                <strong>Без Search Console.</strong> Одит без данните на сайта от Google гадае
                какво се случва в търсенето.
              </li>
            </ul>

            <h3>Кога е нужен SEO одит и колко често?</h3>
            <p>
              <strong>
                SEO одит на уеб сайт е нужен преди и след редизайн или смяна на домейн, при спад на трафика и
                преди да наемете нов SEO изпълнител. Без такъв повод - веднъж годишно.
              </strong>
            </p>
            <p>
              Google не посочва препоръчителна честота. Веднъж годишно е най-честата препоръка в
              проверените оферти. За големи и конкурентни сайтове те дават от 3 до 6 месеца.
            </p>
            <ul>
              <li>
                <strong>Редизайн или смяна на домейн.</strong> Одит преди промяната показва какво
                да се запази. Одит след нея показва какво е счупено. Повече има в{" "}
                <Link href="/redizain-ili-nov-sait"><strong>редизайн или нов сайт</strong></Link>.
              </li>
              <li>
                <strong>Спад на трафика.</strong> Одитът отделя техническата причина от сезонната.
              </li>
              <li>
                <strong>Нов изпълнител.</strong> Еднократният одит е най-безопасният тест. Плащате
                веднъж и виждате как мисли човекът, без дългосрочен договор.
              </li>
            </ul>
            <p>
              Текущите технически проверки са част от{" "}
              <Link href="/poddrzhka-na-sait"><strong>поддръжката на сайт</strong></Link>. Одитът е
              еднократният пълен преглед.
            </p>
          </section>

          <section>
            <h2 id="tehnicheska-optimizatsia-i-analiz">
              Техническа оптимизация и анализ на сайт: какво се проверява
            </h2>
            <p>
              <strong>
                SEO одитът на уеб сайт проверява шест области: индексиране, скорост и мобилна версия,
                съдържание и заглавия, вътрешна структура, външни връзки и, при местен бизнес,
                профила в Google.
              </strong>
            </p>
            <p>
              Всяка проверка стъпва на конкретно правило на Google, посочено в последната колона.
            </p>
            <div className={styles.tableWrap}>
              <table className={`${styles.table} ${styles.tableStack}`}>
                <thead>
                  <tr>
                    <th>Област</th>
                    <th>Какво се проверява</th>
                    <th>Правило на Google</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Индексиране</td>
                    <td data-label="Какво се проверява">
                      Кои важни страници не са в индекса и защо; robots.txt, sitemap, canonical
                    </td>
                    <td data-label="Правило на Google">
                      <Src href={INDEXING_URL}>Отчет за индексиране</Src>,{" "}
                      <Src href={ROBOTS_URL}>robots.txt</Src>,{" "}
                      <Src href={SITEMAP_URL}>sitemap</Src>,{" "}
                      <Src href={CANONICAL_URL}>canonical</Src>
                    </td>
                  </tr>
                  <tr>
                    <td>Скорост и мобилна версия</td>
                    <td data-label="Какво се проверява">
                      Core Web Vitals по реални данни; как работи сайтът на телефон
                    </td>
                    <td data-label="Правило на Google">
                      <Src href={CWV_URL}>Core Web Vitals</Src>,{" "}
                      <Src href={MOBILE_URL}>mobile-first индексиране</Src>
                    </td>
                  </tr>
                  <tr>
                    <td>Съдържание и заглавия</td>
                    <td data-label="Какво се проверява">
                      Title, H1, описания; тънки и дублирани страници; съответствие с намерението
                    </td>
                    <td data-label="Правило на Google">
                      <Src href={TITLE_LINK_URL}>Title links</Src>,{" "}
                      <Src href={HELPFUL_URL}>полезно съдържание</Src>
                    </td>
                  </tr>
                  <tr>
                    <td>Вътрешна структура</td>
                    <td data-label="Какво се проверява">
                      404 грешки, пренасочвания, страници без вътрешни линкове, канибализация
                    </td>
                    <td data-label="Правило на Google">
                      <Src href={LINKS_URL}>Линкове, които Google може да обходи</Src>
                    </td>
                  </tr>
                  <tr>
                    <td>Външни връзки</td>
                    <td data-label="Какво се проверява">
                      Изкуствени или платени линкове; ръчни действия срещу сайта
                    </td>
                    <td data-label="Правило на Google">
                      <Src href={SPAM_URL}>Правила за спам</Src>,{" "}
                      <Src href={MANUAL_URL}>ръчни действия</Src>
                    </td>
                  </tr>
                  <tr>
                    <td>Местно присъствие</td>
                    <td data-label="Какво се проверява">
                      Google Business Profile: категория, адрес, отзиви
                    </td>
                    <td data-label="Правило на Google">
                      <Src href={GBP_URL}>Местно класиране</Src>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3>Какво включва техническият SEO одит?</h3>
            <p>
              <strong>
                Техническият SEO одит проверява дали Google може да обходи, индексира и покаже
                страниците: индексиране, robots.txt, sitemap, canonical, пренасочвания и 404
                грешки, Core Web Vitals и мобилна версия.
              </strong>
            </p>
            <p>
              Това е най-измеримата част от одита. Всяка грешка има точен URL и точен отчет в
              Search Console.
            </p>
            <ul>
              <li>
                <strong>Core Web Vitals.</strong> Измерват изживяването на страницата: зареждане,
                реакция и стабилност. Google препоръчва LCP до 2,5 секунди, INP под 200
                милисекунди и CLS под 0,1 (<Src href={CWV_URL}>Google Search Central</Src>).
              </li>
              <li>
                <strong>Мобилна версия.</strong> Google индексира сайтовете по мобилната им
                версия (<Src href={MOBILE_URL}>mobile-first индексиране</Src>). Затова одитът
                проверява първо телефона.
              </li>
              <li>
                <strong>Индексиране.</strong> Важна страница с услуга, която е извън индекса, е
                по-сериозен проблем от стотици дребни предупреждения.
              </li>
            </ul>

            <h3>Проверява ли SEO одитът видимостта в AI търсачките?</h3>
            <p>
              <strong>
                Да, доколкото тя може да се провери. SEO одитът проверява дали AI търсачките имат
                достъп до сайта и дали страниците могат да бъдат показвани в техните отговори. Не
                може да гарантира, че сайтът ще бъде цитиран.
              </strong>
            </p>
            <p>
              Отделен „AI одит“ не е нужен за Google. Според Google за AI Overviews и AI Mode няма
              допълнителни изисквания, а добрите SEO практики остават валидни (
              <Src href={AI_URL}>AI features and your website</Src>).
            </p>
            <ul>
              <li>
                <strong>Google AI Overviews и AI Mode.</strong> Страницата трябва да е индексирана
                и да може да се показва с откъс. Одитът проверява дали nosnippet, max-snippet или
                noindex не ограничават по погрешка важни страници (
                <Src href={AI_URL}>Google Search Central</Src>).
              </li>
              <li>
                <strong>ChatGPT.</strong> Сайт, който блокира OAI-SearchBot в robots.txt, не се
                показва в отговорите на ChatGPT search. GPTBot е отделен бот за обучение на
                моделите и може да се блокира независимо (
                <Src href={OPENAI_BOTS_URL}>OpenAI: Overview of crawlers</Src>).
              </li>
              <li>
                <strong>Google-Extended.</strong> Блокирането му не влияе на присъствието в Google
                Search и не е сигнал за класиране (
                <Src href={GOOGLE_CRAWLERS_URL}>Google: common crawlers</Src>). Одитът проверява
                дали в robots.txt не е объркан с Googlebot.
              </li>
              <li>
                <strong>Измерване.</strong> Search Console отчита трафика от AI Overviews и AI Mode
                в отчета „Ефективност“, тип търсене „Уеб“, заедно с останалия трафик от Google (
                <Src href={AI_URL}>Google Search Central</Src>).
              </li>
            </ul>
            <p>
              Как се работи за цитиране в ChatGPT, Perplexity и AI Overviews е описано в статията
              за <Link href="/geo-optimizatsia"><strong>GEO оптимизация</strong></Link>.
            </p>
          </section>

          <section>
            <h2 id="seo-odit-tsena">SEO одит цена: колко струва в България</h2>
            <p>
              <strong>
                Подробният еднократен SEO одит на сайт струва приблизително 460-820 € според размера на сайта.
                Одит само на техническата част е от около 210 € за сайт до 10 страници до около
                510 € за онлайн магазин.
              </strong>
            </p>
            <p>
              На 30 октомври 2026 г. проверих 9 български страници, които се класират в Google
              по „SEO одит“. Седем от тях не посочват цена за пълен одит. Двете, които посочват
              цена, дават само долна граница: от 300 € и от 250 лв. (около 128 €).
            </p>
            <p>
              Затова таблицата съчетава публикувана ценова листа по размер на сайта и пазарния
              диапазон от анализа на{" "}
              <Link href="/seo-optimizaciya-ceni"><strong>SEO оптимизация цени</strong></Link>.
            </p>
            <div className={styles.tableWrap}>
              <table className={`${styles.table} ${styles.tableStack}`}>
                <thead>
                  <tr>
                    <th>Вид проверка</th>
                    <th>Цена</th>
                    <th>Какво получавате</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Безплатна автоматична проверка</td>
                    <td data-label="Цена">0 €</td>
                    <td data-label="Какво получавате">
                      Оценка и списък с грешки за една или няколко страници, без приоритети
                    </td>
                  </tr>
                  <tr>
                    <td>Технически одит, до 10 страници</td>
                    <td data-label="Цена">около 211 €</td>
                    <td data-label="Какво получавате">Писмен доклад за техническата част</td>
                  </tr>
                  <tr>
                    <td>Технически одит, 11-100 страници</td>
                    <td data-label="Цена">около 352 €</td>
                    <td data-label="Какво получавате">Писмен доклад за техническата част</td>
                  </tr>
                  <tr>
                    <td>Технически одит, над 100 страници или магазин</td>
                    <td data-label="Цена">около 509 €</td>
                    <td data-label="Какво получавате">Писмен доклад за техническата част</td>
                  </tr>
                  <tr>
                    <td>Подробен еднократен одит</td>
                    <td data-label="Цена">460-820 €</td>
                    <td data-label="Какво получавате">
                      Техническа част, съдържание, линкове и план с приоритети
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              Сравнявайте офертите по броя проверени страници и по това дали има план с
              приоритети. „От 300 €“ без списък на проверките не може да се сравни с нищо.
            </p>

            <h3>От какво зависи цената на SEO одит?</h3>
            <p>
              <strong>
                Цената зависи най-много от броя страници, от типа на сайта и от дълбочината на
                проверката.
              </strong>
            </p>
            <ul>
              <li>
                <strong>Брой страници.</strong> Всички публикувани ценови листи, които открих, са
                разделени по брой страници.
              </li>
              <li>
                <strong>Тип сайт.</strong>{" "}
                <Link href="/izrabotka-na-online-magazin"><strong>Онлайн магазинът</strong></Link>{" "}
                има филтри и варианти на продукти, които създават хиляди адреси за проверка.
                Многоезичният сайт удвоява работата.
              </li>
              <li>
                <strong>Дълбочина.</strong> Одитът само на техническата част е по-евтин от
                одита, който включва съдържание, ключови думи и линкове.
              </li>
              <li>
                <strong>Достъп до данни.</strong> Без Search Console и Analytics одитът работи
                само с това, което се вижда отвън.
              </li>
            </ul>

            <h3>Колко струва SEO анализ на сайт?</h3>
            <p>
              <strong>
                SEO анализът на една страница или заявка отнема часове, а не дни, затова цената му
                зависи от часовете работа. Час работа на SEO специалист струва около 100 € без ДДС.
              </strong>
            </p>
            <p>
              Анализът е подходящ, когато знаете къде е проблемът: една услуга, която е паднала,
              или една заявка, по която не се показвате. Когато не знаете откъде идва
              проблемът, анализът на отделни страници излиза по-скъпо от одит на целия сайт.
            </p>

            <h3>Включени ли са поправките в цената на одита?</h3>
            <p>
              <strong>
                Не. Одитът е диагноза, а поправките се договарят отделно с програмист, копирайтър
                или SEO специалист, според вида на проблема.
              </strong>
            </p>
            <p>
              Изключение е месечният SEO абонамент. При него първоначалният одит обикновено е
              включен в първия месец и не се таксува отделно, както е описано в{" "}
              <Link href="/seo-optimizaciya-ceni"><strong>цените на SEO оптимизация</strong></Link>.
            </p>

            <h3>Има ли безплатен SEO одит?</h3>
            <p>
              <strong>
                Да, но безплатният SEO одит е автоматична проверка. Тя намира видимите грешки, но не
                ги подрежда по важност и не вижда данните от Search Console.
              </strong>
            </p>
            <p>
              Полезен е за първи поглед. Не отговаря обаче дали грешката влияе на трафика: стотици
              липсващи alt текстове може да тежат по-малко от една важна страница извън индекса.
            </p>
            <p>
              Безплатният одит е изкушение, което повечето агенции предлагат като първа стъпка
              към месечен договор. Ръчният одит обаче е работа: час работа на SEO специалист
              струва около 100 € без ДДС, а пълният одит отнема дни. Затова това, което се дава
              безплатно, е автоматичният отчет, а не ръчният преглед.
            </p>

            <h3>Колко време отнема SEO одит?</h3>
            <p>
              <strong>
                SEO одит на малък или среден сайт обикновено отнема от 3 до 7 работни дни, а на
                голям сайт или онлайн магазин - до две седмици.
              </strong>
            </p>
            <p>
              Това са сроковете, публикувани в проверените оферти. Към тях добавете времето,
              докато изпълнителят получи достъп до Search Console и Analytics.
            </p>
            <p>
              Не давайте собственост върху ресурса в Search Console. За одит е достатъчно ниво на
              потребител, което дава права за преглед на данните (
              <Src href={USERS_URL}>помощ за Search Console</Src>).
            </p>
          </section>

          <section>
            <h2 id="seo-analiz-na-sait">SEO анализ на сайт: как да го направите сами</h2>
            <p>
              <strong>
                Основния SEO анализ на сайт можете да направите сами в Google Search Console и
                PageSpeed Insights: дали важните страници са индексирани, има ли ръчни действия, как са Core
                Web Vitals и по кои заявки сайтът се показва без кликове.
              </strong>
            </p>
            <ol>
              <li>
                Отворете „Индексиране“ → „Страници“ и вижте кои страници не са индексирани и
                защо. Важна услуга в списъка „Не е индексирана“ е проблем номер едно (
                <Src href={INDEXING_URL}>отчет за индексиране</Src>).
              </li>
              <li>
                В „Сигурност и ръчни действия“ → „Ръчни действия“ трябва да пише, че няма открити
                проблеми (<Src href={MANUAL_URL}>отчет за ръчни действия</Src>).
              </li>
              <li>
                Отворете отчета Core Web Vitals в раздел „Изживяване“. Гледайте мобилните данни
                отделно от компютърните (<Src href={CWV_REPORT_URL}>отчет Core Web Vitals</Src>).
              </li>
              <li>
                В „Ефективност“ подредете заявките по показвания. Много показвания, почти нула
                кликове и позиция след 20 обикновено значат, че няма страница, която отговаря
                точно на заявката (<Src href={PERF_URL}>отчет за ефективност</Src>).
              </li>
              <li>
                Пуснете „Проверка на URL адреса“ за най-важната страница. Вижте дали е
                индексирана и коя версия Google смята за канонична (
                <Src href={URL_INSPECT_URL}>проверка на URL</Src>).
              </li>
              <li>
                Проверете началната страница и една страница с услуга в{" "}
                <Src href={PSI_URL}>PageSpeed Insights</Src>, като започнете с мобилния резултат.
              </li>
            </ol>
            <p>
              Самопроверката няма да ви каже какво да поправите първо. Няма да покаже и дали две
              ваши страници се борят за една заявка, което се проверява при{" "}
              <Link href="/seo-slug-kanibalizaciya"><strong>канибализация на ключови думи</strong></Link>.
            </p>

            <div className={styles.downloadBox}>
              <p className={styles.downloadBoxText}>
                <strong>Чеклист за SEO одит на сайт</strong> - 19 проверки с отчета, в който се гледат,
                нормалното състояние и кога е проблем. Попълвате резултата, доказателството и кой
                поправя. Съвместим с Google Sheets и Excel (CSV, UTF-8).
              </p>
              <a className={styles.downloadButton} href="/seo-odit-cheklist.csv" download>
                Изтегли чеклиста →
              </a>
            </div>
            <p>
              Ако искате одит на вашия сайт, контактите ми са на страницата „За мен“ в менюто.
            </p>
          </section>

          <AuthorBox styles={styles} />

          <RelatedPosts
            currentHref="/seo-odit"
            styles={styles}
            hrefs={["/seo-optimizaciya-ceni", "/seo-slug-kanibalizaciya", "/poddrzhka-na-sait"]}
          />

          <ShareButtons path="/seo-odit" title={TITLE} styles={styles} />

          <PostNavigation currentHref="/seo-odit" styles={styles} />
        </article>
      </main>
    </>
  );
};

export default SeoOdit;
