import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    unoptimized: true,
  },
  allowedDevOrigins: ['192.168.1.12', '192.168.1.12:3000']
};

export default nextConfig;
