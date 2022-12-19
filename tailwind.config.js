/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        extend: {
            backgroundImage: {
                'header-desktop':
                    "url('./src/assets/images/bg-header-desktop.svg')",
                'header-mobile':
                    "url('./src/assets/images/bg-header-mobile.svg')",
            },
            colors: {
                /* Primary */
                'dark-cyan': 'hsl(180, 29%, 50%)',

                'dark-cyan-shadow': 'hsla(180, 29%, 50%, 0.2)',

                /* Neutral */
                'grayish-cyan': {
                    DEFAULT: 'hsl(180, 31%, 95%)',
                    'light-bg': 'hsl(180, 52%, 96%)',
                    dark: 'hsl(180, 8%, 52%)',
                    'very-dark': 'hsl(180, 14%, 20%)',
                },
            },
        },
    },
    plugins: [],
};
