import Link from "next/link";
import SeoHead from "../components/SeoHead";

export default function NotFoundPage() {
  return (
    <>
      <SeoHead
        title="404 страница | SEO, PPC и Full-Stack навигация"
        description="Страницата не е налична. Продължете към ресурси за SEO експертни стратегии, PPC кампании, Next.js development и semantic content архитектура."
        keywords="404, SEO експерт, PPC кампании, Next.js development, Full-Stack Developer, semantic content"
        path="/404"
        image="/working.webp"
        type="website"
        robots="noindex, nofollow"
      />

      <main id="main-content" className="notFoundMain">
        <h1>404 страница не е намерена</h1>
        <p>Страницата, която търсите, не беше открита.</p>
        <p>
          <Link href="/">Към началната страница</Link>
        </p>
      </main>
    </>
  );
}
