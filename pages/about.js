import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/about.module.css';

const About = () => {
  return (
    <div>
      <Head>
        <title>inweblife - Иван Димитров</title>
        <meta name="description" content="inweblife - Вашият живот в мрежата" />
        <meta name="keywords" content="Web Development, SEO, Adwords" />
        <link rel="icon" href="/favicon.jpg" />
      </Head>

      <div className={styles.container}>
        <div className={styles.picture}>
          <Image
            src="/Ivan Dimitrov.png"
            alt="inweblife"
            width={780}
            height={500}
          />
        </div>

        <h1 className={styles.heading}>За мен</h1>

        <div className={styles.text}>
          <p className={styles.paragraph}>
            Казвам се Иван Димитров и съм роден през 1977 година в град София,
            България Занимавам се Web development от 2011 година. Завършил съм
            престижната школа w3schools през 2018 година, Frontend masters,
            както и някой руски школи за програмиране, Responsive design и Web
            development.
          </p>

          <p className={styles.paragraph}>
            Квалифицирал съм се допълнително в областта на Digital marketing -
            Facebook ads, Google Ads, Remarketing, SEO и т.н. С навлизането на
            Mobile First технологията за изграждане на интернет съдържание
            достъпно през мобилни устройства, след бума в производството и
            използването на смартфони, започнах активно да изграждам сайтове по
            най-модерните критерии за Google ranking и Facebook marketing.
          </p>

          <p className={styles.paragraph}>
            Имам опит с изграждането на Web сайтове в най-различни сфери от
            бизнеса и тяхното функционално настройване за успешни маркетингови
            активности, SEO и PPC кампании, съобразени със създаването на
            Facebook Business page и цялата палитра маркетингови услуги на
            Google.
          </p>
        </div>
      </div>
      <Link href="mailto:inweblife@yandex.com">
        <a className={styles.button}>контакт</a>
      </Link>
    </div>
  );
};

export default About;
