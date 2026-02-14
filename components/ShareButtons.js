const SITE_URL = "https://inweblife.vercel.app";

const toAbsoluteUrl = (path) => `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;

const ShareButtons = ({ path, title, styles }) => {
  const articleUrl = toAbsoluteUrl(path);
  const encodedUrl = encodeURIComponent(articleUrl);
  const encodedTitle = encodeURIComponent(title);

  const links = [
    {
      name: "LinkedIn",
      icon: "in",
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    },
    {
      name: "X",
      icon: "X",
      href: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
    },
    {
      name: "Facebook",
      icon: "f",
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    },
  ];

  return (
    <section className={styles.shareSection} aria-label="Споделяне на статия">
      <p className={styles.shareLabel}>Споделете в:</p>
      <div className={styles.shareList}>
        {links.map((link) => (
          <a
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.shareButton}
            aria-label={`Споделете в ${link.name}`}
          >
            <span className={styles.shareButtonIcon} aria-hidden="true">
              {link.icon}
            </span>
            <span>{link.name}</span>
          </a>
        ))}
      </div>
    </section>
  );
};

export default ShareButtons;
