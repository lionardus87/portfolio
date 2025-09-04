// /** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/app/**/*.{js,ts,jsx,tsx}",
		"./src/components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				sand: "#deb887",
				cream: "#faebd7",
				offwhite: "#f8f9fa",
				black: "#000000",
				grey: "#6c757d",
				forest: "#4d7c0f",
			},
		},
	},
	plugins: [],
};
