// Помощни функции върху lib/posts.js - единственият източник на датите, описанията и
// категориите на статиите за картичките, sitemap.xml и RSS.

const MONTHS = [
  "януари",
  "февруари",
  "март",
  "април",
  "май",
  "юни",
  "юли",
  "август",
  "септември",
  "октомври",
  "ноември",
  "декември",
];

// "2026-10-15" -> "15 октомври 2026", без Date, за да няма разлика между сървър и браузър.
export const formatBgDate = (day) => {
  const [year, month, date] = day.split("-").map(Number);
  return `${date} ${MONTHS[month - 1]} ${year}`;
};

export const isUpdated = (post) => post.modified !== post.published;

// Картичката в блога може да е .webp, а OG изображението на страницата е винаги в /og/.
export const postOgImage = (post) =>
  post.image.startsWith("/og/") ? post.image : `/og${post.href}.png`;

export const latestModified = (list) =>
  list.reduce((latest, post) => (post.modified > latest ? post.modified : latest), list[0].modified);
