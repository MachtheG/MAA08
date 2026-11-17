import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // Route changes cross-fade the page body through the browser's native
    // View Transitions API; browsers without it simply swap pages.
    viewTransition: true,
  },
  images: {
    // Next 16 requires an allow-list. 60 is for the flat-toned duotone
    // landscapes, 72 for portraits; both keep photos light on mobile data.
    qualities: [60, 72],
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
