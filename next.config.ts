import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    /* config options here */
    images: {
        remotePatterns: [new URL("https://media.rawg.io/media/games/**")],
    },
};

export default nextConfig;
