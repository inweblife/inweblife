import { formatBgDate, isUpdated } from "../lib/postMeta";

// Обновена статия показва датата на обновяване - тя казва на читателя, че съдържанието е актуално.
const PostDate = ({ post, className }) => {
  const updated = isUpdated(post);
  const day = updated ? post.modified : post.published;

  return (
    <time className={className} dateTime={day}>
      {updated ? "Обновено" : "Публикувано"}: {formatBgDate(day)}
    </time>
  );
};

export default PostDate;
