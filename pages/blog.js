import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/blog.module.css';

const Contact = () => {
  return (
    <div>
      <Head>
        <title>inweblife - Направи си сайт</title>
        <meta name="description" content="inweblife - Вашият живот в мрежата" />
        <meta name="keywords" content="Web Development, SEO, Adwords" />
        <link rel="icon" href="/favicon.jpg" />
      </Head>
      <h1 className={styles.heading}>Блог за уеб съдържание</h1>
      <div className={styles.container}>
        <div className={styles.first}>
          <Image
            className={styles.img}
            src="/desk.jpg"
            alt="working"
            width={780}
            height={500}
          />
          <h4>Как се прави модерен сайт</h4>
          <p className={styles.paragraph}>
            За да живее един съвременен бизнес, той има нужда от сайт, Facebook
            страница, Google My Business, реклама и SEO оптимизация за по-високо
            индексиране в търсачките. Не е важно един сайт само да бъде
            изграден, да се качи на хост и да бъде пуснат. Сайтът трябва да се
            изгради по всички SEO стандарти още отначало.
          </p>
          <Link href="/modern-site">
            <a className={styles.button}>Виж още</a>
          </Link>
        </div>

        <div className={styles.second}>
          <Image
            className={styles.img}
            src="/coffee.jpg"
            alt="laptop"
            width={780}
            height={500}
          />
          <h4>Ерата на смартфоните</h4>
          <p className={styles.paragraph}>
            Разроботчикът трябва да вземе предвид измежду много неща, които
            предстои да направи, така че да изпълни задачата по такъв начин, че
            да не пренебрегне най-добрите практики познати в света. При всички
            случаи, клиентът ще иска сайтът му да се индексира по възможно
            най-добрия начин от Google
          </p>
          <Link href="/seo-fashion">
            <a className={styles.button}>Виж още</a>
          </Link>
        </div>

        <div className={styles.third}>
          <Image
            className={styles.img}
            src="/working.jpg"
            alt="envoirment"
            width={780}
            height={500}
          />
          <h4>Изграждане на мощен сайт</h4>
          <p className={styles.paragraph}>
            От много години се занимавам със създаване на Web
            съдържание и неговото качване в мрежата, за да се представи отделен
            човек, бизнес или предмет на дадена дейност. В работата си у нас
            забелязвам една все по-преднамерена упоритост всеки един разработчик
            да изявява себе си за сметка на клиентите.
          </p>
          <Link href="/powerful-site">
            <a className={styles.button}>Виж още</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
