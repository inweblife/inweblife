import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <div>
        <ul className="menu_list">
          <li>
            <Link href="https://twitter.com/inweblife">Twitter</Link> |
          </li>
          <li>
            <Link href="https://www.linkedin.com/in/inweblife/">Linkedin</Link>{" "}
            |
          </li>
          <li>
            <Link href="https://github.com/inweblife">GitHub</Link> 
          </li>
        </ul>
      </div>

      <copyright>
        Copyright {new Date().getFullYear()} inweblife - животът в мрежата
      </copyright>
    </footer>
  );
};

export default Footer;
