"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

interface Props {
    id: number;
    className?: string;
}

const supportedStores = [
    "steam",
    "playstation-store",
    "xbox-store",
    "apple-appstore",
    "gog",
    "nintendo",
    "google-play",
    "itch",
    "epic-games",
];

const storeMap: Record<string, string> = {
    steam: "Steam",
    "playstation-store": "PlayStation Store",
    "xbox-store": "Xbox Store",
    "app-store": "App Store",
    gog: "GOG",
    nintendo: "Nintendo",
    "google-play": "Google Play",
    itch: "Itch.io",
    "epic-games": "Epic Games",
};

const storeLinks: Record<string, string> = {
    steam: "https://store.steampowered.com/?l=koreana",
    "playstation-store": "https://store.playstation.com/ko-kr",
    "xbox-store": "https://www.xbox.com/ko-kr",
    "app-store": "https://www.apple.com/kr/app-store/",
    gog: "https://www.gog.com",
    nintendo: "https://store.nintendo.co.kr/",
    "google-play": "https://play.google.com/store/games?hl=ko",
    itch: "https://itch.io",
    "epic-games": "https://store.epicgames.com/ko/",
};

export default function StoreList({ id, className }: Props) {
    const [stores, setStores] = useState<string[]>([]);

    useEffect(() => {
        if (!id) return;

        fetch(`https://api.rawg.io/api/games/${id}?key=${process.env.NEXT_PUBLIC_RAWG_API_KEY}`)
            .then((res) => res.json())
            .then((data) => {
                const storeSlugs = (data.stores ?? [])
                    .map((s: { store: { slug: string } }) => s.store?.slug)
                    .filter((slug: string) => supportedStores.includes(slug));
                setStores(storeSlugs);
            })
            .catch((err) => {
                console.error("스토어 정보 불러오기 실패:", err);
            });
    }, [id]);

    if (!stores.length) return null;

    return (
        <div className={`text-sm text-white ${className}`}>
            <div className="flex gap-4 items-start">
                {/* Label 영역 */}
                <div className="w-32 shrink-0 text-gray-400 mt-[2px]">Available on</div>

                {/* 아이콘 영역 */}
                <div className="flex flex-wrap gap-2">
                    {stores.map((slug) => (
                        <Link
                            key={slug}
                            href={storeLinks[slug] || "#"}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block w-6 h-6"
                        >
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src={`/icons/${slug.replace(/-store|-games/g, "").replace(/-/g, "")}.svg`}
                                alt=""
                                className="w-full h-full object-contain object-center"
                            />
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
