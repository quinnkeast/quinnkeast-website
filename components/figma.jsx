export default function Figma({ link, title }) {
  return (
    <a href={link} target="_blank">
      <div className="flex flex-row items-center bg-white rounded-md p-4 my-4 shadow">
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
    </a>
  );
}