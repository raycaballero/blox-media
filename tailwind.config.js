/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,jsx,ts,tsx}",
        "./src/components/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                "blox-magenta": "#9D28A7",
                "blox-indigo": "#2D42FF",
            },
        },
    },
    plugins: [],
}
