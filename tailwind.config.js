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
                "blox-pink": "#ED28C8",
                "blox-gray": "#2B2B2B",
            },
            borderRadius: {
                "8xl": "4rem",
            },
            width: {
                "160": "40rem",
            },
            height: {
                "160": "40rem",
            },
        },
    },
    plugins: [],
}
