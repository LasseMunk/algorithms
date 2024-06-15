import { useEffect, useState } from "react";
import { Divider, InputInteger, MarkdownWrapper } from "../components";
import description from "./fizz-buzz-description-1.md?raw";

export const FizzBuzz = () => {
	const [fizzBuzz, setFizzBuzz] = useState<string[]>([]);
	const [iterations, setIterations] = useState<number>(0);
	const [markdownContent] = useState<string>(description);

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

	useEffect(() => {
		calculateFizzBuzz(iterations);
	}, [iterations]);

	const handleInputChange = (value: number) => {
		const clampedInput = Math.min(Math.max(value, 0), 100);
		setIterations(clampedInput);
	};

	return (
		<div className='flex flex-col h-full gap-4 overflow-y-auto'>
			<MarkdownWrapper markdownContent={markdownContent} />
			<Divider />
			<div className='flex flex-row gap-4 items-center'>
				<InputInteger value={iterations} setValue={handleInputChange} />
				<p>Enter a number between 1 - 100 to calculate FizzBuzz</p>
				<Divider />
			</div>
			<div className='flex flex-col  '>
				{fizzBuzz.map((item, index) => (
					<p key={index} className={item === "Fizz" || item === "Buzz" || item === "FizzBuzz" ? "text-primary" : ""}>
						{item}
					</p>
				))}
			</div>
		</div>
	);
};
