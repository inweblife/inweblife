const TableOfContents = ({ items, styles }) => {
  return (
    <nav className={styles.toc} aria-label="Съдържание">
      <p className={styles.tocTitle}>Съдържание</p>
      <ol className={styles.tocList}>
        {items.map((item) => (
          <li key={item.id}>
            <a href={`#${item.id}`}>{item.label}</a>
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default TableOfContents;
