import Link from "next/link";
import { posts } from "../lib/posts";

const RelatedPosts = ({ currentHref, styles }) => {
  const related = posts.filter((p) => p.href !== currentHref).slice(0, 3);

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
