import Link from "next/link";
import SeoHead from "../components/SeoHead";

export default function NotFoundPage() {
  return (
    <>
      <SeoHead
        title="404 страница и навигация | PPC Експерт, SEO Архитект"
        description="Търсената страница липсва. Върнете се към съдържанието за PPC стратегии, SEO архитектура и Full-Stack разработка, за да продължите към правилната посока."
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
