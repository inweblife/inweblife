import Image from "next/image";
import Link from "next/link";
import SeoHead from "../components/SeoHead";

import styles from "../styles/Article.module.css";

const ModernSite = () => {
  return (
    <>
      <SeoHead
        title="Как се прави модерен сайт | inweblife"
        description="Mobile-first подход, архитектура и SEO основи за модерен уеб сайт."
        path="/modern-site"
        image="/workplace.webp"
        imageAlt="Модерен работен кът за уеб разработка"
        type="article"
      />

      <main className={styles.main} id="main-content">
        <section className={styles.heroBanner} aria-label="Модерен сайт">
          <Image
            src="/workplace.webp"
            alt="Модерен работен кът за уеб разработка"
            fill
            sizes="100vw"
            priority
            className={styles.heroImage}
          />
          <div className={styles.heroOverlay}>
            <h1>Как се прави модерен сайт</h1>
          </div>
        </section>

        <article className={styles.article}>
          <section>
            <h2>Архитектура преди дизайн</h2>
            <p>
              Модерният сайт започва с ясна структура на съдържанието, не с визуални ефекти.
              Когато архитектурата е планирана правилно, навигацията е интуитивна и потребителят
              стига до ключовата информация с минимален брой стъпки.
            </p>
            <p>
              Това директно влияе върху SEO, защото търсачките по-лесно разбират връзката между
              страниците, категориите и намерението на потребителя.
            </p>
          </section>

          <section>
            <h2>Mobile-first и Core Web Vitals</h2>
            <p>
              Днес качественият сайт се проектира първо за мобилни устройства. Резултатът е
              по-стабилно оформление, по-добра четимост и по-висока скорост при реални потребители.
            </p>
            <p>
              Оптимизирани изображения, ограничен JavaScript и семантичен HTML са основата за
              добри Core Web Vitals и устойчиво класиране в Google.
            </p>
          </section>

          <section>
            <h2>Съдържание, което носи резултати</h2>
            <p>
              Сайтът не е визитка, а бизнес инструмент. Всяка страница трябва да отговаря на
              конкретно търсене и да води потребителя към следваща стъпка: запитване, разговор или
              покупка.
            </p>
            <p>
              Ако търсите практична стратегия, комбинирайте техническа основа, ясни landing
              страници и добре планирани вътрешни връзки.
            </p>
          </section>

          <nav className={styles.next} aria-label="Свързани статии">
            <Link href="/seo-fashion">В ерата на смартфоните</Link>
            <Link href="/powerful-site">Създайте мощен сайт</Link>
          </nav>
        </article>
      </main>
    </>
  );
};

export default ModernSite;
