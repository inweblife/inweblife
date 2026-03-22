const Footer = () => {
  return (
    <footer>
      <div className="footerInner">
        <nav aria-label="Социални профили">
          <ul className="socialList">
            <li>
              <a
                className="socialLink"
                href="https://twitter.com/inweblife"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter)"
              >
                <svg className="socialIcon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <path
                    fill="currentColor"
                    d="M18.244 2H21.5l-7.115 8.13L22.75 22h-6.63l-5.19-6.792L4.99 22H1.73l7.61-8.697L1.25 2h6.8l4.691 6.192zM17.1 20.03h1.8L7.07 3.866H5.137z"
                  />
                </svg>
                <span className="srOnly">X (Twitter)</span>
              </a>
            </li>
            <li>
              <a
                className="socialLink"
                href="https://www.linkedin.com/in/inweblife/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <svg className="socialIcon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <path
                    fill="currentColor"
                    d="M4.98 3.5C4.98 5 3.87 6.1 2.5 6.1S0 5 0 3.5 1.11.9 2.48.9h.02c1.37 0 2.48 1.1 2.48 2.6zM.3 8.1h4.4V24H.3V8.1zm7.2 0h4.2v2.2h.06c.58-1.1 2.02-2.26 4.17-2.26 4.46 0 5.29 2.94 5.29 6.76V24h-4.4v-8.16c0-1.95-.03-4.47-2.72-4.47-2.72 0-3.14 2.12-3.14 4.33V24H7.5V8.1z"
                  />
                </svg>
                <span className="srOnly">LinkedIn</span>
              </a>
            </li>
            <li>
              <a
                className="socialLink"
                href="https://github.com/inweblife"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <svg className="socialIcon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <path
                    fill="currentColor"
                    d="M12 .3a12 12 0 00-3.8 23.4c.6.1.8-.3.8-.6v-2.3c-3.3.7-4-1.4-4-1.4-.6-1.5-1.4-1.9-1.4-1.9-1.1-.8.1-.8.1-.8 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.7 1.3 3.3 1 .1-.8.4-1.3.7-1.6-2.7-.3-5.6-1.3-5.6-6a4.7 4.7 0 011.2-3.2 4.3 4.3 0 01.1-3.1s1-.3 3.3 1.2a11.3 11.3 0 016 0C17.9 5 19 5.3 19 5.3a4.3 4.3 0 01.1 3.1 4.7 4.7 0 011.2 3.2c0 4.7-2.9 5.7-5.6 6 .4.3.8 1 .8 2v3c0 .3.2.7.8.6A12 12 0 0012 .3z"
                  />
                </svg>
                <span className="srOnly">GitHub</span>
              </a>
            </li>
            <li>
              <a
                className="socialLink"
                href="/rss.xml"
                rel="alternate"
                type="application/rss+xml"
                aria-label="RSS"
              >
                <svg className="socialIcon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <path
                    fill="currentColor"
                    d="M4.5 16.5a2.5 2.5 0 100 5 2.5 2.5 0 000-5zm0-5a9 9 0 019 9h2a11 11 0 00-11-11v2zm0-5a14 14 0 0114 14h2A16 16 0 004.5 6.5v2z"
                  />
                </svg>
                <span className="srOnly">RSS</span>
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
