import Link from "next/link";

export default function ProjectNavigation({ nextProject, prevProject }) {
  return (
    <nav className="grid grid-cols-2 gap-4 md:max-w-lg mx-auto mt-2">
      <div className="flex flex-col">
        {prevProject && (
          <Link
            href={`/craft/${prevProject.slug}`}
            className="text-sm border-none leading-tight"
          >
            <span className="text-black-lighter text-sm">Previous</span>
            <br />
            <span className="font-medium">{prevProject.title}</span>
          </Link>
        )}
      </div>
      <div className="flex flex-col text-right leading-none">
        {nextProject && (
          <Link
            href={`/craft/${nextProject.slug}`}
            className="text-sm border-none"
          >
            <span className="text-black-lighter text-sm">Next</span>
            <br />
            <span className="font-medium">{nextProject.title}</span>
          </Link>
        )}
      </div>
    </nav>
  );
}
