import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // This tells Next.js to export static files
  output: 'export',
  // Required to ensure your images and assets load correctly in the static export
  images: {
    unoptimized: true,
  },
};

export default nextConfig;