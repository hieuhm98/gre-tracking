/** @type {import('next').NextConfig} */
const nextConfig = {
  // better-sqlite3 is a native module; keep it out of the server bundle so Next
  // loads it via require() at runtime (dev-mode SQLite store).
  experimental: {
    serverComponentsExternalPackages: ["better-sqlite3"],
    // The progress snapshot is read via a runtime path join, which Next's file
    // tracing can't see — include it explicitly so the route can read it once
    // deployed. (public/progress.json is the always-available fallback.)
    outputFileTracingIncludes: {
      "/api/progress": ["./data/progress.json"],
    },
  },
  async redirects() {
    return [
      // The SQL playground moved under the new /practice parent.
      { source: "/sql-practice", destination: "/practice/sql", permanent: true },
    ];
  },
};

export default nextConfig;
