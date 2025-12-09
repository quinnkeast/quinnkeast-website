import DateFormatter from "./date-formatter";

export default function Author({ author, date, time, minimal }) {
  return (
    <div className="flex flex-row items-center">
      {!minimal && <div className="flex items-center">
        <img
          src={author.picture}
          className="w-14 h-14 rounded-full mr-3"
          alt={author.name}
        />
      </div>}
      <div className="text-sm leading-tight">
        {!minimal && <>
          <span className="font-medium">{author.name}</span>
          <br />
        </>}
        <span className="text-black-lighter">
          <DateFormatter dateString={date} />{" "}
          {time.text && (
            <>
              <span>·</span> {time.text}
            </>
          )}
        </span>
      </div>
    </div>
  );
}
