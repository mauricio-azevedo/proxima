/**
 * Prettier is the single source of truth for formatting. ESLint handles code
 * quality only (stylistic rules are disabled via eslint-config-prettier).
 * @type {import("prettier").Config}
 */
const config = {
  semi: true,
  singleQuote: false,
  trailingComma: "all",
  printWidth: 100,
  tabWidth: 2,
  // Sorts Tailwind utility classes into the canonical order. `tailwindFunctions`
  // makes it also sort classes passed to cn(); `tailwindStylesheet` points it at
  // the Tailwind v4 CSS entrypoint that defines the theme.
  plugins: ["prettier-plugin-tailwindcss"],
  tailwindFunctions: ["cn"],
  tailwindStylesheet: "./src/app/globals.css",
};

export default config;
