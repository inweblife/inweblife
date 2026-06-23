import Link from "next/link";

const Breadcrumb = ({ title, styles }) => {
  return (
    <nav className={styles.breadcrumb} aria-label="Навигация">
      <ol className={styles.breadcrumbList}>
        <li>
          <Link href="/">Начало</Link>
        </li>
        <li>
          <Link href="/blog">Блог</Link>
        </li>
        <li aria-current="page">{title}</li>
      </ol>
    </nav>
  );
};

export default Breadcrumb;
