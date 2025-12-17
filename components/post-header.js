import Author from "./author";

export default function PostHeader({
  title,
  subtitle,
  coverImage,
  date,
  author,
  time,
  wide,
  minimal,
}) {
  const heading = minimal ? "text-lg md:text-2xl leading-snug" : "text-xl md:text-5xl leading-none";
  return (
    <div className="post-header">
      <h1 className={`${heading}`}>{title}</h1>
      {subtitle && !minimal && (
        <p className="text-black-lighter font-normal font-serif text-sm md:text-lg md:leading-snug leading-snug mt-0 mb-4">
          {subtitle}
        </p>
      )}
      <Author author={author} date={date} time={time} minimal={minimal} />
    </div>
  );
}
