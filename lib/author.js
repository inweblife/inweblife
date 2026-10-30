import { SITE_URL } from "./config";

// Единственият източник за автора: горния ред, картата в края на статията и Article schema.
export const AUTHOR = {
  name: "Иван Димитров",
  href: "/about",
  role: "Уеб разработчик, SEO и Google Ads",
  bio: "Уеб разработчик, SEO консултант и Google Ads специалист с над 10 години опит. Изгражда сайтове на Next.js и WordPress и работи по SEO и рекламата в Гугъл на сайтове за изкупуване на коли, авточасти и рециклиране на автомобили.",
};

export const authorSchema = {
  "@type": "Person",
  name: AUTHOR.name,
  url: `${SITE_URL}${AUTHOR.href}`,
  image: `${SITE_URL}/ivan.webp`,
  jobTitle: "Уеб разработчик, SEO и Google Ads специалист",
};
