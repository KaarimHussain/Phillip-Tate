import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "blog-cdn.reedsy.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
