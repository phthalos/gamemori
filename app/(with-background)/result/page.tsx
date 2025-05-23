"use client";
import ResultItem from "@/components/result/result-item";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import axios from "axios";
import { useCallback } from "react";
import { GameTypes } from "@/types/types";
import { Skeleton } from "@/components/ui/skeleton";

export default function Result() {
    // URL 쿼리 파라미터를 읽기 위한 훅
    const searchParams = useSearchParams();
    const [_, setGenres] = useState<string[]>([]);
    const [__, setStores] = useState<string[]>([]);
    const [___, setTags] = useState<string[]>([]);
    const [games, setGames] = useState<GameTypes[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    // 쿼리 문자열에서 주어진 키들의 값을 추출하고, ','로 나눠 배열로 반환
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
        // genres, stores, tags 값을 배열 형태로 추출
        const {
            genres: decodedGenres,
            stores: decodedStores,
            tags: decodedTags,
        } = parseParams(["genres", "stores", "tags"]);

        // 상태에 저장
        setGenres(decodedGenres);
        setStores(decodedStores);
        setTags(decodedTags);

        const params = new URLSearchParams();

        // 환경변수에서 API 키 불러와서 추가
        const apiKey = process.env.NEXT_PUBLIC_RAWG_API_KEY;
        params.set("key", apiKey || "");

        // genres, stores, tags 중 값이 있는 것만 쿼리에 추가
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
                // console.log("전체 데이터:", response.data);

                interface Game {
                    rating: number;
                    released: string;
                }

                const sorted = response.data.results
                    .sort((a: Game, b: Game) => {
                        // 1차 정렬: rating(평점) 높은 순
                        if (b.rating !== a.rating) {
                            return b.rating - a.rating;
                        }

                        // 2차 정렬: released(출시일) 최신순
                        const dateA = new Date(a.released || "1900-01-01").getTime();
                        const dateB = new Date(b.released || "1900-01-01").getTime();
                        return dateB - dateA;
                    })
                    .slice(0, 16); // 최종 16개만 추출

                console.log("필터링 된 최종 결과:", sorted);
                if (sorted) {
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
                }
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
                <h1>무슨 스토어 게임</h1>
                <span className="text-gray-300">무슨무슨 스토어의 게임 목록에 대한 한줄설명을 입력합니다</span>
            </div>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 gap-3">
                {Array.from({ length: 4 }).map((_, index) =>
                    isLoading ? (
                        <div key={index} className="flex flex-col gap-2">
                            <Skeleton className="h-48 w-full rounded-lg" /> {/* 이미지 영역 */}
                            <Skeleton className="h-6 w-3/4" /> {/* 제목 영역 */}
                            <Skeleton className="h-4 w-1/2" /> {/* 메타크리틱 점수 영역 */}
                        </div>
                    ) : (
                        <ResultItem key={index} games={games} index={index} />
                    )
                )}
            </div>
        </div>
    );
}
