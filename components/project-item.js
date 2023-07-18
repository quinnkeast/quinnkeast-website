import Link from "next/link";

export default function ProjectItem({ project, hero }) {
  return (
    <div className="mb-8 md:mb-0">
      <Link href={`/projects/${project.slug}`}>
        <div className="">
          {/*<div style="width: 100%; padding-bottom: 140%;"></div>*/}
          <img src={project.thumbnail.url} alt={project.title} />
        </div>
      </Link>
      <h3 className="leading-tight text-lg font-medium mb-0">
        <Link href={`/projects/${project.slug}`}>{project.title}</Link>
      </h3>
      <p className="mt-3 text-base leading-tight">{project.subtitle}</p>
      {/* project.restricted && (
              <div className="text-xs text-black-lighter inline-block">
          <span className="lock">🔒</span> Limited access
        </div>
      ) */}
    </div>
  );
}
