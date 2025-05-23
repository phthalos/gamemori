/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import ResultItem from "@/components/result/result-item";
import React, { useEffect, useState, Suspense, useCallback } from "react";
import { useSearchParams } from "next/navigation";
import axios from "axios";
import { GameTypes } from "@/types/types";
import { Skeleton } from "@/components/ui/skeleton";

// 실질적인 렌더링을 담당할 클라이언트 컴포넌트
function ResultContent() {
    const searchParams = useSearchParams();
    const [_, setGenres] = useState<string[]>([]);
    const [__, setStores] = useState<string[]>([]);
    const [___, setTags] = useState<string[]>([]);
    const [games, setGames] = useState<GameTypes[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const parseParams = useCallback(
        (keys: string[]) => {
            const result: Record<string, string[]> = {};
            keys.forEach((key) => {
                const value = searchParams.get(key);
                result[key] = value ? decodeURIComponent(value).split(",") : [];
            });
            return result;
        },
        [searchParams]
    );

    useEffect(() => {
        setIsLoading(true);
        const {
            genres: decodedGenres,
            stores: decodedStores,
            tags: decodedTags,
        } = parseParams(["genres", "stores", "tags"]);

        setGenres(decodedGenres);
        setStores(decodedStores);
        setTags(decodedTags);

        const params = new URLSearchParams();
        const apiKey = process.env.NEXT_PUBLIC_RAWG_API_KEY;
        params.set("key", apiKey || "");

        const filters: Record<string, string[]> = {
            genres: decodedGenres,
            stores: decodedStores,
            tags: decodedTags,
        };

        Object.entries(filters).forEach(([key, value]) => {
            if (value.length > 0) {
                params.set(key, value.join(","));
            }
        });

        const apiUrl = `https://api.rawg.io/api/games?${params.toString()}`;

        axios
            .get(apiUrl)
            .then((response) => {
                interface Game {
                    rating: number;
                    released: string;
                }

                const sorted = response.data.results
                    .sort((a: Game, b: Game) => {
                        if (b.rating !== a.rating) {
                            return b.rating - a.rating;
                        }
                        const dateA = new Date(a.released || "1900-01-01").getTime();
                        const dateB = new Date(b.released || "1900-01-01").getTime();
                        return dateB - dateA;
                    })
                    .slice(0, 16);

                const games = sorted.map((data: GameTypes) => {
                    const { id, name, metacritic, background_image, platforms } = data;
                    return {
                        id,
                        name,
                        metacritic,
                        background_image,
                        platforms,
                    };
                });
                setGames(games);
                setIsLoading(false);
            })
            .catch((error) => {
                console.error(error);
                setIsLoading(false);
            });
    }, [searchParams, parseParams]);

    return (
        <div className="w-full px-[10%] flex flex-col mb-24 gap-10">
            <div>
                <h1>추천 스토어 게임</h1>
                <span className="text-gray-300">게임모리가 당신을 위해 선별한 추천 게임 16종을 소개합니다.</span>
            </div>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 gap-3">
                {Array.from({ length: 4 }).map((_, index) =>
                    isLoading ? (
                        <div key={index} className="flex flex-col gap-2">
                            <Skeleton className="h-48 w-full rounded-lg" />
                            <Skeleton className="h-6 w-3/4" />
                            <Skeleton className="h-4 w-1/2" />
                        </div>
                    ) : (
                        <ResultItem key={index} games={games} index={index} />
                    )
                )}
            </div>
        </div>
    );
}

// Suspense로 감싸기 (필수!)
export default function Result() {
    return (
        <Suspense fallback={null}>
            <ResultContent />
        </Suspense>
    );
}
