import Link from "next/link";

const Navbar = () => {
  return (
    <header className="siteHeader">
      <div className="topBar">
        <Link href="/" className="siteTitle">
          inweblife
        </Link>
        <nav aria-label="Основна навигация">
          <ul className="menuList">
            <li>
              <Link href="/">Начало</Link>
            </li>
            <li>
              <Link href="/about">За мен</Link>
            </li>
            <li>
              <Link href="/blog">Блог</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
