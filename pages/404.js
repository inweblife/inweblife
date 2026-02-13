import Link from "next/link";
import SeoHead from "../components/SeoHead";

export default function NotFoundPage() {
  return (
    <>
      <SeoHead
        title="Страницата не е намерена | inweblife"
        description="Тази страница не съществува или е преместена."
        path="/404"
        image="/working.webp"
        type="website"
        robots="noindex, nofollow"
      />

      <main id="main-content" className="notFoundMain">
        <h1>404</h1>
        <p>Страницата, която търсите, не беше открита.</p>
        <p>
          <Link href="/">Към началната страница</Link>
        </p>
      </main>
    </>
  );
}
