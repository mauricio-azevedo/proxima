/**
 * Enforces Conventional Commits (feat:, fix:, chore:, docs:, refactor:, test:,
 * ...). A readable history is what makes automated changelogs and semantic
 * versioning possible down the line.
 * @see https://www.conventionalcommits.org
 * @type {import("@commitlint/types").UserConfig}
 */
const config = {
  extends: ["@commitlint/config-conventional"],
};

export default config;
