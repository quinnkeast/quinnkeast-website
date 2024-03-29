import Link from "next/link";

const menuItems = [
  {
    label: "Writing",
    path: "writing",
  },
  {
    label: "Craft",
    path: "craft",
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
    label: "Reading",
    path: "reading",
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
  <li key={path} className="mb-0 pb-0">
    <Link href={`/${path}`} className="border-0 hover:text-black">
      {label}
    </Link>
  </li>
);

// This is lazy duplication
const mobileMenuLink = (label, path) => (
  <li key={path} className="pb-0">
    <Link href={`/${path}`} className="border-0 hover:text-white">
      {label}
    </Link>
  </li>
);

export default function Header() {
  return (
    <>
      <div className="grid md:hidden py-4 px-4 bg-black">
        <Link href="/" className="font-medium border-0 text-sm text-tan">
          Quinn Keast
        </Link>
        <div className="col-span-2">
          <menu className="flex flex-wrap gap-x-2 gap-y-0 list-none px-0 my-0 text-black-lighter text-sm leading-snug">
            {menuItems.map((item) => mobileMenuLink(item.label, item.path))}
          </menu>
        </div>
      </div>
      <div className="container mx-auto px-4 xl:max-w-screen-xl">
        <div className="hidden md:grid md:grid-cols-3 md:mt-16 mb-4 md:mb-24">
          <div className="col-span-1">
            <Link href="/" className="font-medium border-0">
              Quinn Keast
            </Link>
          </div>
          <div className="col-span-2">
            <menu className="flex flex-row md:flex-wrap md:gap-x-4 xl:gap-x-10 list-none px-0 my-0 text-black-lighter">
              {menuItems.map((item) => menuLink(item.label, item.path))}
            </menu>
          </div>
        </div>
      </div>
    </>
  );
}
