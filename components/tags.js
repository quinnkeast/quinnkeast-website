export default function Tags({ tags }) {
  return (
    <div className="max-w-lg mx-auto">
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
