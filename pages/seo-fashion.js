import Image from "next/image";
import Link from "next/link";
import SeoHead from "../components/SeoHead";

import styles from "../styles/Article.module.css";

const SeoFashion = () => {
  return (
    <>
      <SeoHead
        title="В ерата на смартфоните | inweblife"
        description="Mobile-first оптимизация за по-добра използваемост и SEO резултати."
        path="/seo-fashion"
        image="/desk.webp"
        imageAlt="Работно бюро с фокус върху мобилни устройства"
        type="article"
      />

      <main className={styles.main} id="main-content">
        <section className={styles.heroBanner} aria-label="В ерата на смартфоните">
          <Image
            src="/desk.webp"
            alt="Работно бюро с фокус върху мобилни устройства"
            fill
            sizes="100vw"
            priority
            className={styles.heroImage}
          />
          <div className={styles.heroOverlay}>
            <h1>В ерата на смартфоните</h1>
          </div>
        </section>

        <article className={styles.article}>
          <section>
            <h2>Mobile-first е стандарт, не опция</h2>
            <p>
              Повечето посещения идват от мобилни устройства, затова дизайнът и структурата трябва
              да започват от малкия екран. Ако мобилната версия е компромисна, губите видимост и
              доверие още в първите секунди.
            </p>
            <p>
              Добрата mobile-first реализация гарантира четимост, ясни CTA елементи и стабилно
              поведение без счупени блокове.
            </p>
          </section>

          <section>
            <h2>Техническа оптимизация за скорост</h2>
            <p>
              Бързото зареждане е директен фактор за UX и индиректен за SEO. Тежки изображения,
              излишни скриптове и неподреден CSS водят до висок bounce rate и пропуснати конверсии.
            </p>
            <p>
              Оптимизираните ресурси и чистият layout намаляват забавянията и повишават качеството
              на взаимодействие.
            </p>
          </section>

          <section>
            <h2>От мобилен UX към бизнес резултат</h2>
            <p>
              В мобилна среда потребителят взема решения бързо. Ясният текст, кратката структура и
              логичната навигация превръщат посещенията в запитвания и реални сделки.
            </p>
          </section>

          <nav className={styles.next} aria-label="Свързани статии">
            <Link href="/modern-site">Как се прави модерен сайт</Link>
            <Link href="/powerful-site">Създайте мощен сайт</Link>
          </nav>
        </article>
      </main>
    </>
  );
};

export default SeoFashion;
