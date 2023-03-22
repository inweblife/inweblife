import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import styles from "../styles/modern.module.css";

const modern = () => {
  return (
    <div>
      <Head>
        <title>Как се прави модерен сайт</title>
        <meta name="description" content="inweblife - Вашият живот в мрежата" />
        <meta name="keywords" content="Как се прави модерен сайт" />
        <link rel="icon" href="/favicon.jpg" />
      </Head>

      <div className={styles.container}>
        <div className={styles.picture}>
          <Image
            src="/workplace.webp"
            alt="workspace"
            width={780}
            height={500}
            style={{
              maxWidth: "100%",
              height: "auto",
            }}
          />
        </div>

        <h1 className={styles.heading}>Как се прави модерен сайт.</h1>

        <div className={styles.text}>
          <p className={styles.paragraph}>
            С прогреса на технологиите в последните години, развитието на
            интернет, мобилните устройства, социалните мрежи и последствията от
            социалното дистанциране, все по-голяма става нуждата от онлайн
            магазини, услуги онлайн, всичко онлайн.
          </p>

          <p className={styles.paragraph}>
            Докато стоят по домовете си, дори докато работят от вкъщи, все
            повече хора нямат възможности и желание да излизат навън, за да
            купят нещо, да преживеят нещо вълнуващо, защото в интернет има
            всичко. А, както знаем – търсенето определя предлагането. Хората
            търсят онлайн, а не по главната търговска улица, както беше до
            неотдавна.
          </p>

          <p className={styles.paragraph}>
            Това налага на търговците, на хората, които искат да пласират
            услугите и стоката си, да влязат в интернет, където да потърсят своя
            успех. Все повече хора затварят локалните си магазини, офисите си и
            създават такива онлайн – правят се сайтове, Facebook страници,
            рекламира се в социалните мрежи, в Google и др.
          </p>

          <p className={styles.paragraph}>
            За да живее един съвременен бизнес, той има нужда от сайт, Facebook
            страница, Google My Business, реклама и <Link href="/seo-fashion">SEO оптимизация на сайта</Link> за
            по-високо индексиране в търсачките. Не е важно един сайт само да
            бъде изграден, да се качи на хост и да бъде пуснат. Сайтът трябва да
            се изгради по всички SEO стандарти още отначало.
          </p>

          <p className={styles.paragraph}>
            Още в началото, преди да почне да се изгражда сайта, трябва да се
            съобразят – скорост, мобилен дизайн и потребителско изживяване.
            Много често собственикът на сайта иска сайтът му да изглежда по един
            начин, който е в пълно противоречие с правилата, по които се
            изграждат <Link href="/how-to-make-site">SEO връзките</Link>, семантиката и всички останали тънкости,
            които издигат съдържанието най-напред в търсачките.
          </p>

          <p className={styles.paragraph}>
            Това е напълно нормално – не му е работа да знае тези неща. Работа
            на разработчика е да ги обясни убедително, така че собственикът да
            разбере, кое е най-важното, на кое трябва да държи, да заложи и как
            точно това ще работи за него, как ще му се отплаща с поръчки и клиенти в
            бъдеще.
          </p>

          <p className={styles.paragraph}>
            На 21 Април 2015 година Google официално обяви, че занапред ще дава
            предимство за по-високо класиране в търсачките на сайтовете с
            адаптивен дизайн или казано на професионален език - създадени по
            стандартите Mobile First. Това, което търсачката реално прави е да
            разграничава резултатите от търсенията направени от настолен
            компютър или мобилно устройство.
          </p>
          <p className={styles.paragraph}>
            От 2018 година - насам системата на Google обръща голямо внимание на
            големината на файловете в сайта и скоростта на тяхното зареждане, с
            идеята, че потребителите искат максимално бързо да получат
            информацията, която търсят.
          </p>
          <p className={styles.paragraph}>
            Така, по-бързите сайтове започват да се класират на предни позиции
            при изобразяване на резултатите от търсенето, което прави
            оптимизацията за скорост една от най-важните.
          </p>

          <p className={styles.paragraph}>
            Тези изисквания трябва да бъдат взимани предвид още преди да почне
            да се изгражда един сайт, за да може, когато дойде време да се
            настройват другите фактори, които касаят индексирането в търсачките,
            всички те комплексно да вдигнат сайта възможно най-горе и по-късно,
            когато почнат рекламните активности, успехите да идват с по-малко
            разходи.
          </p>
        </div>
      </div>
      <div className={styles.next}>
        <Link href="/seo-fashion">Ерата на смартфоните</Link>
        <Link href="/powerful-site">Създайте мощен сайт</Link>
      </div>
    </div>
  );
};

export default modern;