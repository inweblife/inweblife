import Link from "next/link";

const Navbar = () => {
  return (
    <header>
      <div>
        <h3 className="title">inweblife</h3>
      </div>
      <div>
        <ul className="menu_list">
          <li>
            <Link href="/">Начало</Link> |
          </li>
          <li>
            <Link href="/about">За мен</Link> |
          </li>
          <li>
            <Link href="/blog">Блог</Link> 
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
