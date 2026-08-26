import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  async redirects() {
    return [
      { source: "/archive", destination: "/", permanent: true },
      { source: "/build", destination: "/", permanent: true },
      { source: "/careers", destination: "/", permanent: true },
      { source: "/coming-soon", destination: "/", permanent: true },
      { source: "/docs", destination: "/", permanent: true },
      { source: "/staking", destination: "/", permanent: true },
      { source: "/tools/trustlens", destination: "/", permanent: true },
      { source: "/tools/verify-engine", destination: "/", permanent: true },
      { source: "/use-cases", destination: "/", permanent: true },
      { source: "/use-cases/:path*", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;
