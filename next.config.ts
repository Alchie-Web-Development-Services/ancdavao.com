import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export",
  trailingSlash: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "source.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "picsum.photos",
      },
    ],
    unoptimized: true,
  },
  async rewrites() {
    return [
      {
        source: "/history",
        destination: "/about/history",
      },
    ];
  },
};

export default nextConfig;
