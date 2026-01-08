// import React from 'react'
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

interface CodeBlockProps {
  language: string;
  code: string;
}

const CodeBlock = ({ language, code, }: CodeBlockProps) => {
  return (
    <div className="rounded-lg mb-4 overflow-hidden">
      <SyntaxHighlighter
        language={language}
        style={materialDark}
        showLineNumbers={true}
        customStyle={{
          fontSize: "0.75rem",
          margin: 0,
        }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeBlock;
