import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
// Enforces the automatable half of docs/standards/engineering.md: cognitive
// complexity, dead/redundant code, and other quality rules.
import sonarjs from "eslint-plugin-sonarjs";
// Must come LAST: disables ESLint rules that conflict with Prettier so the two
// tools never fight over formatting. Prettier owns formatting; ESLint owns
// code quality.
import prettier from "eslint-config-prettier";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  sonarjs.configs.recommended,
  {
    // Complexity budgets — the enforced half of the engineering standards.
    // See docs/standards/engineering.md for the rationale behind each limit.
    rules: {
      "sonarjs/cognitive-complexity": ["error", 15],
      complexity: ["error", 15],
      "max-depth": ["error", 4],
      "max-params": ["error", 4],
      "max-nested-callbacks": ["error", 3],
    },
  },
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
