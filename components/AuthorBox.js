import Image from "next/image";
import Link from "next/link";
import portrait from "../public/ivan.webp";
import { AUTHOR } from "../lib/author";

const AuthorBox = ({ styles }) => (
  <aside className={styles.authorBox} aria-labelledby="author-box-title">
    <Link href={AUTHOR.href} className={styles.authorBoxPhotoLink} tabIndex={-1} aria-hidden="true">
      <Image src={portrait} alt="" sizes="96px" className={styles.authorPhoto} />
    </Link>
    <div className={styles.authorBoxText}>
      <p className={styles.authorBoxLabel}>За автора</p>
      <p id="author-box-title" className={styles.authorBoxName}>
        <Link href={AUTHOR.href}>{AUTHOR.name}</Link>
      </p>
      <p>{AUTHOR.bio}</p>
      <Link href={AUTHOR.href} className={styles.authorBoxMore}>
        Повече за мен →
      </Link>
    </div>
  </aside>
);

export default AuthorBox;
