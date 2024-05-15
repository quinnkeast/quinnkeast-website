import fetch from "node-fetch";
import fs from "fs";
import path from "path";
import dotenv from "dotenv";

function loadEnvConfig() {
  const envFiles = [
    ".env",
    ".env.local",
    ".env.development",
    ".env.production",
  ];

  envFiles.forEach((file) => {
    const filePath = path.resolve(file);
    if (fs.existsSync(filePath)) {
      dotenv.config({ path: filePath });
    }
  });

  // Load environment-specific file based on NODE_ENV if exists
  if (process.env.NODE_ENV) {
    const envSpecificFile = `.env.${process.env.NODE_ENV}`;
    const envSpecificPath = path.resolve(envSpecificFile);
    if (fs.existsSync(envSpecificPath)) {
      dotenv.config({ path: envSpecificPath });
    }
  }
}

// Load available environment config
loadEnvConfig();

const REPO_URL = `https://api.github.com/repos/${process.env.GITHUB_USERNAME}/${process.env.GITHUB_PROJECTS_REPO}/contents/projects`;
const OUTPUT_DIR = path.resolve("temp-mdx-files");

async function fetchMdxFiles() {
  const response = await fetch(REPO_URL, {
    method: "GET",
    headers: {
      Authorization: `token ${process.env.GITHUB_TOKEN}`,
      Accept: "application/vnd.github.v3+json",
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch .mdx files: ${response.statusText}`);
  }

  const files = await response.json();
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR);
  }

  for (const file of files) {
    if (file.name.endsWith(".mdx")) {
      const fileResponse = await fetch(file.download_url);
      const content = await fileResponse.text();
      fs.writeFileSync(path.join(OUTPUT_DIR, file.name), content);
    }
  }
}

fetchMdxFiles().catch(console.error);
