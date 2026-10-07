import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Disable scroll restoration to ensure pages start at top
  experimental: {
    scrollRestoration: false,
  },
};

export default nextConfig;
