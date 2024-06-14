import { useState } from "react";
import { Button } from "../components";

export const FizzBuzz = () => {
	const [fizzBuzz, setFizzBuzz] = useState<string[]>([]);

	const calculateFizzBuzz = (number: number) => {
		const fb = [];
		if (number <= 0) {
			fb.push("Please enter a number greater than 0");
			setFizzBuzz(fb);
			return;
		}
		for (let i = 1; i <= number; i++) {
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

	return (
		<div className='flex flex-col h-full gap-4'>
			<h1 className='font-courierNew text-xl font-bold'>FizzBuzz</h1>
			<p className='font-courierNew'>FizzBuzz is a program that prints the numbers from 1 to n.</p>
			<p className='font-courierNew'>For multiples of 3, it prints “Fizz” instead of the number.</p>
			<p className='font-courierNew'>For the multiples of five, it prints “Buzz”.</p>
			<p className='font-courierNew'>For numbers which are multiples of both three and five, it prints “FizzBuzz”.</p>

			<pre className='font-courierNew'>const lala = </pre>
			<Button text='output fizzbuzz result' onClick={() => calculateFizzBuzz(0)} />
			<div className='flex flex-col overflow-y-auto'>
				{fizzBuzz.map((item, index) => (
					<p key={index}>{item}</p>
				))}
			</div>
		</div>
	);
};
