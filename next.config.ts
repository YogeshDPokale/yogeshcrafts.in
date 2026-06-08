import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    rules: {
      "*.bin": {
        type: "asset",
      },
      "*.ttf": {
        type: "asset",
      },
    },
  },
};

export default nextConfig;
