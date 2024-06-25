import Markdown from "react-markdown";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { github as colorStyle } from "react-syntax-highlighter/dist/esm/styles/hljs";

export type MarkdownWrapperProps = {
	markdownContent: string;
};

export const MarkdownWrapper = (props: MarkdownWrapperProps) => {
	const { markdownContent } = props;
	return (
		<Markdown
			// remarkPlugins={[remarkMath]}
			// rehypePlugins={[rehypeKatex]}
			className='whitespace-pre-wrap'
			components={{
				code(props) {
					const { children, className, ...rest } = props;
					const match = /language-(\w+)/.exec(className || "");
					return match ? (
						<SyntaxHighlighter PreTag='div' children={String(children).replace(/\n$/, "")} language={match[1]} style={colorStyle} />
					) : (
						<code {...rest} className={className}>
							{children}
						</code>
					);
				},
			}}
		>
			{markdownContent}
		</Markdown>
	);
};
