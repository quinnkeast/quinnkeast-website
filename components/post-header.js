import Author from "./author";

export default function PostHeader({
  title,
  subtitle,
  coverImage,
  date,
  author,
  time,
}) {
  return (
    <div className="max-w-lg mx-auto post-header">
      <h1 className="mb-4">{title}</h1>
      {subtitle && (
        <p className="text-black-lighter font-normal font-serif text-lg leading-snug">
          {subtitle}
        </p>
      )}
      <Author author={author} date={date} time={time} />
    </div>
  );
}
