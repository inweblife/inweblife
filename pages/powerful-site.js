import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import styles from "../styles/Article.module.css";

const PowerfulSite = () => {
  return (
    <>
      <Head>
        <title>Създайте мощен сайт | inweblife</title>
        <meta
          name="description"
          content="Как да изградите устойчив и мащабируем сайт с добри SEO основи."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className={styles.main} id="main-content">
        <section className={styles.heroBanner} aria-label="Мощен сайт">
          <Image
            src="/computer.webp"
            alt="Компютърна станция за разработка"
            fill
            sizes="100vw"
            priority
            className={styles.heroImage}
          />
          <div className={styles.heroOverlay}>
            <h1>Създайте мощен сайт</h1>
          </div>
        </section>

        <article className={styles.article}>
          <section>
            <h2>Силен фундамент, не временни решения</h2>
            <p>
              Мощният сайт се познава по това как се държи под натоварване,
              колко лесно се поддържа и колко бързо може да се развива. Това
              означава чиста кодова база, ясна модулност и предвидима
              архитектура.
            </p>
            <p>
              Когато техническата основа е стабилна, маркетингът, SEO и
              рекламните кампании работят по-ефективно и с по-нисък риск.
            </p>
          </section>

          <section>
            <h2>SEO и PPC в единна стратегия</h2>
            <p>
              Най-силните дигитални резултати идват от синхрон между органичен
              трафик и платени кампании. SEO изгражда авторитет, а PPC ускорява
              валидирането на оферти и лендинг страници.
            </p>
            <p>
              Ако архитектурата е мислена от самото начало, всеки нов канал се
              добавя без хаос и без скъпи преработки.
            </p>
          </section>

          <section>
            <h2>Устойчив растеж, а не еднократен пик</h2>
            <p>
              Целта не е кратък скок в трафика, а последователно нарастване на
              качествените запитвания. Това се постига със смислено съдържание,
              добре структурирани тематични страници и измерване на реалните
              бизнес резултати.
            </p>
          </section>

          <nav className={styles.next} aria-label="Свързани статии">
            <Link href="/seo-fashion">В ерата на смартфоните</Link>
            <Link href="/how-to-make-site">Как се прави сайт</Link>
          </nav>
        </article>
      </main>
    </>
  );
};

export default PowerfulSite;
