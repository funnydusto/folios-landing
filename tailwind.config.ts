import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

export default {
    content: ["./src/**/*.{html,js,svelte,ts}"],

    theme: {
        extend: {
            maxWidth: {
                "desktop": "832px"
            },
            screens: {
                "desktop": "832px"
            }
        },
        fontFamily: {
            "sans": ["Inter", "sans-serif"],
            "display": ["Plus Jakarta Sans", "sans-serif"]
        },
    },

    plugins: [typography]
} as Config;