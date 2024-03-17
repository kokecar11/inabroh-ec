/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: '#004AAD',
				secondary: '#FFD700',
				accent: '#D9D9D9',
			},
		},
	},
	plugins: [],
}
