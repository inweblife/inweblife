import Head from "next/head";
import { SITE_URL } from "../lib/config";
const SITE_NAME = "inweblife";
const PERSON_NAME = "Иван Димитров";
const LOGO_URL = `${SITE_URL}/favicon.webp`;
const EXPERTISE_LABELS = [
  "High-Budget PPC Strategist",
  "Semantic SEO Expert",
  "опитен Full-Stack Developer",
];

const toAbsoluteUrl = (path = "/") => {
  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
};

const SeoHead = ({
  title,
  description,
  keywords = `${PERSON_NAME}, PPC експерт, SEO експерт, Full-Stack Developer, JavaScript Developer, WordPress Developer, Next.js специалист, topical authority, semantic clusters, pillar content`,
  path = "/",
  image = "/working.webp",
  imageWidth = 1200,
  imageHeight = 630,
  imageAlt = "inweblife",
  type = "website",
  robots = "index, follow, max-image-preview:large",
  publishedTime = undefined,
  modifiedTime = undefined,
  children = null,
}) => {
  const canonicalUrl = toAbsoluteUrl(path);
  const ogImageUrl = toAbsoluteUrl(image);
  const lowerImageUrl = ogImageUrl.toLowerCase();
  const ogImageType = lowerImageUrl.endsWith(".png")
    ? "image/png"
    : lowerImageUrl.endsWith(".jpg") || lowerImageUrl.endsWith(".jpeg")
      ? "image/jpeg"
      : lowerImageUrl.endsWith(".svg")
        ? "image/svg+xml"
        : "image/webp";
  const isArticle = type === "article";
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: PERSON_NAME,
    jobTitle: EXPERTISE_LABELS,
    knowsAbout: [
      "High-Budget PPC Strategy",
      "Semantic SEO",
      "Full-Stack Development",
      "Technical SEO",
      "Web Architecture",
    ],
    description: `${PERSON_NAME} е ${EXPERTISE_LABELS[0]}, ${EXPERTISE_LABELS[1]} и ${EXPERTISE_LABELS[2]}.`,
    url: SITE_URL,
  };
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: LOGO_URL,
    founder: {
      "@type": "Person",
      name: PERSON_NAME,
    },
  };

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="author" content={PERSON_NAME} />
      <meta name="keywords" content={keywords} />
      <meta
        name="expertise"
        content={`${PERSON_NAME} | ${EXPERTISE_LABELS[0]} | ${EXPERTISE_LABELS[1]} | ${EXPERTISE_LABELS[2]}`}
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content={robots} />
      <meta name="theme-color" content="#101828" />

      <link rel="icon" href="/favicon.webp" />
      <link rel="canonical" href={canonicalUrl} />
      <link rel="alternate" type="application/rss+xml" title={SITE_NAME} href={`${SITE_URL}/rss.xml`} />

      <meta property="og:locale" content="bg_BG" />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImageUrl} />
      <meta property="og:image:secure_url" content={ogImageUrl} />
      <meta property="og:image:type" content={ogImageType} />
      <meta property="og:image:width" content={String(imageWidth)} />
      <meta property="og:image:height" content={String(imageHeight)} />
      <meta property="og:image:alt" content={imageAlt} />
      {isArticle && publishedTime ? (
        <meta property="article:published_time" content={publishedTime} />
      ) : null}
      {isArticle && modifiedTime ? (
        <meta property="article:modified_time" content={modifiedTime} />
      ) : null}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@inweblife" />
      <meta name="twitter:creator" content="@inweblife" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImageUrl} />
      <meta name="twitter:image:alt" content={imageAlt} />
      <meta name="format-detection" content="telephone=no" />
      <link rel="alternate" hrefLang="bg-BG" href={canonicalUrl} />
      <link rel="alternate" hrefLang="x-default" href={canonicalUrl} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />

      {children}
    </Head>
  );
};

export default SeoHead;
