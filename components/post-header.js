import Author from "./author";

export default function PostHeader({
  title,
  subtitle,
  coverImage,
  date,
  author,
  time,
  wide,
}) {
  const maxWidth = wide ? "max-w-3xl" : "max-w-lg";
  return (
    <div className={`${maxWidth} mx-auto post-header`}>
      <h1 className="text-xl md:text-5xl mb-2 md:mb-6 leading-none">{title}</h1>
      {subtitle && (
        <p className="text-black-lighter font-normal font-serif text-sm md:text-lg md:leading-snug leading-snug mt-0">
          {subtitle}
        </p>
      )}
      <Author author={author} date={date} time={time} />
    </div>
  );
}
