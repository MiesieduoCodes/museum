/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // Enable dark mode with the 'class' strategy
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)", // Light mode background
        foreground: "var(--foreground)", // Light mode text
        darkBackground: "var(--dark-background)", // Dark mode background
        darkForeground: "var(--dark-foreground)", // Dark mode text
      },
      // Optionally, add custom font families, spacing, etc.
    },
  },
  plugins: [],
};
