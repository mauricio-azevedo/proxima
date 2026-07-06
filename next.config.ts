import type { NextConfig } from "next";

// Validate environment variables at build/startup time. Fails fast with a clear
// error if anything required is missing or malformed.
import "./src/env";

const nextConfig: NextConfig = {
  // React Compiler (GA): auto-memoizes at build time, so we write plain code and
  // do NOT hand-write useMemo/useCallback/memo for reference stability.
  reactCompiler: true,
};

export default nextConfig;
