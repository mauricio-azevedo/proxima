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
  // Sorts Tailwind utility classes into the canonical order.
  plugins: ["prettier-plugin-tailwindcss"],
};

export default config;
