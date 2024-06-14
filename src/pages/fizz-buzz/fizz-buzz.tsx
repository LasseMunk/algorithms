import { useEffect, useState } from "react";
import { Button } from "../components";
import Markdown from "react-markdown";
import description from "./fizz-buzz-description-1.md?raw";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { github as colorStyle } from "react-syntax-highlighter/dist/esm/styles/hljs";

export const FizzBuzz = () => {
	const [fizzBuzz, setFizzBuzz] = useState<string[]>([]);

	const calculateFizzBuzz = (iterations: number) => {
		const fb = [];
		if (iterations <= 0) {
			fb.push("Please enter a number greater than 0");
			setFizzBuzz(fb);
			return;
		}
		for (let i = 1; i <= iterations; i++) {
			if (i % 3 === 0 && i % 5 === 0) {
				fb.push("FizzBuzz");
			} else if (i % 3 === 0) {
				fb.push("Fizz");
			} else if (i % 5 === 0) {
				fb.push("Buzz");
			} else {
				fb.push(i.toString());
			}
		}
		setFizzBuzz(fb);
	};

	const [markdownContent] = useState(description);
	useEffect(() => {
		console.log(markdownContent);
	}, [markdownContent]);
	return (
		<div className='flex flex-col h-full gap-4'>
			<Markdown
				// remarkPlugins={[remarkMath]}
				// rehypePlugins={[rehypeKatex]}
				className='font-courierNew whitespace-pre-wrap'
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
			<Button text='output fizzbuzz result' onClick={() => calculateFizzBuzz(0)} />
			<div className='flex flex-col overflow-y-auto'>
				{fizzBuzz.map((item, index) => (
					<p key={index}>{item}</p>
				))}
			</div>
		</div>
	);
};
