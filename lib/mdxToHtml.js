import { bundleMDX } from "mdx-bundler";
import remarkPrism from "remark-prism";

export default async function mdxToHtml(content) {
  const { code } = await bundleMDX({
    source: content,
  });
  return code;
}