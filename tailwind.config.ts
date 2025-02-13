import type { Config } from "tailwindcss";

export default {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        container: {
            padding: "20px",
        },
        extend: {
            fontFamily: {
                body: ["Turret_Road", "sans-serif"],
            },
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                "terminal-green": "#4af626",
            },
        },
    },
    plugins: [],
} satisfies Config;
