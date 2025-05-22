import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    /* config options here */
    // output: "export", // 정적 사이트 생성
    images: {
        remotePatterns: [new URL("https://media.rawg.io/media/games/**")],
    },
};

export default nextConfig;
