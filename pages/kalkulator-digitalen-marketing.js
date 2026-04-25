import { useState, useRef, useEffect } from "react";
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
  headline: "Калкулатор за дигитален маркетинг - примерни цени",
  description: "Примерни цени за дигитален маркетинг в България: изработка на сайт, SEO, Google Ads, социални мрежи. Реалистични диапазони, не агенционни обещания.",
  image: [`${SITE_URL}/og/kalkulator-digitalen-marketing.png`],
  author: { "@type": "Person", name: "Иван Димитров", url: `${SITE_URL}/about` },
  publisher: {
    "@type": "Organization",
    name: "inweblife",
    url: SITE_URL,
    logo: { "@type": "ImageObject", url: `${SITE_URL}/favicon.webp` },
  },
  inLanguage: "bg-BG",
  datePublished: "2026-04-24",
  dateModified: "2026-04-24",
  mainEntityOfPage: `${SITE_URL}/kalkulator-digitalen-marketing`,
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
      name: "Калкулатор за дигитален маркетинг",
      item: `${SITE_URL}/kalkulator-digitalen-marketing`,
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Защо не показвате точни цени, а диапазони?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Цената на дигиталния маркетинг зависи от десетки фактора - конкурентност на нишата, текущо техническо състояние на сайта, брой ключови думи, пазар. Точна цена преди одит е или измислена, или прекалено висока, за да покрие неизвестните. Диапазоните дават реалистична рамка за ориентация на бюджета.",
      },
    },
    {
      "@type": "Question",
      name: "Мога ли да се доверя на тези числа?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Диапазоните са базирани на реални оферти и пазарни нива в България към 2026 г. Конкретна оферта може да излезе извън диапазона - нагоре при много сложен проект, надолу при много ограничен обхват. Но ако оферта е значително под долната граница - питайте какво не включва.",
      },
    },
    {
      "@type": "Question",
      name: "Защо рекламният бюджет към Google не е включен в цената на управлението?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Защото са две различни неща. Таксата за управление плащате на специалиста за труда му. Рекламният бюджет отива директно към Google. Ако агенция ги обедини в обща сума - не знаете колко работи за вас и колко отива за реклама. Разделянето е стандарт и признак за прозрачност.",
      },
    },
    {
      "@type": "Question",
      name: "Колко време отнема SEO да даде резултат?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "За нов или слабо оптимизиран сайт - минимум 3-6 месеца до първи измерими резултати. За сайт с добра съществуваща база - 2-3 месеца. SEO е дългосрочна инвестиция. Ако някой ви обещава позиция за 30 дни - лъже.",
      },
    },
    {
      "@type": "Question",
      name: "Защо социалните мрежи струват толкова, колкото SEO?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Защото и двете изискват редовен труд. SEO е технически и съдържателен. Социалните мрежи изискват визуално съдържание, копирайтинг, управление на коментари и стратегия. 150 EUR/месец означава шаблонно съдържание без стратегия. 400+ EUR означава реална работа с план и измерими цели.",
      },
    },
    {
      "@type": "Question",
      name: "Какво правя с резултата от калкулатора?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Използвайте го като ориентир. Оферта значително под долната граница означава, че нещо не е включено или работата е шаблонна. Оферта значително над горната граница изисква ясна обосновка - какво точно оправдава цената. И двете крайности са сигнал за разговор, не за подписване.",
      },
    },
  ],
};

const PRICE_BASE = {
  site:    { min: 400, max: 900,  oneTime: true,  label: "Изработка на сайт",    note: "WordPress/Next.js - дизайн, разработка, SEO основа", budgetMin: 0, budgetMax: 0 },
  seo:     { min: 200, max: 380,  oneTime: false, label: "SEO оптимизация",       note: "Технически одит, ключови думи, позиции", budgetMin: 0, budgetMax: 0 },
  gads:    { min: 100, max: 220,  oneTime: false, label: "Google Ads управление", note: "Само такса управление - бюджетът към Google е отделен", budgetMin: 150, budgetMax: 300 },
  social:  { min: 150, max: 300,  oneTime: false, label: "Социални мрежи",        note: "2-4 публикации/седм., управление на профили", budgetMin: 0, budgetMax: 0 },
  content: { min: 100, max: 200,  oneTime: false, label: "Съдържание / блог",     note: "2-4 SEO оптимизирани статии месечно", budgetMin: 0, budgetMax: 0 },
  email:   { min: 60,  max: 120,  oneTime: false, label: "Email маркетинг",       note: "Бюлетин + 1-2 кампании месечно", budgetMin: 0, budgetMax: 0 },
};

