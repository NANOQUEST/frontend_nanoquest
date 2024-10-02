/** @type {import('tailwindcss').Config} */
import fluid, { extract, screens, fontSize } from "fluid-tailwind";

module.exports = {
    content: {
        files: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
        extract,
    },
    theme: {
        extend: {},
        screens,
        fontSize,
    },
    plugins: [
        require("tailwindcss-animated"),
        fluid({
            checkSC144: false,
        }),
    ],
};
