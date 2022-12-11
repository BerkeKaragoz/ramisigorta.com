/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
   theme: {
      extend: {
         colors: {
            // Using modern `rgb`
            primary: "rgb(var(--color-primary) / <alpha-value>)",
            secondary: "rgb(var(--color-secondary) / <alpha-value>)",
            accent: "rgb(var(--color-accent) / <alpha-value>)",
            ternary: "rgb(var(--color-ternary) / <alpha-value>)",
         },
      },
   },
   plugins: [],
}
