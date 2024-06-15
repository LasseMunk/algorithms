export type IntegerInputProps = {
	value: number;
	setValue: (value: number) => void;
};

export const InputInteger = (props: IntegerInputProps) => {
	const { value, setValue } = props;

	return (
		<input
			type='number'
			min={0}
			max={100}
			className='items-center border max-w-12 border-gray-300 bg-gray-50  focus:outline-gray-600  rounded-md p-1 focus:text-primary '
			value={value}
			onChange={(e) => setValue(Number(e.target.value))}
		/>
	);
};
