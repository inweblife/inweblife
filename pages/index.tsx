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
              SEO (Search Engine Optimization) и PPC (Pay-Per-Click) са двата
              основни стълба на дигиталния маркетинг, които си взаимодействат и
              допълват, за да постигнат максимални резултати.{" "}
            </p>

            <p>
              {" "}
              SEO е, най-общо казано, работа върху сайт, която цел е да помогне
              за по-доброто му индексиране от търсачките.
            </p>

            <p>
              {" "}
              PPC е, от своя страна, работа с реклами предоставяща възможности
              на сайт да се класира по-високо.
            </p>

            <h3 className={styles.title}>
              Откъде идва заблудата, че PPC е платена реклама и носи бърз успех
            </h3>

            <p>
              Една от най-големите заблуди свързани с дигиталния маркетинг е, че
              за SEO не се заплаща. Това тръгва като история от платената
              реклама в Google AdWords, която си е скъпо удоволствие, което не
              всеки може да си позволи.
            </p>

            <p>
              Има поредица от курсове, обучения и всякакви по рода си туториали,
              в които всевъзможни дигитални гурута са намерили поле за изява. Те
              са намерили удобна ниша, в която изкушават начинаещите решили да
              научат PPC рекламата.
            </p>

            <p>
              Правят се дълги видеа, пишат се грандиозни публикации се
              представят едни неща, като някакъв факултет по платена реклама.
              Едва ли не, всичко се представя като много сложна наука, която
              изисква дълги години време, за да бъде научена. И още поне толкова
              практика, и опит, за да бъде усвоена на начално ниво.
            </p>

            <p>
              А решилите да прочетат малко по темата, с желание да научат нещо,
              наивно се поддават на изкушенията и се записват в такива курсове.
              Където, в крайна сметка, след като получат сертификат, не са
              научили нищо. И като идат някъде на интервю за работа по
              професията, най-много да ги вземат на стаж, срещу обидно
              заплащане.
            </p>

            <p>
              Някъде оттук и тръгва заблудата, че PPC носи бърз успех, защото е
              платена реклама. И при добри настройки на акаунта, ще донесе
              веднага резултати.
            </p>

            <h3 className={styles.title}>
              Защо се говори, че SEO е безплатно и не струва нищо
            </h3>

            <p>
              От друга страна е заблудата, че за оптимизиране на съдържанието не
              се плаща нищо. Много хора, които се представят като специалисти от
              последна инстанция, създават условия за тази заблуда. Един вид -
              плащаш си за платена реклама и постигаш резултати - съответно,
              няма как с безплатни техники като SЕO да искаш резултати.
            </p>
            <p>
              Други гурута, от тези, които продават туториали и различни
              курсове, имат други теории. Те осъзнават, че няма как да заблудиш
              собственикът, на даден сайт, че създаването на съдържание е
              безплатно. Защото онези, които вече имат сайтове и започнат да
              мислят за тяхната видимост, бързо разбират, какво се изисква за
              постигането на поставените цели.
            </p>
            <p>
              Така че, когато един собственик на сайт, който е решил да се
              консултира с такива специалисти, нормално задава въпроси свързани
              със създаването съдържанието. Обикновено, сайтовете имат секции,
              менюта, блогове и за класирането им в търсачките, трябва да се
              създаде съдържание. А създаването на съдържанието струва пари.
            </p>
            <p>
              Не е лесно за собственика, като специалист в бранша, чиято ниша
              иска да превземе, да го направи с технически термини. Трябва да се
              наеме копирайтър, който да пише публикации и текстове
              професионално.
            </p>
            <p>
              Няма как да бъде заблуден такъв човек, че SEO е безплатно. Затова
              и различни агенции предлагащи услуги за дигитален маркетинг,
              предлагат паралелно обслужване. PPC и SEO заедно, което е
              единственият правилен подход.
            </p>

            <h3 className={styles.title}>
              Защо трябва да се работи по SEO и по PPC заедно
            </h3>

            <p>
              Когато на един клиент на такава агенция за дигитален маркетинг, му
              се направи оферта за SEO и PPC, обикновено клиента се отблъсква.
              Тъй като комисионната и абонамента за такива услуги не е по джоба
              на всяка компания. Малцина са фирмите, които могат да си позволят
              да отделят по 5 000 лева и нагоре за дигитален маркетинг. Това си
              е една заплата за нов служител или разход свързан с увеличение на
              възнагражденията на персонала.
            </p>
            <p>
              Ето защо, за да не изпуснат клиента много агенции си позволяват да
              заблуждават, че може да се работи само с едното. И организират
              работа само с PPC, например, защото всеки иска бързи резултати и
              почти никой не иска да чака.
            </p>

            <p>
              Поне аз, в моята практика, не съм виждал агенция, която да бъде
              честна с клиентите. Да казва истината на масата, като например -
              SEO ще донесе успехи със сигурност, на те няма да дойдат веднага.
              Без SEO е излишно да се прави PPC. Трябва да се започне отнякъде,
              затова нека започнем с PPC, с малки суми, а паралелно да работим
              активно по SEO, за да станем видими в мрежата.
            </p>

            <p>
              Затова се изкушава клиента да подпише договор за PPC, прави се
              акаунт и се пускат платени реклами. А това, без SEO, няма как да
              даде желания резултат. Следователно, след два-три месеца клиента е
              разочарован, вече изпитва съмнение в работата на агенцията и почва
              да търси начини да прекрати договора си.
            </p>

            <h3 className={styles.title}>
              Как е правилно да се случат нещата от гледна точка на дигиталния
              маркетинг
            </h3>

            <p>
              Истината е, че правилния начин на работа включва да се започне
              работа по <Link href="/modern-site"><strong>SEO</strong></Link> на сайта веднага щом почне да се изгражда. Докато се
              създават секции, страници, менюта и съдържанието за тях, всичко
              трябва да се съобразява със семантичното ядро. Семантично ядро е
              група от ключови думи, които са най-подходящите за работа в
              областта на дигиталния маркетинг, свързани с бранша, в който
              работи сайта.
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

            <p>
              <Link href="/powerful-site"><strong>Изграждането на един сайт</strong></Link> не става за ден-два, така че през това
              време, през което се довършва, може да се работи спокойно по SEO.
              Нищо не пречи, докато се публикува съдържанието му, да се изградят
              вътрешните връзки. Да се организира съдържанието - стълбови
              страници, теми и ключови думи. Това е най-правилният начин.
            </p>

            <p>
              Така че, когато сайтът вече е пуснат и основната работа по него е
              завършена, да се търсят възможности за изграждане на външни връзки
              към него. Това е един от най-главните фактори за високо класиране
              в сайта. А именно, това изграждане на такива връзки, е най-скъпото
              в SEO. Защото, за да публикувате платена публикация в някоя
              популярна медия, откъдето да пуснете връзка към сайта на клиента,
              трябва да платите сериозна сума пари.
            </p>

            <p>
              А сега си представете, че за да получите поне няколко такива
              връзки, трябва да платите за около 30-40 сайта минимум в първите 3
              до 6 месеца. И всичко това е хубаво да се прави професионално, при
              следване на всички правила на SEO, семантика, лематизация и пр.
            </p>

            <p>
              Отделно, техническата работа по сайта за бързо зареждане, да е
              добър външния му вид, да е удобен за потребителите на всякакви
              устройства. Всичко това струва, също, не малко пари. Така че, за
              да се изработи едно добро SEO като старт на един сайт, са
              необходими около 6 месеца поне. И много инвестиции. Далеч повече
              от платена реклама под формата на PPC.
            </p>

            <p>
              И, евентуално, някъде около третия месец, най-рано, може да се
              говори за увеличение на бюджета на PPC. Преди това, да се пускат
              високи бюджети и да се разчита на някакви сериозни резултати, е
              пълна заблуда. Едва след първите три месеца и въз основа на броя
              външни връзки, които са създадени, може да се говори за успешна 
              <Link href="/how-to-make-site"><strong>платена реклама PPC</strong></Link>. И това, само ако останалата организация по
              сайта е направена на много високо ниво.
            </p>

            <p>
              Иначе, клиентът пак ще остане недоволен, защото няма да види
              никакви резултати. След което ще започне да търси начини да
              развали договора си и ще си търси друга агенция. Тъй като ще се е
              почувствал излъган, защото никой не му е обяснил обективно нещата.
            </p>

            <p>Така че - това е начинът, а това е само началото…</p>
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
