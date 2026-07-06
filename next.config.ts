import type { NextConfig } from "next";

// Validate environment variables at build/startup time. Fails fast with a clear
// error if anything required is missing or malformed.
import "./src/env";

const nextConfig: NextConfig = {/* config options here */};

export default nextConfig;
