export default function Tags({ tags, wide }) {
  const maxWidth = wide ? "max-w-3xl" : "max-w-lg";
  return (
    <div className={`${maxWidth} mx-auto`}>
      {tags.map((tag) => (
        <span
          className="bg-black bg-opacity-5 rounded text-xs leading-none inline-block px-2 py-1 mr-1"
          key={tag}
        >
          {tag}
        </span>
      ))}
    </div>
  );
}
