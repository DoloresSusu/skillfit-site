/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.get-skill-fit.com" }],
        destination: "https://get-skill-fit.com/:path*",
        permanent: true
      }
    ];
  }
};

export default nextConfig;
