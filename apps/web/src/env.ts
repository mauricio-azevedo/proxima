import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

/**
 * Validated, typed environment variables. Importing `env` anywhere guarantees
 * the variable exists and has the right shape — a missing/malformed value fails
 * the build (or boot) with a clear message instead of surfacing as a confusing
 * runtime error later.
 *
 * Set SKIP_ENV_VALIDATION=1 to bypass validation (e.g. in Docker image builds
 * that don't have real values yet).
 */
export const env = createEnv({
  // Server-only variables. Never exposed to the browser.
  server: {
    DATABASE_URL: z.url(),
    NODE_ENV: z.enum(["development", "test", "production"]).default("development"),
  },
  // Client variables must be prefixed with NEXT_PUBLIC_ and also listed in
  // `experimental__runtimeEnv` below. None yet.
  client: {},
  experimental__runtimeEnv: {},
  emptyStringAsUndefined: true,
  skipValidation: Boolean(process.env["SKIP_ENV_VALIDATION"]),
});
