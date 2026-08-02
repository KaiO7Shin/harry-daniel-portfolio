import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      {
        source: "/parcours",
        destination: "/palmares",
        permanent: true,
      },
      {
        // Page partenariats masquée temporairement
        source: "/partenariats",
        destination: "/contact",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
