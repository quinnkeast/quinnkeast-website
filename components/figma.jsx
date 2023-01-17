export default function Figma({ link, title, thumbnail }) {
  return (
    <a href={link} target="_blank">
      <div className="flex flex-col bg-white rounded-md p-4 my-4 shadow">
        {thumbnail && (
          <div className="flex flex-row mb-3">
            <img src={thumbnail} className="rounded-lg" />
          </div>
        )}
        <div className="flex flex-row items-center">
          <img
            src="/assets/figma-logo.svg"
            width="28"
            height="39"
            className="mr-4"
          />

          <div className="leading-tight">
            {title && <span className="font-medium mb-1">{title}</span>}
            <br />
            <span className="text-black-lighter text-sm">View Figma file</span>
          </div>
        </div>
      </div>
    </a>
  );
}
