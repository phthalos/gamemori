"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { Skeleton } from "./skeleton";

interface Props {
    id: number;
}

export default function GameDescription({ id }: Props) {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [translated, setTranslated] = useState<string | null>(null);

    useEffect(() => {
        if (!id) return;
        setIsLoading(true);

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
                setIsLoading(false);
            })
            .catch((err) => {
                console.error("설명 번역 실패:", err);
                setTranslated("설명을 가져오지 못했습니다.");
                setIsLoading(false);
            });
    }, [id]);

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
                translated
            )}
        </div>
    );
}
