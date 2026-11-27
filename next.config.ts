import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: "inline",
  },
  async redirects() {
    return [
      // CelebCart was previously published under a mismatched slug.
      {
        source: "/portfolio/atlas-content-platform",
        destination: "/portfolio/celebcart-grocery-platform",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
