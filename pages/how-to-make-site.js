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
        <section className={styles.heroBanner} aria-label="Как се прави сайт">
          <Image
            src="/working.webp"
            alt="Процес по изграждане на уеб сайт"
            fill
            sizes="100vw"
            priority
            className={styles.heroImage}
          />
          <div className={styles.heroOverlay}>
            <h1>Как се прави сайт</h1>
          </div>
        </section>

        <article className={styles.article}>
          <section>
            <h2>Планиране преди код</h2>
            <p>
              Всеки добър сайт започва с ясна цел: какво решавате за клиента и
              как измервате успеха. Без това дори добрият дизайн остава без
              посока.
            </p>
            <p>
              Планирането включва структура на страниците, ключови теми,
              приоритетни услуги и конкретни сценарии за потребителско действие.
            </p>
          </section>

          <section>
            <h2>Съдържание и семантична архитектура</h2>
            <p>
              SEO ефектът идва, когато съдържанието е подредено по теми, а не
              публикувано хаотично. Pillar страници, клъстерни статии и логични
              вътрешни връзки създават авторитет в нишата.
            </p>
            <p>
              Това прави сайта по-полезен за потребителя и по-разбираем за
              търсачките.
            </p>
          </section>

          <section>
            <h2>Техническо изпълнение и мащабируемост</h2>
            <p>
              Бърз, стабилен и поддържаем код е задължителен, ако искате сайтът
              да расте заедно с бизнеса. Подреденият frontend, оптимизираните
              изображения и добрият deployment процес спестяват време и бюджет.
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
