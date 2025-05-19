"use client";

import { useEffect, useState } from "react";

interface Props {
  id: number;
  className?: string;
}

const supportedStores = [
  "steam",
  "playstation-store",
  "xbox-store",
  "xbox360",
  "app-store",
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
  xbox360: "Xbox 360 Store",
  "app-store": "App Store",
  gog: "GOG",
  nintendo: "Nintendo",
  "google-play": "Google Play",
  itch: "Itch.io",
  "epic-games": "Epic Games",
};

export default function StoreList({ id, className }: Props) {
  const [stores, setStores] = useState<string[]>([]);

  useEffect(() => {
    if (!id) return;

    fetch(`https://api.rawg.io/api/games/${id}?key=${process.env.NEXT_PUBLIC_RAWG_API_KEY}`)
      .then((res) => res.json())
      .then((data) => {
        const storeSlugs = (data.stores ?? [])
          .map((s: any) => s.store?.slug)
          .filter((slug: string) => supportedStores.includes(slug));
        setStores(storeSlugs);
      })
      .catch((err) => console.error("스토어 정보 불러오기 실패:", err));
  }, [id]);

  if (!stores.length) return null;

  return (
    <div className={`text-sm text-white mt-4 ${className ?? ""}`}>
      <div className="text-gray-400 mb-1">Available on</div>
      <div className="flex flex-wrap gap-2">
        {stores.map((slug) => (
          <span
            key={slug}
            className="bg-gray-700 text-white px-2 py-1 rounded text-xs"
          >
            {storeMap[slug] || slug}
          </span>
        ))}
      </div>
    </div>
  );
}
