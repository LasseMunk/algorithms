export type ButtonProps = {
	text: string;
	onClick: () => void;
	className?: string;
};

export const Button = (props: ButtonProps) => {
	const { text, onClick, className } = props;

	return (
		<button
			onClick={onClick}
			className={`bg-primary text-gray-200 text-sm flex items-center justify-center gap-x-4 p-2 rounded-md  hover:bg-gray-200 hover:text-gray-500
${className}`}
		>
			{text}
		</button>
	);
};
