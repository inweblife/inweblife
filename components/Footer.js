const Footer = () => {
  return (
    <footer>
      <div className="footerInner">
        <nav aria-label="Социални профили">
          <ul className="menuList">
            <li>
              <a href="https://twitter.com/inweblife" target="_blank" rel="noopener noreferrer">
                Twitter
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/inweblife/" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="https://github.com/inweblife" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </li>
          </ul>
        </nav>
        <small>Copyright {new Date().getFullYear()} inweblife - животът в мрежата</small>
      </div>
    </footer>
  );
};

export default Footer;
