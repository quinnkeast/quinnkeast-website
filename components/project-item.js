import Link from "next/link";

export default function ProjectItem({ project, hero }) {
  return (
    <div class="">
      <Link href="/projects/marley-spoon-mobile-experience/">
        <div class="">
          {/*<div style="width: 100%; padding-bottom: 140%;"></div>*/}
          <img src={project.thumbnail.url} alt={project.title} />
        </div>
      </Link>
      <h3>
        <Link href={`/projects/${project.slug}`}>{project.title}</Link>
      </h3>
      <p>{project.subtitle}</p>
      {project.restricted && (
        <div class="private-tag">
          <span class="lock">🔒</span> Limited access
        </div>
      )}
    </div>
  );
}
