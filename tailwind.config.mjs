import { fontFamily } from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
const config = {
	darkMode: ["class"],
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	safelist: ["dark"],
	theme: {
		container: {
			center: true,
			padding: "2rem",
			screens: {
				"2xl": "1400px"
			}
		},
		extend: {
			colors: {
				'emerald': {
					'50': '#F2FCF9',
					'100': '#E6FAF3',
					'200': '#BDF0DC',
					'300': '#9BE8C6',
					'400': '#5AD694',
					'500': '#22c55e',
					'600': '#1AB04F',
					'700': '#13943C',
					'800': '#0C752B',
					'900': '#07591D',
					'950': '#03380F'
				},
				lightpaper: "#F5F5F5",
				paper: "#eaeded",
				alternate: "#fff",
				font: "#282828",
				border: "hsl(var(--border) / <alpha-value>)",
				input: "hsl(var(--input) / <alpha-value>)",
				ring: "hsl(var(--ring) / <alpha-value>)",
				outline: "rgb(231, 229, 228)",
				background: "hsl(var(--background) / <alpha-value>)",
				foreground: "hsl(var(--foreground) / <alpha-value>)",
				primary: {
					DEFAULT: "hsl(var(--primary) / <alpha-value>)",
					foreground: "hsl(var(--primary-foreground) / <alpha-value>)"
				},
				secondary: {
					DEFAULT: "hsl(var(--secondary) / <alpha-value>)",
					foreground: "hsl(var(--secondary-foreground) / <alpha-value>)"
				},
				destructive: {
					DEFAULT: "hsl(var(--destructive) / <alpha-value>)",
					foreground: "hsl(var(--destructive-foreground) / <alpha-value>)"
				},
				muted: {
					DEFAULT: "hsl(var(--muted) / <alpha-value>)",
					foreground: "hsl(var(--muted-foreground) / <alpha-value>)"
				},
				accent: {
					DEFAULT: "hsl(var(--accent) / <alpha-value>)",
					foreground: "hsl(var(--accent-foreground) / <alpha-value>)"
				},
				popover: {
					DEFAULT: "hsl(var(--popover) / <alpha-value>)",
					foreground: "hsl(var(--popover-foreground) / <alpha-value>)"
				},
				card: {
					DEFAULT: "hsl(var(--card) / <alpha-value>)",
					foreground: "hsl(var(--card-foreground) / <alpha-value>)"
				}
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)"
			},
			boxShadow: {
				'custom': '0px 2px 3px 0 rgba(0,0,0,0.2)'
			},
			fontFamily: {
				sans: [...fontFamily.sans]
			},
			fontSize: {
				'xxs': '12px'
			},
			typography: (theme) => ({
				DEFAULT: {
					css: {
						maxWidth: '100%', // Set max-width of prose to 100%
					},
				},
			}),
		}
	},
	plugins: [
		function ({ addUtilities }) {
			const newUtilities = {
				'.center': {
					width: '100%',
					maxWidth: '1290px',
					marginLeft: 'auto',
					marginRight: 'auto',
					padding: '16px'
				},
				'.amazonchip': {
					backgroundColor: 'transparent',
					borderRadius: '4px',
					fontSize: '13px',
					border: '1px solid #d5d9d9',
					boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
				},
				'.amazonchipfilter': {
					borderRadius: '50px',
					fontSize: '13px',
					border: '1px solid #d5d9d911',
					boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
				},
				'.clip': {
					clipPath: 'polygon(30% 0, 100% 0%, 100% 100%, 0% 100%)'
				},
				'.twolines': {
					whiteSpace: 'initial',
					textOverflow: 'ellipsis',
					display: '-webkit-box',
					'-webkit-box-orient': 'vertical',
					'-webkit-line-clamp': '2',
					overflow: 'hidden'
				},
				'.oneline': {
					width: '100%',
					overflow: 'hidden',
					whiteSpace: 'nowrap',
					textOverflow: 'ellipsis'
				}
			}
			addUtilities(newUtilities, ['responsive', 'hover'])
		},
		require('@tailwindcss/typography')
	]
};

export default config;
