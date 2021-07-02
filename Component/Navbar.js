import Link from "next/link";

const Navbar = () => {
    return ( 
        <>
        <div className="logo">
        <Link href="/"><a>inweblife</a></Link>
      </div>
      <div className="header">
      <ul className='nav'>
        <li><Link href="/"><a>Начало</a></Link>
        <Link href="/about"><a>За мен</a></Link>
        <Link href="/blog"><a>Блог</a></Link>
        </li>
      </ul>
    </div>
    </>
    );
}
 
export default Navbar;
