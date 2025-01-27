import type { NextConfig } from "next";
import withBundleAnalyzer from '@next/bundle-analyzer';

const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig: NextConfig = {
  experimental: {
    ppr: "incremental",
    optimizePackageImports: [
      "react-icons/fa",
      "react-icons/hi",
      "react-icons/bs",
      "react-icons/im",
      "react-icons/bi",
    ],
  },
  modularizeImports: {
    "react-icons/fa": {
      transform: "@react-icons/all-files/fa/{{ member }}",
    },
    "react-icons/hi": {
      transform: "@react-icons/all-files/hi/{{ member }}",
    },
    "react-icons/bs": {
      transform: "@react-icons/all-files/bs/{{ member }}",
    },
    "react-icons/im": {
      transform: "@react-icons/all-files/im/{{ member }}",
    },
    "react-icons/ai": {
      transform: "@react-icons/all-files/bi/{{ member }}",
    },
  },
};

export default bundleAnalyzer(nextConfig);