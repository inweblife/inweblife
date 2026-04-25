import Link from "next/link";
import { posts } from "../lib/posts";

const RelatedPosts = ({ currentHref, styles, hrefs, exclude }) => {
  const excludeSet = new Set([currentHref, ...(exclude || [])]);
  const related = hrefs
    ? hrefs.map((href) => posts.find((p) => p.href === href)).filter(Boolean)
    : posts.filter((p) => !excludeSet.has(p.href)).slice(0, 3);

  if (related.length === 0) return null;

  return (
    <section className={styles.relatedSection} aria-labelledby="related-posts-title">
      <h2 id="related-posts-title" className={styles.relatedTitle}>Свързани статии</h2>
      <ul className={styles.relatedList}>
        {related.map((post) => (
          <li key={post.href}>
            <Link href={post.href} className={styles.relatedLink}>
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default RelatedPosts;
