import Link from "next/Link";

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
    <h4> &copy;2021 inweblife </h4>
  </footer>
     );
}
 
export default Footer;