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
  headline: "Как се прави модерен сайт",
  description:
    "Как се прави модерен сайт: semantic clusters, pillar content, mobile-first UX и SEO/PPC стратегия с Next.js фокус.",
  image: ["https://inweblife.vercel.app/workplace.webp"],
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
  mainEntityOfPage: `${SITE_URL}/modern-site`,
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
      name: "Как се прави модерен сайт",
      item: `${SITE_URL}/modern-site`,
    },
  ],
};

const ModernSite = () => {
  return (
    <>
      <SeoHead
        title="Как се прави модерен сайт | SEO, PPC и Next.js подход"
        description="Как се прави модерен сайт: semantic clusters, pillar content, mobile-first UX и SEO/PPC стратегия с Next.js фокус."
        keywords="модерен сайт, SEO експерт, PPC експерт, Next.js специалист, JavaScript Developer, semantic clusters, pillar content, mobile-first UX"
        path="/modern-site"
        image="/og/modern-site-og.png"
        imageAlt="Модерен работен кът за уеб разработка"
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
        <section className={styles.heroBanner} aria-label="Модерен сайт">
          <Image
            src="/workplace.webp"
            alt="Модерен работен кът за уеб разработка"
            fill
            sizes="100vw"
            priority
            className={styles.heroImage}
          />
          <div className={styles.heroOverlay}>
            <h1>Как се прави модерен сайт</h1>
          </div>
        </section>

        <article className={styles.article}>
          <section>
            <p>
              <strong>Автор:</strong> Иван Димитров | <strong>Публикувано:</strong>{" "}
              <time dateTime="2026-02-13">13 февруари 2026</time>
            </p>
            <p>
              &quot;Модерен сайт&quot; в 2026 не означава тъмен режим и микроанимации. Означава конкретни
              резултати в тестовете на Google — числа, по които алгоритъмът решава дали да ви
              показва на първа страница или не. Повечето сайтове падат на тези тестове не защото
              дизайнът е лош, а защото техническата основа е сглобена набързо.
            </p>
            <p>
              Ето какво реално проверява Google и какво означава за вашия сайт. За основните
              стъпки преди изграждането виж{" "}
              <Link href="/how-to-make-site">
                <strong>как се прави сайт</strong>
              </Link>
              .
            </p>
          </section>

          <section>
            <h2>Core Web Vitals — числата, по които Google ви оценява</h2>
            <p>
              Google измерва три показателя, наречени Core Web Vitals. Те влияят директно на
              класирането и се проверяват безплатно в PageSpeed Insights.
            </p>
            <p>
              <strong>LCP (Largest Contentful Paint)</strong> — колко бързо се зарежда
              най-голямото видимо съдържание. Таргетът е под 2.5 секунди. Най-честата причина
              за лош резултат: голямо hero изображение без WebP формат и без зададени размери.
              Решението е просто — компресирайте снимките, добавете width и height атрибути и
              поставете loading=&quot;eager&quot; само на hero елемента.
            </p>
            <p>
              <strong>CLS (Cumulative Layout Shift)</strong> — колко &quot;скача&quot; страницата докато
              се зарежда. Трябва да е под 0.1. Случва се когато изображения нямат зададени
              размери и страницата се премества при зареждането им. Шрифтовете, заредени
              по-късно, също причиняват CLS.
            </p>
            <p>
              <strong>INP (Interaction to Next Paint)</strong> — заменя FID от март 2024 и мери
              колко бързо страницата реагира на клик или натискане. Таргетът е под 200ms.
              Засяга главно сайтове с тежък JavaScript — магазини, news портали, сложни форми.
            </p>
          </section>

          <section>
            <h2>Mobile-first индексиране — какво реално проверява Googlebot</h2>
            <p>
              Google обхожда мобилната версия на сайта ви първа. Не е настройка, която може да
              се изключи. Ако мобилната версия крие съдържание, което е на десктоп (чрез
              display:none), Google може да не го индексира изобщо.
            </p>
            <p>
              Минимумите за мобилна употребяемост: шрифт поне 16px, бутони и линкове с размер
              поне 48x48px (иначе пръстите ги пропускат), никакво хоризонтално скролване. Тези
              изисквания се проверяват автоматично в Search Console под &quot;Употребяемост на
              мобилни устройства&quot;.
            </p>
            <p>
              Скритата грешка, която виждам почти навсякъде: изображения без явни width и
              height атрибути. Страницата се зарежда, след което &quot;скача&quot;, когато снимките се
              появят. Резултатът: лош CLS score и разфрустриран потребител. За конкретния
              ефект върху трафика виж{" "}
              <Link href="/seo-fashion">
                <strong>в ерата на смартфоните</strong>
              </Link>
              .
            </p>
          </section>

          <section>
            <h2>WordPress vs Next.js — кога скоростта оправдава цената</h2>
            <p>
              WordPress с добра тема (Kadence, GeneratePress) и базова оптимизация дава 70–85
              точки в PageSpeed на мобилно. За 90% от бизнесите е напълно достатъчно.
              WordPress + WP Rocket + Cloudflare — 80–90. Работи за почти всички.
            </p>
            <p>
              Next.js консистентно дава 90–100. Но е 3–5 пъти по-скъп за изграждане и изисква
              разработчик за всяка промяна. Струва си когато: сайтът е e-commerce с хиляди
              продукти, news портал с голям трафик, или SaaS приложение.
            </p>
            <p>
              Не струва си когато: местен бизнес с 10 страници и клиент, който иска сам да
              обновява блога. В такъв случай WordPress е по-добрият избор — не защото е
              по-добра технология, а защото отговаря на реалните нужди.
            </p>
          </section>

          <section>
            <h2>Техническото SEO, което повечето пропускат</h2>
            <p>
              <strong>robots.txt</strong> — проверете, че не блокирате случайно целия сайт.
              Виждал съм WordPress инсталации, при които &quot;Discourage search engines&quot; е
              останало активно след публикуването. Цялостен провал, трудно забележим без
              Search Console.
            </p>
            <p>
              <strong>XML sitemap</strong> — генерирайте и предайте в Search Console. Google
              ще намери сайта и без него, но sitemap-ът ускорява индексирането на нови
              страници с дни до седмици.
            </p>
            <p>
              <strong>301 пренасочвания</strong> — всеки път когато изтриете или преместите
              страница, настройте пренасочване към новия URL. Всяка страница без пренасочване
              е пропусната възможност и сигнал за грешка към Google. За резултатите от
              правилната техническа база виж{" "}
              <Link href="/powerful-site">
                <strong>мощен сайт</strong>
              </Link>
              .
            </p>
          </section>

          <RelatedPosts currentHref="/modern-site" styles={styles} />

          <ShareButtons path="/modern-site" title="Как се прави модерен сайт" styles={styles} />

          <PostNavigation currentHref="/modern-site" styles={styles} />
        </article>
      </main>
    </>
  );
};

export default ModernSite;
