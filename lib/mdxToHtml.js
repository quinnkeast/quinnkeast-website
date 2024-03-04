import { bundleMDX } from "mdx-bundler";
import rehypeHighlight from "rehype-highlight";

export default async function mdxToHtml(content) {
  try {
    const { code } = await bundleMDX({
      source: content,
      mdxOptions(options, frontmatter) {
        options.rehypePlugins = [
          ...(options.rehypePlugins ?? []),
          rehypeHighlight,
        ];
        return options;
      },
    });
    return code;
  } catch (error) {
    console.error("Error processing MDX:", error);
    return null;
  }
}
