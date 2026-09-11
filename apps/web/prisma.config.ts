import "dotenv/config";

import { defineConfig } from "prisma/config";

// Prisma 7 no longer auto-loads .env, so we load it here (via dotenv) for CLI
// commands. The connection URL is read from `env("DATABASE_URL")` in
// schema.prisma, keeping a single source of truth for it.
export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  datasource: {
    url: process.env["DATABASE_URL"],
  },
});
