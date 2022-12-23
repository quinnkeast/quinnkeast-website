import Link from "next/link";

export default function Footer() {
  return (
    <div className="grid md:grid-cols-3 mb-4 md:mb-8 border-t border-black border-opacity-10 mt-8 md:mt-16 pt-4 md:pt-12">
      <div className="col-1">
        <h4>Contact</h4>
      </div>
      <div className="md:col-span-2 mb-4 md:mb-8">
        <p className="text-base md:text-2xl mb-2 md:mb-12 font-medium">
          <a href="mailto:hello@quinnkeast.com">hello@quinnkeast.com</a>
        </p>
        <div className="grid md:grid-cols-3">
          <div className="col-span-1">
            <h5 className="text-sm md:text-base">Semi-Social</h5>
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
            <h5 className="text-sm md:text-base">Other fun stuff</h5>
            <ul className="list-none ml-0 mt-2">
              <li>
                <a href="https://uxcopy.quinnkeast.com" target="_blank">
                  Product Language Framework
                </a>
              </li>
              <li>
                <a href="https://thebrandthing.quinnkeast.com" target="_blank">
                  A Primer: What is this Brand Thing Anyway?
                </a>
              </li>
              <li>
                <a href="https://manipulativepatterns.com" target="_blank">
                  Manipulative Patterns
                </a>
              </li>
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
              Impressum
            </Link>
          </li>
          <li>
            <Link href="/privacy">
              Privacy Policy
            </Link>
          </li>
        </menu>
      </div>
    </div>
  );
}
