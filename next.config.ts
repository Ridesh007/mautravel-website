import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const nextConfig: NextConfig = {
  images: {
    // Unsplash images are resized per device by imgix via this loader (see file).
    // Replaces `unoptimized: true`, which sent 1920px originals to phones and
    // made every `sizes` attribute a no-op. No Vercel image-optimization quota used.
    loader: "custom",
    loaderFile: "./src/lib/image-loader.ts",
    // Default list minus 3840 — nothing on the site is displayed wide enough to need it.
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
      },
    ],
  },
};

export default withNextIntl(nextConfig);
