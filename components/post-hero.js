export default function PostHero({
  title,
  image
}) {
  return (
    <div className="max-w-lg mx-auto post-hero">
      <img src={image.url} alt={title} className="" />
    </div>
  );
}
