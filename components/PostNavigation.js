import Link from "next/link";

const posts = [
  { href: "/modern-site", title: "Как се прави модерен сайт" },
  { href: "/seo-fashion", title: "В ерата на смартфоните" },
  { href: "/powerful-site", title: "Създайте мощен сайт" },
  { href: "/how-to-make-site", title: "Как се прави сайт" },
  { href: "/telemarketing-seo", title: "Телемаркетингът – последното убежище на слабия SEO специалист" },
  { href: "/ai-seo-lie", title: "Голямата лъжа за SEO оптимизацията за AI" },
  { href: "/website-and-google-ads", title: "Изработка на сайт и реклама в Гугъл" },
];

const PostNavigation = ({ currentHref, styles }) => {
  const index = posts.findIndex((post) => post.href === currentHref);
  if (index === -1) {
    return null;
  }

  const prevPost = posts[index - 1];
  const nextPost = posts[index + 1];

  return (
    <nav className={styles.next} aria-label="Навигация между публикации">
      {prevPost ? (
        <Link href={prevPost.href} aria-label={`Предишна публикация: ${prevPost.title}`}>
          ← <strong>{prevPost.title}</strong>
        </Link>
      ) : (
        <Link href="/blog" aria-label="Към блога">
          ← <strong>Блог</strong>
        </Link>
      )}

      {nextPost ? (
        <Link href={nextPost.href} aria-label={`Следваща публикация: ${nextPost.title}`}>
          <strong>{nextPost.title}</strong> →
        </Link>
      ) : (
        <Link href="/blog" aria-label="Към блога">
          <strong>Блог</strong> →
        </Link>
      )}
    </nav>
  );
};

export default PostNavigation;
