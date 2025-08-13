import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: { reactCompiler: true }, // React 19 goodies
  /* config options here */
};

export default nextConfig;
