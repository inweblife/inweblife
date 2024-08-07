import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>inweblife-животът в мрежата</title>
        <meta name="description" content="За всеки има място в мрежата" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.webp" />
      </Head>

      <div className={styles.main}>
        <div className={styles.picture}>
          <Image
            src="/working.webp"
            alt="workplace"
            width={900}
            height={540}
            style={{
              maxWidth: "100%",
              height: "auto",
            }}
          />
        </div>

        <h1 className={styles.title}>Животът в мрежата</h1>
        <h3 className={styles.title}>Заемете своето онлайн пространство</h3>

        <section className={styles.text}>
          <div className={styles.paragraph}>
            <p>
              Ако искате и другите да научат за Вас, да видят най-доброто от Вас
              и да достигате до много повече хора, Вие имате нужда от сайт.
              Сайт, с който да се представите на света. Не просто сайт, а такъв,
              който да е Вашата визитка, Вашето място в мрежата, което е
              уникално и представлява интерес за другите. С други думи - Вашият
              живот в мрежата
            </p>

            <p>
              За да бъде професионално направен, обаче, сайтът трябва да
              отговаря на стандартите на Google за зареждане с определена
              скорост, съдържанието да се поднася по такъв начин, че клиентът
              лесно и бързо да се ориентира в него, да намира онова, което му е
              необходимо, елементите да са добре разделени един от друг в
              мобилна версия и страхотното потребителското изживяване да бъде
              гарантирано.
            </p>

            <p>
              Когато поръчвате своя сайт, трябва много добре да помислите за
              завършения му вид - да може да бъде пуснат в Google Ads, да е
              подготвен за рекламна експлоатация.
            </p>

            <p>
              Една от най-наивните грешки, които собствениците на сайтове
              допускат е, да не търсят готовия краен продукт, а просто да вземат
              изготвен сайт, който по-късно някой друг да оптимизира - SEO, PPC
              и mobile view.
            </p>

            <p>
              Винаги поръчвайте изцяло оптимизиран продукт, готов за реклама в
              Google и Facebook. Компромиси с тези добри практики, обикновено,
              по-късно, излизат изключително скъпо.
            </p>
          </div>
        </section>
        <section className={styles.btn}>
          <button>
            <Link href="/about">За мен</Link>
          </button>
        </section>

        <section className={styles.text}>
          <div className={styles.paragraph}>
            <p>
              Казвам се Иван Димитров и съм роден 1977 година в град София. Над
              10 години се занимавам с Web Development, включително SEO
              оптимизации, изграждане на сайтове, подготвянето им за индексиране
              в Google и реклами.
            </p>

            <div className={styles.picture}>
              <Image
                src="/desk.webp"
                alt="workplace"
                width={600}
                height={500}
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
            <Link href="mailto:inweblife@yandex.com">За Контакт</Link>
          </button>
        </section>
      </div>
    </>
  );
}