const TYPE_M = { local: 1, national: 1.4, ecommerce: 2.5, b2b: 1.3 };
const SIZE_M = { micro: 1, small: 1.5, medium: 2.8 };
const r50 = (n) => Math.round(n / 50) * 50;

const SERVICE_LIST = [
  { id: "site",    label: "Изработка на сайт (еднократно)" },
  { id: "seo",     label: "SEO оптимизация (месечно)" },
  { id: "gads",    label: "Google Ads - управление + препоръчителен бюджет (месечно)" },
  { id: "social",  label: "Социални мрежи (месечно)" },
  { id: "content", label: "Съдържание / блог (месечно)" },
  { id: "email",   label: "Email маркетинг (месечно)" },
];

const TYPE_LABELS = { local: "Локален", national: "Национален", ecommerce: "E-commerce", b2b: "B2B" };
const SIZE_LABELS  = { micro: "микро (1-5 души)", small: "малък (6-20 души)", medium: "среден (20+)" };

export default function KalkulatorDigitalenMarketing() {
  const [bizType, setBizType] = useState("local");
  const [bizSize, setBizSize] = useState("micro");
  const [selected, setSelected] = useState([]);
  const canvasRef = useRef(null);
  const wrapRef = useRef(null);
  const [canvasWidth, setCanvasWidth] = useState(800);

  const toggle = (id) =>
    setSelected((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const ro = new ResizeObserver(([entry]) => {
      const w = Math.round(entry.contentRect.width);
      if (w > 0) setCanvasWidth(w);
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    if (selected.length === 0) return;

    canvas.width = canvasWidth;
    const maxW = canvasWidth - 32;

    const tm = TYPE_M[bizType] || 1;
    const sm = SIZE_M[bizSize] || 1;

    const lines = [];
    let totOne = { min: 0, max: 0 };
    let totMon = { min: 0, max: 0 };
    let gadsBudget = null;

    selected.forEach((id) => {
      const b = PRICE_BASE[id];
      if (!b) return;
      const min = r50(b.min * tm * sm);
      const max = r50(b.max * tm * sm);
      lines.push({ label: b.label, min, max, oneTime: b.oneTime, note: b.note });
      if (b.oneTime) { totOne.min += min; totOne.max += max; }
      else { totMon.min += min; totMon.max += max; }
      if (id === "gads") {
        gadsBudget = { min: r50(b.budgetMin * tm * sm), max: r50(b.budgetMax * tm * sm) };
      }
    });

    const LH = 26;
    let numL = 3;
    numL += lines.length * 2;
    if (totOne.min > 0) numL += 1;
    if (totMon.min > 0) numL += 1;
    if (gadsBudget) numL += 2;
    numL += 3;
    canvas.height = numL * LH;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    let y = 26;

    ctx.font = "bold 14px Arial";
    ctx.fillStyle = "#2c3e50";
    ctx.fillText(
      `Примерна оценка - ${TYPE_LABELS[bizType]} бизнес, ${SIZE_LABELS[bizSize]}`,
      16, y, maxW
    );
    y += LH + 4;

    lines.forEach((line) => {
      const tag = line.oneTime ? "(еднократно)" : "(месечно)";
      ctx.font = "bold 14px Arial";
      ctx.fillStyle = "#2c3e50";
      ctx.fillText(`${line.label}: ${line.min}-${line.max} EUR ${tag}`, 16, y, maxW);
      y += LH - 4;
      ctx.font = "italic 12px Arial";
      ctx.fillStyle = "#7f8c8d";
      ctx.fillText(`   ${line.note}`, 16, y, maxW);
      y += LH + 2;
    });

    y += 4;
    ctx.strokeStyle = "#bdc3c7";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(16, y);
    ctx.lineTo(canvas.width - 16, y);
    ctx.stroke();
    y += LH;

    ctx.font = "bold 15px Arial";
    ctx.fillStyle = "#e67e22";
    if (totOne.min > 0) {
      ctx.fillText(`Общо еднократно: ${totOne.min}-${totOne.max} EUR`, 16, y, maxW);
      y += LH;
    }
    if (totMon.min > 0) {
      ctx.fillText(`Общо месечно: ${totMon.min}-${totMon.max} EUR/мес`, 16, y, maxW);
      y += LH;
    }
    if (gadsBudget) {
      y += 4;
      ctx.font = "13px Arial";
      ctx.fillStyle = "#8e44ad";
      ctx.fillText(`+ Препоръчителен Ads бюджет: ${gadsBudget.min}-${gadsBudget.max} EUR/мес`, 16, y, maxW);
      y += LH - 4;
      ctx.font = "italic 12px Arial";
      ctx.fillStyle = "#7f8c8d";
      ctx.fillText("   (тези пари отиват директно към Google, не към специалиста)", 16, y, maxW);
      y += LH;
    }

    y += 8;
    ctx.font = "italic bold 12px Arial";
    ctx.fillStyle = "#c0392b";
    ctx.fillText("Всичко над тези цени е необоснована претенция", 16, y, maxW);
    y += LH - 4;
    ctx.fillText("и нахален каприз!", 16, y, maxW);
  }, [selected, bizType, bizSize, canvasWidth]);

  return (
    <>
      <SeoHead
        title="Калкулатор за дигитален маркетинг - примерни цени"
        description="Примерни цени за дигитален маркетинг в България: изработка на сайт, SEO, Google Ads, социални мрежи. Реалистични диапазони, не агенционни обещания."
        keywords="калкулатор дигитален маркетинг, цени дигитален маркетинг, колко струва SEO, колко струва Google Ads, цена изработка сайт България"
        path="/kalkulator-digitalen-marketing"
        image="/og/kalkulator-digitalen-marketing.png"
        imageAlt="Калкулатор за дигитален маркетинг - примерни цени"
        type="article"
        publishedTime="2026-04-24T00:00:00+03:00"
        modifiedTime="2026-04-24T00:00:00+03:00"
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </SeoHead>

      <main className={styles.main} id="main-content">
        <section className={styles.heroBanner} aria-label="Калкулатор за дигитален маркетинг">
          <Image
            src="/kalkulator-digitalen-marketing.webp"
            alt="Калкулатор за дигитален маркетинг - примерни цени"
            fill
            sizes="100vw"
            priority
            fetchPriority="high"
            className={styles.heroImage}
          />
          <div
            className={styles.heroOverlay}
            style={{ background: "linear-gradient(180deg, rgba(8,12,26,0.78) 0%, rgba(8,12,26,0.88) 100%)" }}
          >
            <h1 style={{ textShadow: "0 2px 16px rgba(0,0,0,0.9), 0 0 40px rgba(0,0,0,0.7)" }}>
              Калкулатор за дигитален маркетинг
            </h1>
          </div>
        </section>

        <article className={styles.article}>

          {/* ── INTRO ── */}
          <section>
            <p>
              <strong>Автор:</strong> Иван Димитров |{" "}
              <strong>Публикувано:</strong>{" "}
              <time dateTime="2026-04-24">24 април 2026</time>
            </p>
            <p>
              <strong>Калкулаторът за дигитален маркетинг</strong> на тази страница не показва
              моите цени - показва реалистични пазарни диапазони, за да знаете какво е разумно
              и къде започват да ви баламосват. Цените в дигиталния маркетинг не са фиксирани
              числа. Зависят от нишата, конкуренцията, текущото техническо и съдържателно
              състояние на сайта, целевия пазар и реалния обхват на работата. Агенция, която
              дава точна цена преди одит, или не знае какво прави, или разчита, че вие не
              знаете.
            </p>
            <p>
              Диапазоните обаче имат конкретна стойност. Ако знаете, че SEO оптимизацията
              в България за малък бизнес струва между 200 и 800 EUR месечно, и получите оферта
              за 60 EUR - знаете, че нещо не е наред. Ако получите оферта за 2 000 EUR, знаете,
              че трябва да разберете точно за какво ги плащате и какъв е обхватът. Диапазонът
              не ви дава готов отговор - дава ви рамка за правилните въпроси.
            </p>
            <p>
              С калкулатора по-долу избирате типа и размера на бизнеса си и услугите, от
              които се интересувате. Получавате примерен диапазон &bdquo;от-до&ldquo; за всяка услуга
              поотделно, обща примерна еднократна сума и обща примерна месечна сума. Резултатът
              се показва само в графичен формат - числа в изображение са значително по-трудни
              за автоматично копиране и масово сравняване от ценови ботове, без да пречат на
              истинския читател.
            </p>
            <p>
              Калкулаторът не замества одита и не дава оферта. Дава нещо по-ценно - рамка за
              правилните въпроси. Бизнесът, който влиза в разговор с агенция с ясна представа
              какво е реалистично, получава по-добра оферта, по-малко продаване и по-малко
              изненади по-късно.
            </p>
          </section>

          {/* ── H2 #1 ── */}
          <section>
            <h2>Как работи калкулаторът</h2>
            <p>
              Изберете типа на бизнеса и размера от падащите менюта, след което отметнете
              услугите, за които искате примерна цена. Калкулаторът прилага пазарни множители -
              национален или e-commerce обхват изисква повече работа и следователно по-висок
              бюджет от локален бизнес. По-голям екип обикновено означава по-сложни процеси,
              повече целеви пазари и по-висок очакван обхват. Резултатът е диапазон, не оферта.
            </p>

            <p>
              Изберете типа и размера на бизнеса от двете падащи менюта. Отметнете услугите,
              за които искате примерна цена. Резултатът ще се появи като изображение под
              списъка - числа в графичен формат, не текст.
            </p>

            <div ref={wrapRef} style={cs.wrap}>
              <div style={cs.row}>
                <div style={cs.field}>
                  <label style={cs.label} htmlFor="biz-type">Тип бизнес</label>
                  <select
                    id="biz-type"
                    style={cs.select}
                    value={bizType}
                    onChange={(e) => setBizType(e.target.value)}
                  >
                    <option value="local">Локален (1 град)</option>
                    <option value="national">Национален</option>
                    <option value="ecommerce">E-commerce</option>
                    <option value="b2b">B2B услуги</option>
                  </select>
                </div>
                <div style={cs.field}>
                  <label style={cs.label} htmlFor="biz-size">Размер</label>
                  <select
                    id="biz-size"
                    style={cs.select}
                    value={bizSize}
                    onChange={(e) => setBizSize(e.target.value)}
                  >
                    <option value="micro">Микро (1-5 души)</option>
                    <option value="small">Малък (6-20 души)</option>
                    <option value="medium">Среден (20+ души)</option>
                  </select>
                </div>
              </div>

              <p style={cs.hint}>Изберете услугите, за които искате примерна цена:</p>
              <div style={cs.checkList}>
                {SERVICE_LIST.map((svc) => (
                  <label key={svc.id} style={cs.checkLabel}>
                    <input
                      type="checkbox"
                      checked={selected.includes(svc.id)}
                      onChange={() => toggle(svc.id)}
                      style={cs.checkbox}
                    />
                    {svc.label}
                  </label>
                ))}
              </div>

              {selected.length === 0 ? (
                <p style={cs.placeholder}>Изберете поне една услуга, за да видите диапазона...</p>
              ) : (
                <canvas
                  ref={canvasRef}
                  width={canvasWidth}
                  height={60}
                  style={cs.canvas}
                  aria-label="Примерни цени за избраните услуги"
                />
              )}

            </div>
          </section>

          {/* ── H2 #2 ── */}
          <section>
            <h2>Защо цените в дигиталния маркетинг са диапазони, а не фиксирани числа</h2>
            <p>
              Зад всяка услуга стои различно количество работа в зависимост от проекта.
              Местна пекарна с 5 ключови думи и 20 местни конкурента не изисква същата SEO
              работа като национален e-commerce с 500 продукта и 5 000 конкурентни URL-а.
              Агенция, която ви дава точна цена преди да е видяла сайта ви, не знае какво
              прави - или не й пука.
            </p>

            <h3>Какво влияе на цената на изработка на сайт</h3>
            <p>
              Броят на страниците, нивото на функционалност и изборът между готов шаблон
              и custom дизайн определят цената. WordPress сайт с готова тема и 5 страници
              може да е готов за 400-800 EUR. Custom дизайн с уникална визия и Next.js
              разработка излиза 2 000-8 000+ EUR. Разликата не е в логото на агенцията -
              тя е в реалния брой часове работа и нивото на технически решения. За пълния
              анализ на процеса и разходите вижте{" "}
              <Link href="/izrabotka-na-sait">
                <strong>изработка на сайт - стъпки, технологии и цена</strong>
              </Link>.
            </p>
            <p>Диапазон: 400-4 000 EUR (еднократно).</p>

            <h3>Какво влияе на цената на SEO</h3>
            <p>
              Конкурентността на нишата е основният фактор. SEO в ниша с 10 конкурентни
              домейна е по-лесно от SEO в ниша с 2 000. Текущото техническо състояние на
              сайта добавя обем - сайт с 200 грешки в Search Console изисква повече
              начална работа от нулата. Броят на целевите ключови думи определя нужното
              съдържание. Добра SEO работа е практически невъзможна под 200 EUR месечно
              - под тази граница плащате за отчет, не за реален труд. Пълното ръководство
              е в{" "}
              <Link href="/seo-optimizaciya-na-ueb-sait">
                <strong>SEO оптимизация на уеб сайт - цени, процес и стратегия</strong>
              </Link>.
            </p>
            <p>Диапазон: 200-800 EUR/месец.</p>

            <h3>Какво влияе на цената на Google Ads</h3>
            <p>
              Google Ads се разделя задължително на две суми: таксата за управление
              (плащате на специалиста за труда му) и рекламния бюджет (отива директно
              към Google за кликове). Таксата за управление покрива настройка на
              кампаниите, оптимизация на наддаването, A/B тестове на рекламни текстове
              и периодични отчети. Рекламният бюджет е колко пари харчите за реален
              трафик. За малък бизнес в България - минимум 150-300 EUR месечно рекламен
              бюджет, за да има достатъчно данни за смислена оптимизация. Под тази
              граница кампанията просто няма трафик за оптимизация. Логиката и
              разходите са разяснени подробно в{" "}
              <Link href="/google-ads-reklama">
                <strong>реклама в Гугъл - от кликове към продажби</strong>
              </Link>.
            </p>
            <p>
              Управление: 100-300 EUR/месец. Препоръчителен рекламен бюджет: 150-500
              EUR/месец за малък бизнес.
            </p>

            <h3>Какво влияе на цената на социалните мрежи</h3>
            <p>
              Броят на управляваните мрежи, честотата на публикациите и дали включва
              платена реклама в социалните медии - това са трите основни фактора.
              Акаунт в Instagram с 3 публикации седмично и отговори на коментари е едно.
              Три мрежи с видео съдържание, brand stories и платени кампании е съвсем
              друго. 150 EUR/месец покрива шаблонно съдържание в 1-2 мрежи без стратегия
              и без измеримо влияние върху бизнеса. 500 EUR/месец е реална работа с
              план, последователен brand voice и цели, обвързани с резултати.
            </p>
            <p>Диапазон: 150-500 EUR/месец.</p>
          </section>

          {/* ── H2 #3 ── */}
          <section>
            <h2>Червени флагове - кога цените в офертата ви алармират</h2>
            <p>
              Пазарът на дигитален маркетинг в България е пълен с оферти, проектирани да
              изглеждат атрактивно, но да доставят минимум. Ето конкретните сигнали, при
              които трябва да зададете допълнителни въпроси - или да потърсите друг
              доставчик.
            </p>

            <h3>&bdquo;Всичко за 100 EUR/месец&ldquo;</h3>
            <p>
              Невъзможно. Един час труд на добър специалист по дигитален маркетинг в
              България струва 30-60 EUR. За 100 EUR месечно получавате максимум 2-3 часа
              работа. Сайт, SEO и социални мрежи за 2 часа месечно е математически
              невъзможно да функционират. Реалното следствие: шаблонно съдържание, копирано
              от конкуренти, нула стратегия, нула оптимизация и числа в месечния отчет,
              които не се отразяват в реален трафик или запитвания.
            </p>

            <h3>&bdquo;Гарантираме първо място в Google за 1 месец&ldquo;</h3>
            <p>
              Google официално забранява такива гаранции и ги обозначава като измамна
              практика в собствените си насоки. Никой - без изключение - не може да
              гарантира конкретна позиция в органичното търсене. Позицията зависи от
              алгоритъм с над 200 фактора, поведението на конкурентите и реалните заявки
              на потребителите - нито един от тях не е под контрола на агенцията.
              Агенция, която дава такава гаранция, или не разбира как работи Google,
              или разчита, че вие не разбирате.
            </p>

            <h3>&bdquo;Обща сума за всичко, без разделяне&ldquo;</h3>
            <p>
              При Google Ads таксата за управление и рекламният бюджет трябва да са ясно
              разделени в офертата. Ако агенцията ви казва &bdquo;1 500 EUR за Google Ads&ldquo; без
              да уточнява колко е управлението и колко отива директно към Google - не
              знаете за какво точно плащате. Може да се окаже, че 1 200 EUR отиват за
              реклама и 300 за управление. Може и обратното. Прозрачното разделяне е
              стандарт в{" "}
              <Link href="/google-ads-reklama">
                <strong>управлението на Google Ads кампании</strong>
              </Link>{" "}
              и е един от основните признаци за сериозен партньор.
            </p>

            <h3>&bdquo;Фиксирана цена без одит на сайта ви&ldquo;</h3>
            <p>
              Агенция, която дава цена за SEO или за изработка преди да е погледнала
              сайта ви, не знае какво прави - или не й пука. SEO цената зависи пряко от
              техническото и съдържателното състояние на сайта, конкуренцията в нишата
              и текущите позиции. Без одит числото е произволно. Разумната агенция прави
              безплатен технически одит, след което дава конкретна оферта с ясен обхват
              и измерими цели.
            </p>
          </section>

          {/* ── H2 #4 ── */}
          <section>
            <h2>Какво не показва калкулаторът</h2>
            <p>
              Калкулаторът показва примерни разходи. Но дигиталният маркетинг не се
              измерва само в разходи - реалните резултати зависят от фактори, които нито
              един инструмент не може да изчисли предварително без познаване на конкретния
              бизнес.
            </p>

            <h3>ROI прогноза</h3>
            <p>
              Калкулаторът показва разходи, не приходи. Очакваната възвращаемост зависи
              от маржа на продукта или услугата, средната стойност на клиент (LTV),
              процента на конверсия на сайта и редица специфики на бизнес модела. Тези
              числа са различни за всеки бизнес и не могат да се смятат универсално.
              ROI прогноза, базирана само на маркетинг разходи без познаване на
              приходната страна, е по-скоро фантастика, отколкото анализ.
            </p>

            <h3>Срокове за резултат</h3>
            <p>
              SEO изисква минимум 3-6 месеца до първи измерими резултати за нов или слабо
              оптимизиран сайт. Google Ads - 1-3 месеца до стабилизиране на кампаниите
              и намиране на работещите комбинации от ключови думи, оферти и рекламни
              текстове. Социалните мрежи - 2-4 месеца до изграждане на ангажирана
              аудитория, която реагира на съдържанието. Тези срокове не зависят от
              бюджета - зависят от пазара, конкуренцията и качеството на изпълнението.
            </p>

            <h3>Дали ви трябват всички канали</h3>
            <p>
              Не ви трябват. Честно. Някои бизнеси работят отлично само със сайт и
              Google Ads. Други - само със сайт, SEO и имейл маркетинг. B2B бизнесите
              рядко имат нужда от активно Instagram присъствие. E-commerce магазините
              рядко се нуждаят от LinkedIn. Калкулаторът смята цените за всичко, което
              маркирате, но не избира стратегията вместо вас. За конкретни аргументи
              защо реклама без SEO основа е изхвърлени пари, прочетете{" "}
              <Link href="/ads-without-seo">
                <strong>защо реклама без SEO прахосва бюджета</strong>
              </Link>.
            </p>
          </section>

          {/* ── FAQ ── */}
          <section>
            <h2>Често задавани въпроси</h2>

            <h3>Защо не показвате точни цени, а диапазони?</h3>
            <p>
              Цената на дигиталния маркетинг зависи от десетки фактора - конкурентност на
              нишата, текущо техническо и съдържателно състояние на сайта, брой целеви
              ключови думи, пазар. Точна цена преди одит е или измислена, или прекалено
              висока, за да покрие неизвестните. Диапазоните дават реалистична рамка за
              ориентация на бюджета и за правилните въпроси при разговор с агенции.
            </p>

            <h3>Мога ли да се доверя на тези числа?</h3>
            <p>
              Диапазоните са базирани на реални оферти и пазарни нива в България към
              2026 г. Конкретна оферта може да излезе извън диапазона - нагоре при много
              сложен проект с висока конкурентност, надолу при много ограничен обхват и
              прост пазар. Но ако оферта е значително под долната граница - питайте
              конкретно какво не включва.
            </p>

            <h3>Защо рекламният бюджет към Google не е включен в цената на управлението?</h3>
            <p>
              Защото са две коренно различни неща. Таксата за управление плащате на
              специалиста за времето и труда му. Рекламният бюджет отива директно към
              Google и се използва за показване на рекламите ви. Ако агенция ги обедини
              в обща сума без разбивка - не знаете колко работи за вас и колко харчи
              за реклама. Разделянето е стандарт и основен признак за прозрачност.
            </p>

            <h3>Колко време отнема SEO да даде резултат според калкулатора?</h3>
            <p>
              Калкулаторът показва разходи, не срокове. Но реалистичната рамка е:
              3-6 месеца за нов или слабо оптимизиран сайт, 2-3 месеца за сайт с
              добра съществуваща SEO база. SEO е дългосрочна инвестиция с нарастваща
              стойност. Ако някой ви обещава конкретна позиция за 30 дни - лъже.
            </p>

            <h3>Защо социалните мрежи струват толкова, колкото SEO?</h3>
            <p>
              Защото и двете изискват редовен квалифициран труд. SEO е технически и
              съдържателен. Социалните мрежи изискват визуално съдържание, копирайтинг,
              управление на коментари, paid strategy и последователен brand voice.
              150 EUR/месец за социални мрежи означава шаблонно съдържание без измерими
              цели. 400+ EUR означава реална работа с план. Цената отразява обхвата,
              не важността на канала.
            </p>

            <h3>Какво правя с резултата от калкулатора?</h3>
            <p>
              Това са пазарните нива. Оферта значително под долната граница означава
              едно от две: нещо важно не е включено, или работата е шаблонна без
              реална стратегия. Оферта значително над горната граница изисква ясна
              обосновка - какво конкретно оправдава разликата. И двете крайности не
              са автоматично лоши, но са сигнал да зададете правилните въпроси преди
              да подпишете.
            </p>
          </section>

          <RelatedPosts
            currentHref="/kalkulator-digitalen-marketing"
            styles={styles}
            hrefs={[
              "/izrabotka-na-sait",
              "/seo-optimizaciya-na-ueb-sait",
              "/google-ads-reklama",
              "/ads-without-seo",
            ]}
          />
          <ShareButtons
            path="/kalkulator-digitalen-marketing"
            title="Калкулатор за дигитален маркетинг - примерни цени"
            styles={styles}
          />
          <PostNavigation currentHref="/kalkulator-digitalen-marketing" styles={styles} />
        </article>
      </main>
    </>
  );
}

const cs = {
  wrap: {
    background: "#f8f9fa",
    border: "1px solid #e0e0e0",
    borderRadius: "12px",
    padding: "24px",
    margin: "24px 0",
  },
  row: {
    display: "flex",
    gap: "20px",
    flexWrap: "wrap",
    marginBottom: "20px",
  },
  field: {
    display: "flex",
    flexDirection: "column",
    gap: "6px",
    flex: "1 1 200px",
  },
  label: {
    fontWeight: "bold",
    fontSize: "14px",
    color: "#2c3e50",
  },
  select: {
    padding: "10px 14px",
    border: "2px solid #ddd",
    borderRadius: "8px",
    fontSize: "14px",
    background: "#fff",
    cursor: "pointer",
  },
  hint: {
    fontWeight: "bold",
    fontSize: "14px",
    color: "#2c3e50",
    margin: "0 0 12px",
  },
  checkList: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    marginBottom: "20px",
  },
  checkLabel: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    fontSize: "14px",
    cursor: "pointer",
    color: "#2c3e50",
  },
  checkbox: {
    width: "18px",
    height: "18px",
    cursor: "pointer",
    accentColor: "#1abc9c",
  },
  canvas: {
    width: "100%",
    border: "2px dashed #bdc3c7",
    borderRadius: "8px",
    backgroundColor: "#fff",
    display: "block",
    marginBottom: "16px",
  },
  placeholder: {
    fontSize: "16px",
    color: "#7f8c8d",
    textAlign: "center",
    padding: "20px 16px",
    border: "2px dashed #bdc3c7",
    borderRadius: "8px",
    backgroundColor: "#fff",
    margin: "0 0 16px",
  },
};
