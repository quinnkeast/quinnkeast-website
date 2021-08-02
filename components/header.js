import Link from "next/link";

const menuItems = [
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

// This is lazy duplication
const mobileMenuLink = (label, path) => (
  <li key={path} className="pb-0">
    <Link href={`/${path}`}>
      <a className="border-0 hover:text-white">{label}</a>
    </Link>
  </li>
);

export default function Header() {
  return (
    <>
      <div className="grid md:hidden py-4 px-4 bg-black">
        <Link href="/">
          <a className="font-medium border-0 text-sm text-tan">Quinn Keast</a>
        </Link>
        <div className="col-2">
          <menu className="flex flex-wrap gap-x-2 gap-y-0 list-none px-0 my-0 text-black-lighter text-sm text-tan leading-snug">
            {menuItems.map((item) => mobileMenuLink(item.label, item.path))}
          </menu>
        </div>
      </div>
      <div className="container mx-auto px-4 xl:max-w-screen-xl">
        <div className="hidden md:grid md:grid-cols-3 md:mt-16 mb-4 md:mb-24">
          <div className="col-1">
            <Link href="/">
              <a className="font-medium border-0">Quinn Keast</a>
            </Link>
          </div>
          <div className="col-2">
            <menu className="grid grid-flow-col gap-10 list-none px-0 my-0 text-black-lighter">
              {menuItems.map((item) => menuLink(item.label, item.path))}
            </menu>
          </div>
        </div>
      </div>
    </>
  );
}
