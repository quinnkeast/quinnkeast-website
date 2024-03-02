import * as Fathom from "fathom-client";

export default function GDoc({ link, title }) {
  const handleClick = (e) => {
    e.preventDefault();
    Fathom.trackEvent("view gdoc", {
      _value: title,
    });
    window.open(link, "_blank");
  };

  return (
    <a href={link} target="_blank" onClick={handleClick}>
      <div className="flex flex-row items-center bg-white rounded-md p-4 my-4 shadow">
        <img
          src="/assets/gdoc-icon.svg"
          width="28"
          height="39"
          className="mr-4"
        />

        <div className="leading-tight">
          {title && <span className="font-medium mb-1">{title}</span>}
          <br />
          <span className="text-black-lighter text-sm">View document</span>
        </div>
      </div>
    </a>
  );
}
