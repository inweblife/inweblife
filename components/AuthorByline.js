import Image from "next/image";
import Link from "next/link";
import portrait from "../public/ivan.webp";

const AuthorByline = ({ published, publishedLabel, styles }) => (
  <div className={styles.author}>
    <Link href="/about" className={styles.authorPhotoLink} aria-label="За автора: Иван Димитров">
      <Image
        src={portrait}
        alt="Иван Димитров"
        sizes="64px"
        className={styles.authorPhoto}
      />
    </Link>
    <div className={styles.authorText}>
      <p className={styles.authorName}>
        <Link href="/about">Иван Димитров</Link>
      </p>
      <p className={styles.authorMeta}>
        Уеб разработчик, SEO и Google Ads · <time dateTime={published}>{publishedLabel}</time>
      </p>
    </div>
  </div>
);

export default AuthorByline;
