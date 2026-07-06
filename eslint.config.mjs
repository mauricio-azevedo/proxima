import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
// Must come LAST: disables ESLint rules that conflict with Prettier so the two
// tools never fight over formatting. Prettier owns formatting; ESLint owns
// code quality.
import prettier from "eslint-config-prettier";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  prettier,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    // Test/tooling output.
    "coverage/**",
    "playwright-report/**",
    "test-results/**",
    // Prisma-generated client.
    "src/generated/**",
  ]),
]);

export default eslintConfig;
