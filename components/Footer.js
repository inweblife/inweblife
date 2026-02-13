const Footer = () => {
  return (
    <footer>
      <nav aria-label="Социални профили">
        <ul className="menuList">
          <li>
            <a href="https://twitter.com/inweblife" target="_blank" rel="noreferrer">
              Twitter
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/inweblife/" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </li>
          <li>
            <a href="https://github.com/inweblife" target="_blank" rel="noreferrer">
              GitHub
            </a>
          </li>
        </ul>
      </nav>
      <small>
        Copyright {new Date().getFullYear()} inweblife - животът в мрежата
      </small>
    </footer>
  );
};

export default Footer;
