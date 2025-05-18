"use client";

import { useEffect, useState } from "react";
import axios from "axios";

interface Props {
  id: number;
}

export default function GameDescription({ id }: Props) {
  const [translated, setTranslated] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;

    // 1단계: 영어 설명 불러오기
    axios
      .get(`https://api.rawg.io/api/games/${id}?key=${process.env.NEXT_PUBLIC_RAWG_API_KEY}`)
      .then((res) => {
        const desc = res.data.description_raw;
        if (!desc) return;

        // 2단계: DeepL API에 번역 요청 보내기
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
      })
      .catch((err) => {
        console.error("설명 번역 실패:", err);
      });
  }, [id]);

  if (!translated) return null;

  return (
    <div className="text-sm text-gray-300 leading-6 whitespace-pre-line">
      {translated}
    </div>
  );
}
