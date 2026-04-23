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
  headline: "Как се прави сайт",
  description:
    "Как се прави сайт: структура, semantic clusters, pillar content и вътрешни връзки с SEO, PPC и WordPress/Next.js подход.",
  image: [`${SITE_URL}/og/how-to-make-site-og.png`],
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
  datePublished: "2026-01-27",
  dateModified: "2026-04-12",
  mainEntityOfPage: `${SITE_URL}/how-to-make-site`,
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
      name: "Как се прави сайт",
      item: `${SITE_URL}/how-to-make-site`,
    },
  ],
};

const HowToMakeSite = () => {
  return (
    <>
      <SeoHead
        title="Как се прави сайт с правилна SEO структура | inweblife"
        description="Как се прави сайт: семантична структура, вътрешни връзки и SEO архитектура за устойчива видимост в Google."
        keywords="как се прави сайт, SEO експерт, PPC експерт, WordPress Developer, Next.js специалист, semantic clusters, pillar content, вътрешни връзки"
        path="/how-to-make-site"
        image="/og/how-to-make-site-og.png"
        imageAlt="Процес по изграждане на уеб сайт"
        type="article"
        publishedTime="2026-01-27T00:00:00+02:00"
        modifiedTime="2026-04-12T00:00:00+03:00"
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
        <section className={styles.heroBanner} aria-label="Как се прави сайт">
          <Image
            src="/working.webp"
            alt="Процес по изграждане на уеб сайт"
            fill
            sizes="100vw"
            priority
            fetchPriority="high"
            className={styles.heroImage}
          />
          <div className={styles.heroOverlay}>
            <h1>Как се прави сайт</h1>
          </div>
        </section>

        <article className={styles.article}>
          <section>
            <p>
              <strong>Автор:</strong> Иван Димитров | <strong>Публикувано:</strong>{" "}
              <time dateTime="2026-01-27">27 януари 2026</time>
            </p>
            <p>
              Повечето хора питат &quot;как се прави сайт&quot; и очакват отговор от типа: избираш WordPress,
              качваш тема, готово. Технически - да, може да стане така. На практика резултатът е
              сайт, който съществува, но не работи за никого. Нито за Google, нито за клиентите,
              нито за собственика му.
            </p>
            <p>
              Разликата между сайт, който е просто онлайн, и сайт, който носи резултати, се
              определя от 5 решения, взети преди да е написан и първият ред код. Ето кои са те.
            </p>
            <p>
              За пълния процес по изработка на уебсайт - стъпки, цени и стратегия - вижте{" "}
              <Link href="/izrabotka-na-sait">
                <strong>изработка на сайт</strong>
              </Link>
              .
            </p>
          </section>

          <section>
            <h2>Домейн и хостинг – колко струват и как да не сгрешите при избора?</h2>
            <p>
              Домейнът е адресът ви в интернет. Регистрирате .bg за 12–18 лв/год. или .com за
              10–15 лв/год. Купувайте го от регистратор, не от агенцията, която прави сайта ви.
              Причината: ако искате да смените изпълнителя след година, домейнът трябва да е ваш.
              Твърде много бизнеси са в капан, защото агенцията е регистрирала домейна на свое
              име.
            </p>
            <p>
              За хостинг изборът зависи от мащаба. Споделен хостинг (4–8 лв/месец) е достатъчен
              за WordPress сайт с до 50,000 посещения месечно. VPS (15–40 лв/месец) влиза в игра
              когато имате по-специфични нужди или custom код. Ако правите Next.js проект,
              Vercel/Netlify имат безплатен tier, който покрива повечето нужди. За цените на SEO
              и реклама след изграждането вижте{" "}
              <Link href="/website-and-google-ads">
                <strong>изработка на сайт и реклама в Гугъл</strong>
              </Link>
              .
            </p>
          </section>

          <section>
            <h2>WordPress или Next.js – кое е по-добро за вашия сайт?</h2>
            <p>
              WordPress е правилният избор когато: клиентът ще добавя съдържание сам, проектът
              включва онлайн магазин с WooCommerce, бюджетът е под 3,000 лв, или крайният срок е
              2–3 седмици. 43% от всички сайтове в света работят на WordPress - не е случайно.
              Kadence, Astra и GeneratePress са темите, с които работя.
            </p>
            <p>
              Next.js влиза в игра когато: скоростта е критична (трябват PageSpeed резултати над
              90), проектът има custom логика, екипът владее JavaScript, или сайтът ще се
              обновява активно от разработчик. Разходите са 3–5 пъти по-високи спрямо WordPress,
              но производителността го оправдава.
            </p>
            <p>
              Грешният въпрос е &quot;кое е по-добро?&quot; Правилният е: &quot;кой ще поддържа този сайт след
              две години?&quot; Ако отговорът е клиентът сам - WordPress. Ако отговорът е разработчик
              - може и Next.js. Техническото сравнение продължава в{" "}
              <Link href="/modern-site">
                <strong>как се прави модерен сайт</strong>
              </Link>
              .
            </p>
          </section>

          <section>
            <h2>Как да структурирате сайта преди да стартирате разработката?</h2>
            <p>
              Преди да се отвори Figma или WordPress, трябва списък с всички страници и тяхната
              цел. Началната страница - какво прави. Услуги - колко отделни страници. Блог - да
              или не. Контакти - форма или само имейл. Без тази карта дизайнерът гради без план,
              а разработчикът гадае.
            </p>
            <p>
              URL структурата е следващото решение. /услуги/seo-оптимизация/ изглежда по-добре
              от /page?id=47 не само за хората, но и за Google. Всяка URL трябва да казва на
              пръв поглед за какво е страницата.
            </p>
            <p>
              Най-честата грешка, която виждам: една огромна начална страница с всичко -
              услуги, цени, портфолио, форма за контакт. Резултатът е страница, която Google
              не може да класира за нищо конкретно. Всяка услуга заслужава отделна страница,
              написана около въпроса, който клиентът реално задава в търсачката. Отделната
              целева страница е и основата на добрия Landing Page Experience - пряк компонент
              на{" "}
              <Link href="/quality-score-seo">
                <strong>Quality Score в Google Ads</strong>
              </Link>
              , който директно определя колко плащате за клик. Как сайтът
              превръща тези посещения в запитвания е тема на{" "}
              <Link href="/powerful-site">
                <strong>мощен сайт</strong>
              </Link>
              .
            </p>
          </section>

          <section>
            <h2>Как да пишете SEO съдържание, което Google класира на първа страница?</h2>
            <p>
              Пишете за въпроса, не за ключовата дума. &quot;Колко струва SEO оптимизация&quot; е въпрос,
              който хората реално пишат. &quot;SEO оптимизация цена&quot; е ключова дума, която
              звучи изкуствено. Страниците, написани около реален въпрос, се четат по-добре и
              се класират по-стабилно.
            </p>
            <p>
              Вътрешните връзки не са SEO трик - те са начинът, по който реален сайт функционира.
              Всяка статия трябва да препраща към поне 2–3 свързани страници. Не за да угодите
              на алгоритъм, а защото потребителят, прочел едно нещо, логично иска да прочете
              следващото.
            </p>
            <h3>Как да избегнете дублиращо се съдържание и keyword cannibalization?</h3>
            <p>
              Не публикувайте пет статии за едно и също нещо с различни заглавия. Google вижда
              дублиращото се намерение и не знае коя страница да покаже - накрая не показва
              нито една. Една силна статия, покриваща темата в дълбочина, бие пет тънки всеки
              път. За mobile-first перспектива разгледай{" "}
              <Link href="/seo-fashion">
                <strong>Mobile-First SEO</strong>
              </Link>
              . Защо уж новата „AI SEO оптимизация&rdquo; е само преопакована стара услуга -{" "}
              <Link href="/ai-seo-lie">
                <strong>SEO оптимизация за AI Overview</strong>
              </Link>
              . А защо агенциите, които не изграждат съдържание, компенсират с обаждания -{" "}
              <Link href="/telemarketing-seo">
                <strong>доброто SEO в SERP</strong>
              </Link>
              .
            </p>
          </section>

          <section>
            <h2>Колко струва изработката на сайт и кой е правилният бюджет?</h2>
            <p>
              Базовият фирмен сайт на WordPress - начална страница, услуги, за нас, контакти -
              не трябва да струва повече от 400–600 евро при добросъвестен изпълнител. Всичко
              над това изисква ясна обосновка: онлайн магазин, custom функционалности, специален
              дизайн от нулата.
            </p>
            <p>
              Бюджетът за сайта е само началото. Домейнът е 10–18 лв/год., хостингът започва
              от 4–8 лв/месец и расте с трафика. SEO оптимизацията стартира от 500 евро месечно.
              Google Ads изисква отделен рекламен бюджет плюс такса за управление. Тези числа
              рядко се споменават предварително.
            </p>
            <p>
              Правилният въпрос не е &quot;колко да похарча за сайта?&quot;, а &quot;колко ще ми струва цялото
              онлайн присъствие за първата година?&quot;. Пълният анализ с реални числа е в{" "}
              <Link href="/website-and-google-ads">
                <strong>изработка на сайт и реклама в Гугъл</strong>
              </Link>
              .
            </p>
          </section>

          <RelatedPosts currentHref="/how-to-make-site" styles={styles} />

          <ShareButtons path="/how-to-make-site" title="Как се прави сайт" styles={styles} />

          <PostNavigation currentHref="/how-to-make-site" styles={styles} />
        </article>
      </main>
    </>
  );
};

export default HowToMakeSite;
