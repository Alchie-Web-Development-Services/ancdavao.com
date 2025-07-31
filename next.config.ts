import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["source.unsplash.com", "picsum.photos"],
  },
};

export default nextConfig;
