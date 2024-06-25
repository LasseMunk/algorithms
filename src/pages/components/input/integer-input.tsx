import { useCallback } from "react";

export type IntegerInputProps = {
	value: number;
	setValue: (value: number) => void;
};

export const InputInteger = (props: IntegerInputProps) => {
	const { value, setValue } = props;

	const handleSetValue = useCallback(
		(newValue: string) => {
			// remove leading zero in string
			setValue(Number(newValue.replace(/^0+/, "")));
		},
		[setValue]
	);

	return (
		<input
			type='number'
			inputMode='numeric'
			pattern='[0-9]*'
			size={3}
			min={0}
			max={100}
			className='items-center border max-w-12 border-gray-300 bg-gray-50  focus:outline-gray-600  rounded-md p-1 focus:text-primary '
			value={value}
			onChange={(e) => handleSetValue(e.target.value)}
		/>
	);
};
