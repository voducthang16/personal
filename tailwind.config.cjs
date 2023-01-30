/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                primary: '#4169e1',
                primary_rgba: 'rgba(64, 104, 224, 0.9)',
                secondary: '#66b95c',
            },
        },
    },
    plugins: [],
};
