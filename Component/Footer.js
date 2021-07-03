import Link from "next/link";

const Footer = () => {
    return ( 
        <footer>
            <div className="header">
      <ul className='nav'>
        <li><Link href="/"><a>Начало</a></Link>
        <Link href="/about"><a>За мен</a></Link>
        <Link href="/blog"><a>Блог</a></Link>
        </li>
      </ul>
    </div>
        <div className="header">
      <ul className='nav'>
        <li><Link href="https://twitter.com/inweblife"><a>Twitter</a></Link>
        <Link href="https://www.linkedin.com/in/inweblife/"><a>Linkedin</a></Link>
        <Link href="https://github.com/inweblife"><a>GitHub</a></Link>
        </li>
      </ul>
    </div>
    <h4> &copy;2021 inweblife </h4>
  </footer>
     );
}
 
export default Footer;
