import DateFormatter from "./date-formatter";

export default function Author({ author, date, time }) {
  return (
    <div className="flex flex-row items-center mt-4">
      <div className="flex items-center">
        <img
          src={author.picture}
          className="w-14 h-14 rounded-full mr-3"
          alt={author.name}
        />
      </div>
      <div className="text-sm leading-tight">
        <span className="font-medium">{author.name}</span>
        <br />
        <span className="text-black-lighter">
          <DateFormatter dateString={date} /> <span className="text-xs">•</span>{" "}
          {time.text}
        </span>
      </div>
    </div>
  );
}
