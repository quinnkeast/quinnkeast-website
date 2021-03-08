import Link from "next/link";
import DateFormatter from "../components/date-formatter";

export default function PostItem({ post, hero }) {
  return (
    <>
      <div className="col-span-1 text-right">
        <span className="text-sm text-black-lighter inline-block leading-snug pr-8 mt-3.5">
          <DateFormatter dateString={post.date} />
        </span>
      </div>
      <div className="col-span-2 col-start-2 border-b border-black border-opacity-10 mt-3 pb-3 flex flex-row justify-between">
        <h2 className="m-0 text-sm leading-snug font-serif font-normal pr-8 subpixel-antialiased">
          {hero && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="#ff0000"
              className="w-4 inline-block mr-1 icon-shift"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          )}
          {!post.external && (
            <Link href={`/writing/${post.slug}`}>
              <a className="border-none">{post.title}</a>
            </Link>
          )}
          {post.external && (
            <a href={post.external.url} className="border-none" target="_blank">
              {post.title}
            </a>
          )}
        </h2>
        {post.external && (
          <span className="text-xs uppercase text-black-lighter flex-shrink-0 publisher-badge">
            {post.external.publisher}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="#8F897C"
              className="w-3 ml-1 inline-block icon-shift"
            >
              <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
              <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
            </svg>
          </span>
        )}
      </div>
    </>
  );
}
