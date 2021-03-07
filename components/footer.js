import Link from "next/link";

export default function Footer() {
  return (
    <div className="grid md:grid-cols-3 mt-8 pt-8 mb-8 border-t border-black border-opacity-10 mt-16 pt-12">
      <div className="col-1">
        <h4>Contact</h4>
      </div>
      <div className="md:col-span-2 mb-8">
        <p className="text-2xl mb-12 font-medium">
          <a href="mailto:hello@quinnkeast.com">hello@quinnkeast.com</a>
        </p>
        <div className="grid md:grid-cols-3">
          <div className="col-span-1">
            <h5>Semi-Social</h5>
            <ul className="list-none ml-0 mt-2">
              <li>
                <a
                  href="https://www.linkedin.com/in/quinn-keast/"
                  target="_blank"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="http://twitter.com/quinnkeast" target="_blank">
                  Twitter
                </a>
              </li>
              <li>
                <a href="https://medium.com/@quinnkeast" target="_blank">
                  Medium
                </a>
              </li>
            </ul>
          </div>
          <div className="col-span-1">
            <h5>Other fun stuff</h5>
            <ul className="list-none ml-0 mt-2">
              <li>
                <a href="https://caribou.co" target="_blank">
                  Caribou
                </a>
              </li>
              <li>
                <a href="http://www.awyisser.com" target="_blank">
                  Awyisser
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="my-8 text-xs flex">
        <span className="mr-4">© Quinn Keast</span>
        <menu className="list-none m-0 p-0 grid grid-flow-col gap-2">
          <li>
            <Link href="/impressum">
              <a>Impressum</a>
            </Link>
          </li>
          <li>
            <Link href="/privacy">
              <a>Privacy Policy</a>
            </Link>
          </li>
        </menu>
      </div>
    </div>
  );
}
