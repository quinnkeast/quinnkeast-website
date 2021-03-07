import Link from "next/link";

const menuItems = [
  {
    label: "Projects",
    path: "projects",
  },
  {
    label: "Writing",
    path: "writing",
  },
  {
    label: "Speaking",
    path: "speaking",
  },
  {
    label: "Favourites",
    path: "favourites",
  },
  {
    label: "About",
    path: "about",
  },
  {
    label: "ReadMe",
    path: "readme",
  },
];

const menuLink = (label, path) => (
  <li key={path}>
    <Link href={`/${path}`}>
      <a className="border-0 hover:text-black">{label}</a>
    </Link>
  </li>
);

export default function Header() {
  return (
    <div className="grid md:grid-cols-3 md:mt-16 mb-24">
      <div className="col-1">
        <Link href="/">
          <a className="font-medium border-0">Quinn Keast</a>
        </Link>
      </div>
      <div className="col-2">
        <menu className="grid grid-flow-col gap-12 list-none px-0 my-0 text-black-lighter">
          {menuItems.map((item) => menuLink(item.label, item.path))}
        </menu>
      </div>
    </div>
  );
}
