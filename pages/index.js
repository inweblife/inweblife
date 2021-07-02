import Head from 'next/head';
import Image from 'next/image';
import Link from "next/link";
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div>
      <Head>
        <title>inweblife - животът в мрежата</title>
        <meta name="description" content="inweblife - Вашият живот в мрежата" />
        <meta name="keywords" content="Web Development, SEO, Adwords" />
        <link rel="icon" href="/favicon.jpg" />
      </Head>
      
      <div className={styles.container}>
        <div className={styles.picture}>
          <Image src="/computer.jpg" alt="inweblife" width={780} height={500} />
        </div>

        <h1 className={styles.heading}>Животът в мрежата</h1>
        
        <div className={styles.text}>
          <p className={styles.paragraph}>
            Ако искате да другите да научат за Вас, да видят най-доброто от Вас
            и да достигате до много повече хора, Вие имате нужда от сайт. Сайт,
            с който да се представите на света. Не просто сайт, а такъв, който
            да е Вашата визитка, Вашето място в мрежата, което е уникално и
            представлява интерес за другите. С други думи - Вашият живот в
            мрежата.
          </p>

          <p className={styles.paragraph}>
            За да бъде професионално направен, обаче, сайтът трябва да отговаря
            на стандартите на Google за зареждане с определена скорост,
            съдържанието да се поднася по такъв начин, че клиентът лесно и бързо
            да се ориентира в него, да намира онова, което му е необходимо,
            елементите да са добре разделени един от друг в мобилна версия и
            страхотното потребителското изживяване да бъде гарантирано.
          </p>

          <p className={styles.paragraph}>
            Когато поръчвате своя сайт, трябва много добре да помислите за
            завършения му вид - да може да бъде пуснат в Google Ads, да е
            подготвен за рекламна експлоатация. Една от най-наивните грешки, които
            собствениците на сайтове допускат е, да не търсят готовия краен
            продукт, а просто да вземат изготвен сайт, който по-късно някой друг
            да оптимизира - SEO, PPC и mobile view. Винаги поръчвайте изцяло
            оптимизиран продукт, готов за реклама в Google и Facebook. Компромиси с тези добри практики, обикновено, по-късно, излизат изключително скъпо.
          </p>
          
        </div>
        
      </div>
      <Link href='/about'><a className={styles.button}>За мен</a></Link>
    </div>
  ); 
}
