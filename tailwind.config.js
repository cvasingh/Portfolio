/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './hooks/**/*.{js,ts,jsx,tsx,mdx}',
        './hoc/**/*.{js,ts,jsx,tsx,mdx}',
        './utils/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    darkMode: ['class', '[data-theme="dark"]'],
    theme: {
        extend: {
            colors: {
                // Custom colors used in the project
                'timberWolf': '#d4d4d8',
                'silver': '#a1a1aa',
                'night': '#0f0f0f',
                'jet': '#333333',
            },
            fontFamily: {
                'beckman': ['Beckman', 'sans-serif'],
                'poppins': ['Poppins', 'sans-serif'],
            },
            screens: {
                'xs': '400px',
            },
            textGradient: {
                'blue-text-gradient': 'linear-gradient(90deg, #4f46e5 0%, #06b6d4 100%)',
                'green-text-gradient': 'linear-gradient(90deg, #10b981 0%, #34d399 100%)',
                'pink-text-gradient': 'linear-gradient(90deg, #ec4899 0%, #f472b6 100%)',
            },
        },
    },
    plugins: [],
}