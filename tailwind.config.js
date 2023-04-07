const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
        },
    },

    daisyui: {
        themes: [
            {
                mytheme: {
                    primary: "#497174",
                    secondary: "#D6E4E5",
                    accent: "#37cdbe",
                    neutral: "#EFF5F5",
                    "base-100": "#EFF5F5",
                },
            },
            "dark",
            "forest",
            "emerald",

        ],
    },

    plugins: [require('@tailwindcss/forms'), require('daisyui')],
};
