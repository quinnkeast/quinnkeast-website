import Link from "next/link";

export default function Footer() {
  return (
    <div className="grid md:grid-cols-3 mb-4 md:mb-8 border-t border-black/10 mt-8 md:mt-16 pt-4 md:pt-12">
      <div className="col-1">
        <h4>Contact</h4>
      </div>
      <div className="md:col-span-2 mb-4 md:mb-8">
        <p className="text-base md:text-2xl mb-2 md:mb-12 font-medium">
          <a href="mailto:hey@quinnkeast.com">hey@quinnkeast.com</a>
        </p>
        <div className="grid md:grid-cols-3">
          <div className="col-span-1">
            <h5 className="text-sm md:text-base font-normal">Semi-social</h5>
            <ul className="list-none ml-0 mt-2">
              <li>
                <a href="https://www.github.com/quinnkeast/" target="_blank">
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/quinn-keast/"
                  target="_blank"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://bsky.app/profile/quinnkeast.com"
                  target="_blank"
                >
                  Bluesky
                </a>
              </li>
              <li>
                <a href="http://twitter.com/quinnkeast" target="_blank">
                  Twitter
                </a>{" "}
                <span className="rounded-lg inline-block bg-black-lighter/10 text-black-lighter text-opacity-75 text-xs px-2 ml-1 pb-2px">
                  Abandoned
                </span>
              </li>
              <li>
                <a href="https://medium.com/@quinnkeast" target="_blank">
                  Medium
                </a>{" "}
                <span className="rounded-lg inline-block bg-black-lighter/10 text-black-lighter text-opacity-75 text-xs px-2 ml-1 pb-2px">
                  Archive only
                </span>
              </li>
            </ul>
          </div>
          <div className="col-span-2">
            <h5 className="text-sm md:text-base font-normal">
              Projects &amp; fun stuff
            </h5>
            <ul className="list-none ml-0 mt-2">
              <li>
                <a href="/brand-book">A book on brand for product teams</a>
              </li>
              <li>
                <a href="https://uxlanguage.com" target="_blank">
                  A UX language framework
                </a>
              </li>
              <li>
                <a href="https://thebrandthing.quinnkeast.com" target="_blank">
                  A primer: What is this Brand Thing Anyway?
                </a>
              </li>
              <li>
                <a href="http://www.awyisser.com" target="_blank">
                  An “aw yiss” comic generator
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/quinnkeast/quinnkeast-website/"
                  target="_blank"
                >
                  The source code for this website
                </a>
              </li>
              <li>
                <a href="https://caribou.co" target="_blank">
                  A design consultancy called Caribou
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="my-8 text-xs flex">
        <span className="mr-4">© Quinn Keast</span>
        <menu className="list-none m-0 p-0 grid grid-flow-col gap-3">
          <li className="text-xs">
            <Link href="/impressum">Impressum</Link>
          </li>
          <li className="text-xs">
            <Link href="/privacy">Privacy Policy</Link>
          </li>
          <li className="text-xs">
            <Link href="/ai-policy">AI Policy</Link>
            <span className="text-xxs leading-none ml-1 px-1 pb-0.5 rounded-lg inline-block bg-black text-tan">
              New
            </span>
          </li>
        </menu>
      </div>
    </div>
  );
}
