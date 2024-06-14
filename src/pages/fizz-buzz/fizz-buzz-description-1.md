**FizzBuzz** is a program that **prints the numbers from 1 to n**

For multiples of 3 - it prints “Fizz” instead of the number

For the multiples of 5 - it prints “Buzz”

For numbers which are multiples of both 3 and 5 - it prints “FizzBuzz”

```typescript
let fb: string[] = [];

const calculateFizzBuzz = (n: number) => {
	fb = [];

	if (n <= 0) {
		fb.push("Please enter a number greater than 0");
		return;
	}

	for (let i = 1; i <= n; i++) {
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
};
```
