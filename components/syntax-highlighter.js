import React from "react";
import Highlight, { defaultProps } from "prism-react-renderer";

export default function SyntaxHighlighter({ children }) {
  const code = children.props.children;
  const language = children.props.className?.replace("language-", "").trim();

  return (
    <Highlight {...defaultProps} code={code} language={language}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <div className="-mx-2 md:-mx-8 my-4 md:my-6 whitespace-normal">
          <pre
            className={`${className} p-4 md:p-8 rounded whitespace-pre-wrap leading-relaxed`}
            style={{ ...style }}
          >
            {tokens.slice(0, -1).map((line, i) => (
              <div {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        </div>
      )}
    </Highlight>
  );
}
