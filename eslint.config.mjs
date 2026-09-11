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

// O app Next vive em apps/web, entao as regras de Next/React valem so la.
// `nextTs` (parser e regras de TypeScript), sonar e os orcamentos de
// complexidade continuam valendo para o repositorio inteiro — e2e/ e as configs
// da raiz incluidos.
const WEB = ["apps/web/**/*.{js,jsx,mjs,ts,tsx,mts,cts}"];

const eslintConfig = defineConfig([
  {
    files: WEB,
    // `@next/next/no-html-link-for-pages` procura `app/`/`pages/` a partir do cwd
    // (a raiz). Sem `rootDir` ele olharia o lugar errado e calaria em silencio.
    settings: { next: { rootDir: "apps/web" } },
    extends: [nextVitals],
  },
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
  {
    files: WEB,
    // Frontend correctness — extends eslint-config-next (which already enables
    // react, react-hooks, jsx-a11y, @next/next). See docs/standards/frontend.md.
    rules: {
      "react/no-array-index-key": "error",
      "react/no-unstable-nested-components": "error",
      "react-hooks/exhaustive-deps": "error",
      // React Compiler-era lints ("You Might Not Need an Effect"):
      "react-hooks/no-deriving-state-in-effects": "error",
      "react-hooks/set-state-in-effect": "error",
    },
  },
  prettier,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next. Ancorados em `apps/*` (nao `**`): o
    // build do Next sai em apps/web/.next, e um diretorio de codigo chamado
    // `build/` ou `out/` dentro de um app nao pode sumir do lint em silencio.
    "apps/*/.next/**",
    "apps/*/out/**",
    "apps/*/build/**",
    "apps/*/next-env.d.ts",
    // Test/tooling output. O relatorio do Playwright sai na raiz; a cobertura,
    // no app que rodou o Vitest.
    "apps/*/coverage/**",
    "playwright-report/**",
    "test-results/**",
    // Prisma-generated client.
    "apps/*/src/generated/**",
    // Vendored shadcn/ui registry code — Prettier-formatted and type-checked,
    // but exempt from our opinionated lint (we don't hand-maintain it to our
    // standards; a shadcn update would clobber edits).
    "apps/web/src/components/ui/**",
    "apps/web/src/hooks/**",
    // Raias do Relay (worktrees de issue) vivem dentro do checkout; sem isto o
    // `pnpm check` da main varreria o codigo de outra raia.
    ".claude/worktrees/**",
    // Artefatos locais do design-sync (gitignored; o ESLint nao le o .gitignore).
    ".ds-sync/**",
    "ds-bundle/**",
    ".design-sync/**",
  ]),
]);

export default eslintConfig;
