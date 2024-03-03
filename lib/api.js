import fs from "fs";
import { join } from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

const postsDirectory = join(process.cwd(), "_posts");
const projectsDirectory = join(process.cwd(), "_projects");
const favouritesDirectory = join(process.cwd(), "_favourites");
const talksDirectory = join(process.cwd(), "_talks");
const booksDirectory = join(process.cwd(), "_books");

// quinnkeast-projects repo locally
const localProjectsDirectory = join(
  process.cwd(),
  "../quinnkeast-projects",
  "projects"
);

// Get all slugs for files in the posts directory
export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

// Get a specific post's content by a given slug
export function getPostBySlug(slug, fields = []) {
  const realSlug = slug.replace(/\.mdx$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const items = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === "slug") {
      items[field] = realSlug;
    }
    if (field === "content") {
      items[field] = content;
    }
    if (field === "readingTime") {
      const time = readingTime(content);
      items["readingTime"] = time;
    }
    if (data[field]) {
      items[field] = data[field];
    }
  });
  return items;
}

export function getAllPosts(fields = []) {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}

function getLocalProjects() {
  return fs.readdirSync(localProjectsDirectory);
}

export async function getProjectsSlugs() {
  // simulate async fetch and instead read local files
  // requires the quinnkeast-projects repo
  if (
    process.env.NODE_ENV === "development" &&
    process.env.LOCAL_PROJECTS === "true"
  ) {
    const data = getLocalProjects();
    if (!data) {
      throw new Error(`Something went wrong fetching local projects`);
    }
    return data;
  } else {
    const url = `https://api.github.com/repos/${process.env.GITHUB_USERNAME}/${process.env.GITHUB_PROJECTS_REPO}/contents/projects`;

    const response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `token ${process.env.GITHUB_TOKEN}`,
        Accept: "application/vnd.github.v3+json",
      },
    });

    if (!response.ok) {
      throw new Error(
        `GitHub API responded with a status of ${response.status}`
      );
    }

    const data = await response.json();

    // Extract slugs from the response
    return data.map((file) => file.name);
  }
}

export async function getProjectBySlug(slug, fields = []) {
  const realSlug = slug.replace(/\.mdx$/, "");

  let fileContents;

  // simulate async fetch and instead read local files
  // requires the quinnkeast-projects repo
  if (
    process.env.NODE_ENV === "development" &&
    process.env.LOCAL_PROJECTS === "true"
  ) {
    const fullPath = join(localProjectsDirectory, `${realSlug}.mdx`);
    fileContents = fs.readFileSync(fullPath, "utf8");
  } else {
    const url = `https://api.github.com/repos/${process.env.GITHUB_USERNAME}/${process.env.GITHUB_PROJECTS_REPO}/contents/projects/${realSlug}.mdx`;

    const response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `token ${process.env.GITHUB_TOKEN}`,
        Accept: "application/vnd.github.v3.raw",
      },
    });

    if (!response.ok) {
      throw new Error(
        `GitHub API responded with a status of ${response.status}`
      );
    }
    fileContents = await response.text();
  }

  const { data, content } = matter(fileContents);

  const items = {};
  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === "slug") {
      items[field] = realSlug;
    }
    if (field === "content") {
      items[field] = content;
    }

    if (data[field]) {
      items[field] = data[field];
    }
  });

  return items;
}

export async function getAllProjects(fields = []) {
  const slugs = await getProjectsSlugs();
  const projectPromises = slugs.map((slug) => getProjectBySlug(slug, fields));
  const projects = await Promise.all(projectPromises);

  projects.sort((project1, project2) => {
    const project1date = new Date(project1.date).getTime();
    const project2date = new Date(project2.date).getTime();

    return project2date - project1date;
  });

  return projects;
}

export function getAllFavourites(fields = []) {
  const fullPath = join(favouritesDirectory, `favourites.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  const { data, content } = matter(fileContents);

  const items = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (data[field]) {
      items[field] = data[field];
    }
  });

  return items;
}

export function getAllBooks(fields = []) {
  const fullPath = join(booksDirectory, `books.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  const { data, content } = matter(fileContents);

  const items = data;

  return items;
}

export function getTalksSlugs() {
  return fs.readdirSync(talksDirectory);
}

export function getTalkBySlug(slug, fields = []) {
  const realSlug = slug.replace(/\.mdx$/, "");
  const fullPath = join(talksDirectory, `${realSlug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const items = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === "slug") {
      items[field] = realSlug;
    }
    if (field === "content") {
      items[field] = content;
    }
    if (field === "readingTime") {
      const time = readingTime(content);
      items["readingTime"] = time;
    }
    if (data[field]) {
      items[field] = data[field];
    }
  });

  return items;
}

export function getAllTalks(fields = []) {
  const slugs = getTalksSlugs();

  const talks = slugs
    .map((slug) => getTalkBySlug(slug, fields))
    // sort talks by date in descending order
    .sort((talk1, talk2) => (talk1.date > talk2.date ? -1 : 1));
  return talks;
}
