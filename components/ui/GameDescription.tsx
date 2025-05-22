"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { Skeleton } from "./skeleton";

interface Props {
  id: number;
}

export default function GameDescription({ id }: Props) {
  const [isLoading, setIsLoading] = useState(false);
  const [translated, setTranslated] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;
    setIsLoading(true);

    axios
      .get(`https://api.rawg.io/api/games/${id}?key=${process.env.NEXT_PUBLIC_RAWG_API_KEY}`)
      .then((res) => {
        const desc = res.data.description_raw;
        if (!desc) {
          setIsLoading(false); // desc가 없을 때도 로딩 해제
          return;
        }

        return fetch("/api/translate", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ text: desc }),
        });
      })
      .then(async (res) => {
        if (res && res.ok) {
          const data = await res.json();
          setTranslated(data.translated);
        }
        setIsLoading(false); // 성공 후 로딩 해제
      })
      .catch((err) => {
        // console.error("설명 번역 실패:", err);
        setIsLoading(false); // 실패 시에도 로딩 해제
      });
  }, [id]);

  if (!translated && !isLoading) return null;

  return (
    <div className="leading-6">
      {isLoading ? (
        <div className="space-y-2">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-3/4" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-5/6" />
        </div>
      ) : (
        <p className="text-sm text-gray-300 whitespace-pre-line">{translated}</p>
      )}
    </div>
  );
}
