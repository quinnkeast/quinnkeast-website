import SyntaxHighlighter from "./syntax-highlighter";
import { getMDXComponent } from "mdx-bundler/client";
import { useMemo } from "react";

export default function PostBody({ content, wide }) {
  const maxWidth = wide ? "max-w-3xl" : "max-w-lg";
  const Component = useMemo(() => getMDXComponent(content), [content]);

  return (
    <div className={`${maxWidth} mx-auto py-2 md:py-8 post-content`}>
      <Component
        components={{
          pre: SyntaxHighlighter,
        }}
      />
    </div>
  );
}
