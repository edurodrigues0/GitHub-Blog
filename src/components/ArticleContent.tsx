import React from "react";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

interface ArticleContentProps {
  children: string;
}

export const ArticleContent: React.FC<ArticleContentProps> = ({ children }) => {
  return (
    <article className="flex flex-col gap-6 text-text mt-[7.5rem] mx-auto w-[54rem] px-8 py-10 overflow-hidden max-sm:w-full">
      <ReactMarkdown
        children={children}
        className="whitespace-pre-wrap"
        components={{
          p: (props) => <p className="text-text font-normal text-sm" {...props} />,
          a: (props) => <a className="text-blue font-normal text-sm hover:underline" target="_blank" {...props} />,
          strong: (props) => <strong className="text-text font-bold text-sm" {...props} />,
          ul: (props) => <ul className="ml-5" {...props} />,
          img: (props) => <img className="max-w-full object-cover" {...props} />,
          h1: (props) => <h1 className="text-text font-bold text-2xl" {...props} />,
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || "")

            const meta = node?.data?.meta as string | undefined;

            return !inline && match ? (
              <SyntaxHighlighter
                language={match[1]}
                PreTag="div"
                wrapLines={!!meta}
                useInlineStyles
                children={String(children).replace(/\s$/g, "")}
                style={
                  {
                    ...oneDark,
                    'code[class*="language-"]': {
                      ...oneDark['code[class*="language-"]'],
                      backgroundColor: "#112131",
                      color: "#D5DCE3",
                    },
                    'pre[class*="language-"]': {
                      ...oneDark['pre[class*="language-"]'],
                      backgroundColor: "#112131",
                      color: "#D5DCE3",
                    },
                  } as any
                }
                {...props}
              />
            ) : (
              <code {...props} className={className}>
                {children}
              </code>
            )
          },
        }}
      />
    </article>
  );
};
