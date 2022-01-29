import React from "react";
import Highlight, { defaultProps } from "prism-react-renderer";

export default function SyntaxHighlighter({ children }) {
  const code = children.props.children;
  const language = children.props.className?.replace("language-", "").trim();
  
  return (
    <Highlight {...defaultProps} code={code} language={language}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <div>
          <pre className={className} style={{ ...style }}>
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
