import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import styles from "../styles/About.module.css";

const About = () => {
  return (
    <>
      <Head>
        <title>
          {" "}
          За мен | Как се прави сайт за най-високо класиране в Google
        </title>
        <meta
          name="description"
          content="Успешно SEO гарантира благополучно представяне на сайта в мрежата, за да се вижда от всички навсякъде."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.webp" />
      </Head>

      <div className={styles.main}>
        <div className={styles.picture}>
          <Image
            src="/coffee.webp"
            alt="workplace"
            width={900}
            height={540}
            style={{
              maxWidth: "100%",
              height: "auto",
            }}
          />
        </div>

        <h1 className={styles.title}>Иван Димитров</h1>
        <h3 className={styles.title}>Fullstack JavaScript Developer</h3>

        <section className={styles.text}>
          <div className={styles.paragraph}>
            <p>
              Казвам се Иван Димитров и съм роден през 1977 година в град София,
              България. Занимавам се{" "}
              <Link href="/">
                <strong>Web development</strong>
              </Link>{" "}
              от 2011 година. Завършил съм престижната школа w3schools през 2018
              година, Frontend masters, както и някои руски школи за
              програмиране, Responsive design и Web development.
            </p>

            <p>
              Квалифицирал съм се допълнително в областта на Digital marketing -
              Facebook ads, Google Ads, Remarketing, SEO и т.н. С навлизането на
              Mobile First технологията за изграждане на интернет съдържание
              достъпно през мобилни устройства, след бума в производството и
              използването на смартфони, започнах активно да изграждам сайтове
              по най-модерните критерии за Google ranking и Facebook marketing.
            </p>

            <p>
              Имам опит с{" "}
              <Link href="/how-to-make-site">
                <strong>изграждането на Web сайтове</strong>
              </Link>{" "}
              в най-различни сфери от бизнеса и тяхното функционално настройване
              за успешни маркетингови активности, SEO и PPC кампании, съобразени
              със създаването на Facebook Business page и цялата палитра
              маркетингови услуги на Google. Един от сайтове, по които работя е{" "}
              <Link href="https://kolazascrap.com/">
                <strong>Коли за скрап</strong>
              </Link>
              , а друг -{" "}
              <Link href="https://ecometal.bg/">
                <strong>Коли за бракуване</strong>
              </Link>{" "}, освен това <Link href="https://kolizascrap.com/"><strong>Калкулатор коли за скрап </strong></Link>
              и{" "}
              <Link href="https://carco.bg/">
                <strong>Авточасти втора употреба</strong>
              </Link>
            </p>
          </div>
        </section>
        <section className={styles.btn}>
          <button>
            <Link href="mailto:inweblife@yandex.com">За контакт</Link>
          </button>
        </section>

        <section className={styles.text}>
          <div className={styles.paragraph}>
            <p>
              Убеден съм, че{" "}
              <Link href="/powerful-site">
                <strong>сайтовете трябва да се правят</strong>
              </Link>{" "}
              от първия до последния код, изцяло според най-добрите практики на
              Google за оптимизация, от заглавията, през описанията по ключови
              думи, чак до скорост на зареждане и най-приятно потребителско
              изживяване. Повече неща ще разказвам в{" "}
              <Link href="/blog">
                <strong>моя блог</strong>
              </Link>
            </p>

            <div className={styles.picture}>
              <Image
                src="/ivan.webp"
                alt="workplace"
                width={500}
                height={400}
                style={{
                  maxWidth: "100%",
                  height: "auto",
                }}
              />
            </div>
          </div>
        </section>
        <section className={styles.btn}>
          <button>
            <Link href="/blog">Блог</Link>
          </button>
        </section>
      </div>
    </>
  );
};

export default About;
