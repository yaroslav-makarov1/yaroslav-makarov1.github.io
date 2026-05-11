/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  //basePath: "/yaroslav-makarov1.github.io",
  //assetPrefix: "/yaroslav-makarov1.github.io/",
  assetPrefix: "./",
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
