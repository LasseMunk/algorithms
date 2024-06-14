/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#FF6363",
				secondary: "#4C1D95",
				ternary: "#38A3A5",
			},
		},
		fontFamily: {
			// Define a custom name for your font family if desired
			courierNew: ["Courier New", "Courier", "Lucida Sans Typewriter", "Lucida Typewriter", "monospace"],
		},
		lineHeight: {
			custom: 2.2, // Custom line-height
		},
		fontWeight: {
			custom: 400, // Custom font-weight
		},
	},
	plugins: [],
};
