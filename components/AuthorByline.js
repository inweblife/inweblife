import Image from "next/image";
import Link from "next/link";
import portrait from "../public/ivan.webp";
import { AUTHOR } from "../lib/author";
import { posts } from "../lib/posts";
import { formatBgDate, isUpdated } from "../lib/postMeta";

// Датите идват от lib/posts.js, за да съвпадат с картичките, sitemap.xml и RSS.
const AuthorByline = ({ href, styles }) => {
  const post = posts.find((p) => p.href === href);

  return (
    <div className={styles.author}>
      <Link href={AUTHOR.href} className={styles.authorPhotoLink} aria-label={`За автора: ${AUTHOR.name}`}>
        <Image src={portrait} alt={AUTHOR.name} sizes="56px" className={styles.authorPhoto} />
      </Link>
      <div className={styles.authorText}>
        <p className={styles.authorName}>
          <Link href={AUTHOR.href}>{AUTHOR.name}</Link>
        </p>
        <p className={styles.authorMeta}>
          {AUTHOR.role}
          {post && (
            <>
              {" · "}
              Публикувано: <time dateTime={post.published}>{formatBgDate(post.published)}</time>
              {isUpdated(post) && (
                <>
                  {" · "}
                  Обновено: <time dateTime={post.modified}>{formatBgDate(post.modified)}</time>
                </>
              )}
            </>
          )}
        </p>
      </div>
    </div>
  );
};

export default AuthorByline;
