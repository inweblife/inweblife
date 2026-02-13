import Head from "next/head";

const SITE_URL = "https://inweblife.vercel.app";
const SITE_NAME = "inweblife";

const toAbsoluteUrl = (path = "/") => {
  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
};

const SeoHead = ({
  title,
  description,
  path = "/",
  image = "/working.webp",
  imageWidth = 1200,
  imageHeight = 630,
  imageAlt = "inweblife",
  type = "website",
  robots = "index, follow, max-image-preview:large",
  children = null,
}) => {
  const canonicalUrl = toAbsoluteUrl(path);
  const ogImageUrl = toAbsoluteUrl(image);

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="author" content="Иван Димитров" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content={robots} />
      <meta name="theme-color" content="#101828" />

      <link rel="icon" href="/favicon.webp" />
      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:locale" content="bg_BG" />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImageUrl} />
      <meta property="og:image:width" content={String(imageWidth)} />
      <meta property="og:image:height" content={String(imageHeight)} />
      <meta property="og:image:alt" content={imageAlt} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@inweblife" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImageUrl} />
      <meta name="twitter:image:alt" content={imageAlt} />

      {children}
    </Head>
  );
};

export default SeoHead;
