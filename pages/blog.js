import Image from "next/image";
import Link from "next/link";
import SeoHead from "../components/SeoHead";

import styles from "../styles/Blog.module.css";
import { SITE_URL } from "../lib/config";
import { posts } from "../lib/posts";

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Начало", item: `${SITE_URL}/` },
    { "@type": "ListItem", position: 2, name: "Блог", item: `${SITE_URL}/blog` },
  ],
};
const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Блог | inweblife",
  url: `${SITE_URL}/blog`,
  inLanguage: "bg-BG",
  description:
    "Блог с практически статии за SEO, PPC, техническа архитектура, вътрешна свързаност и AI-ready съдържание.",
  isPartOf: {
    "@type": "WebSite",
    name: "inweblife",
    url: `${SITE_URL}/`,
  },
};


const Blog = () => {
  return (
    <>
      <SeoHead
        title="Блог за SEO оптимизация и Google Ads | inweblife"
        description="Статии за SEO оптимизация, Google Ads стратегии, уеб разработка и дигитален маркетинг от Иван Димитров."
        keywords="SEO блог, PPC стратегии, Next.js специалист, JavaScript Developer, WordPress Developer, semantic clusters, pillar content, topical authority, technical SEO"
        path="/blog"
        image="/og/blog.png"
        imageAlt="Блог страница с подбрани статии за SEO и дигитален маркетинг"
        type="website"
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
        />
      </SeoHead>

      <main className={styles.main} id="main-content">
        <section className={styles.heroBanner} aria-label="Блог хедър">
          <Image
            src="/blog.webp"
            alt="Блог страница с подбрани статии за SEO и дигитален маркетинг"
            fill
            sizes="100vw"
            priority
            fetchPriority="high"
            className={styles.heroImage}
          />
          <div className={styles.heroOverlay}>
            <h1 className={styles.heading}>Блог на PPC Експерт, SEO Архитект и Full-Stack Developer</h1>
          </div>
        </section>

        <section className={styles.intro} aria-label="Въведение към блога">
          <p>
            Тук публикувам практически насоки за{" "}
            <Link href="/how-to-make-site">
              <strong>изграждане на сайт</strong>
            </Link>
            , който е едновременно
            технически стабилен, ясен за потребителя и разбираем за търсачките. Фокусът е върху
            реални процеси, които носят дългосрочен резултат, а не върху временни тактики.
          </p>
          <p>
            Статиите обхващат теми като семантична структура, mobile-first подход, оптимизация и
            тематичен авторитет. Ако искаш сайт, който расте органично и подкрепя бизнес целите,
            започни от материалите по-долу.
          </p>
        </section>

        <section className={styles.grid} aria-label="Списък със статии">
          {posts.map((post) => (
            <Link
              key={post.href}
              href={post.href}
              className={styles.cardLink}
              aria-label={post.title}
            >
              <article className={styles.card}>
                <div className={styles.imageFrame}>
                  <Image
                    src={post.image}
                    alt={post.alt}
                    width={780}
                    height={410}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className={styles.image}
                  />
                </div>
                <h2>{post.title}</h2>
                <p>{post.summary}</p>
                <span className={styles.readMore}>Виж още →</span>
              </article>
            </Link>
          ))}
        </section>
      </main>
    </>
  );
};

export default Blog;
