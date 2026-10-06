import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/zella-nextjs",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
