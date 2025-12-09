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
  const maxWidth = wide ? "max-w-3xl" : "max-w-lg";
  const heading = minimal ? "text-lg md:text-2xl" : "text-xl md:text-5xl";
  return (
    <div className={`${maxWidth} mx-auto post-header`}>
      <h1 className={`${heading} leading-none`}>{title}</h1>
      {subtitle && !minimal && (
        <p className="text-black-lighter font-normal font-serif text-sm md:text-lg md:leading-snug leading-snug mt-0 mb-4">
          {subtitle}
        </p>
      )}
      <Author author={author} date={date} time={time} minimal={minimal} />
    </div>
  );
}
