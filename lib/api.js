import fs from "fs";
import { join } from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

const postsDirectory = join(process.cwd(), "_posts");
const projectsDirectory = join(process.cwd(), "_projects");
const favouritesDirectory = join(process.cwd(), "_favourites");
const talksDirectory = join(process.cwd(), "_talks");
const booksDirectory = join(process.cwd(), "_books");

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
  const time = readingTime(content);

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

    // Append the calculated reading time
    items["readingTime"] = time;
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

export function getProjectsSlugs() {
  return fs.readdirSync(projectsDirectory);
}

export function getProjectBySlug(slug, fields = []) {
  const realSlug = slug.replace(/\.mdx$/, "");
  const fullPath = join(projectsDirectory, `${realSlug}.mdx`);
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

    if (data[field]) {
      items[field] = data[field];
    }
  });

  return items;
}

export function getAllProjects(fields = []) {
  const slugs = getProjectsSlugs();
  // TODO create two separate arrays, one with full projects and one with "bits"
  const projects = slugs
    .map((slug) => getProjectBySlug(slug, fields))
    // sort projects by date in descending order
    .sort((project1, project2) => (project1.date > project2.date ? -1 : 1));
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
  const time = readingTime(content);

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
    
    // Append the calculated reading time
    items["readingTime"] = time;
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