"use client";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import axios from "axios";
import { ScoreBadge } from "./score-badge";

export default function ResultItem() {
    // URL 쿼리 파라미터를 읽기 위한 훅
    const searchParams = useSearchParams();
    const [genres, setGenres] = useState<string[]>([]);
    const [stores, setStores] = useState<string[]>([]);
    const [tags, setTags] = useState<string[]>([]);
    const [score, setScore] = useState<number>(-1); // 메타크리틱 점수

    // 쿼리 문자열에서 주어진 키들의 값을 추출하고, ','로 나눠 배열로 반환
    const parseParams = (keys: string[]) => {
        const result: Record<string, string[]> = {};
        keys.forEach((key) => {
            const value = searchParams.get(key);
            result[key] = value ? decodeURIComponent(value).split(",") : [];
        });
        return result;
    };

    useEffect(() => {
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

        const apiUrl = `https://api.rawg.io/api/games?ordering=-rating&${params.toString()}`;

        axios
            .get(apiUrl)
            .then((response) => {
                console.log("전체 데이터:", response.data);

                const sorted = response.data.results
                    .sort((a: any, b: any) => {
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
            })
            .catch((error) => {
                console.error(error);
            });
    }, [searchParams]);

    return (
        <div className="bg-gradient-to-bl p-px from-purple-500 to-40% to-neutral-800 rounded-lg overflow-hidden hover:scale-105 transition-all duration-300 text-left">
            <div className="bg-gradient-to-bl from-violet-950 to-60% to-neutral-900 rounded-lg overflow-hidden pb-2 hover:scale-105 transition-all duration-300 text-left">
                <div className="min-w-3xs min-h-44 bg-gray-700" />
                {/* 썸네일 이미지 (img 태그로 변경 필요) */}
                <ul className="flex justify-between m-4">
                    {/* 게임제목 */}
                    <li>
                        <h4 className="break-keep leading-6">아주아주 매우 기다랗고 기다란 게임 이름</h4>
                    </li>
                    {/* 메타크리틱 점수 배지 */}
                    <li className="ml-12">
                        <ScoreBadge
                            variant={score >= 75 ? "green" : score >= 50 ? "yellow" : score >= 0 ? "red" : "gray"}
                        >
                            {score}
                        </ScoreBadge>
                    </li>
                </ul>
                {/* 게임회사명 */}
                <p className="m-4 text-sm text-gray-300">게임회사명</p>
            </div>
        </div>
    );
}
