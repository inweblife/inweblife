const SITE_URL = "https://inweblife.vercel.app";

const toAbsoluteUrl = (path) => `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;

const ShareButtons = ({ path, title, styles }) => {
  const articleUrl = toAbsoluteUrl(path);
  const encodedUrl = encodeURIComponent(articleUrl);
  const encodedTitle = encodeURIComponent(title);

  const links = [
    {
      name: "LinkedIn",
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    },
    {
      name: "X",
      href: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
    },
    {
      name: "Facebook",
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    },
  ];

  return (
    <section className={styles.shareSection} aria-label="Share article">
      <p className={styles.shareLabel}>Share this article:</p>
      <div className={styles.shareList}>
        {links.map((link) => (
          <a
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.shareButton}
            aria-label={`Share on ${link.name}`}
          >
            {link.name}
          </a>
        ))}
      </div>
    </section>
  );
};

export default ShareButtons;
