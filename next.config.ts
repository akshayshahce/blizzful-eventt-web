import type { NextConfig } from "next";
import path from "node:path";
import { fileURLToPath } from "node:url";

const dirname = path.dirname(fileURLToPath(import.meta.url));

const isGithubPages = process.env.GITHUB_PAGES === "true";
const repoName = "blizzful-eventt-web";

const nextConfig: NextConfig = {
  output: "export",
  ...(isGithubPages && {
    basePath: `/${repoName}`,
    assetPrefix: `/${repoName}/`,
  }),
  env: {
    NEXT_PUBLIC_BASE_PATH: isGithubPages ? `/${repoName}` : "",
  },
  allowedDevOrigins: ["127.0.0.1"],
  devIndicators: false,
  reactCompiler: true,
  images: {
    loader: "custom",
    loaderFile: "./src/lib/image-loader.ts",
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  turbopack: {
    root: dirname,
  },
};

export default nextConfig;
