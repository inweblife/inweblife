import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import styles from "../styles/Article.module.css";

const HowToMakeSite = () => {
  return (
    <>
      <Head>
        <title>Как се прави сайт | inweblife</title>
        <meta
          name="description"
          content="Основни стъпки за създаване на ефективен сайт с добра SEO основа."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className={styles.main} id="main-content">
        <article className={styles.article}>
          <header>
            <h1>Как се прави сайт</h1>
          </header>
          <figure className={styles.picture}>
            <Image
              src="/working.webp"
              alt="Процес по изграждане на уеб сайт"
              width={780}
              height={500}
              className={styles.image}
              priority
            />
          </figure>
          <section>
            <p>
              Проектът започва с ясна цел: какво решава сайтът и за кого е
              предназначен. След това идват структурата, съдържанието и
              техническата реализация.
            </p>
            <p>
              Ако SEO е планирано от началото, се избягват скъпи промени след
              пускането. Най-добри резултати идват при комбинация от качествен
              код, полезни текстове и измерима стратегия.
            </p>
          </section>
          <nav className={styles.next} aria-label="Свързани статии">
            <Link href="/powerful-site">Създайте мощен сайт</Link>
            <Link href="/modern-site">Как се прави модерен сайт</Link>
          </nav>
        </article>
      </main>
    </>
  );
};

export default HowToMakeSite;
