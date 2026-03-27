import { SITE_URL } from "../lib/config";

const toAbsoluteUrl = (path) => `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;

const ShareButtons = ({ path, title, styles }) => {
  const articleUrl = toAbsoluteUrl(path);
  const encodedUrl = encodeURIComponent(articleUrl);
  const encodedTitle = encodeURIComponent(title);

  const links = [
    {
      name: "LinkedIn",
      href: `https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}`,
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path d="M6.94 8.5A1.56 1.56 0 1 1 6.94 5.38a1.56 1.56 0 0 1 0 3.12ZM8.3 10H5.6v8.4h2.7V10Zm4.3 0H10v8.4h2.6v-4.5c0-1.2.23-2.3 1.72-2.3 1.47 0 1.49 1.37 1.49 2.38v4.42h2.7v-4.97c0-2.44-.53-4.32-3.38-4.32-1.37 0-2.3.75-2.69 1.46H12.6V10Z" />
        </svg>
      ),
    },
    {
      name: "X",
      href: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path d="M18.9 3h2.93l-6.4 7.32L23 21h-5.86l-4.6-6.01L7.27 21H4.33l6.84-7.82L1 3h6.01l4.16 5.5L18.9 3Zm-1.03 16.2h1.62L6.13 4.72H4.4L17.87 19.2Z" />
        </svg>
      ),
    },
    {
      name: "Facebook",
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path d="M13.5 21v-7h2.35l.35-2.73H13.5v-1.74c0-.79.22-1.33 1.35-1.33h1.45V5.75c-.25-.03-1.12-.1-2.12-.1-2.1 0-3.53 1.28-3.53 3.64v1.98H8.3V14h2.35v7h2.85Z" />
        </svg>
      ),
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
            <span className={styles.shareButtonIcon} data-brand={link.name} aria-hidden="true">
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
