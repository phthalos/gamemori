"use client";
import { Badge } from "../ui/badge";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import axios from "axios";

export default function ResultItem() {
    // URL 쿼리 파라미터를 읽기 위한 훅
    const searchParams = useSearchParams();
    const [genres, setGenres] = useState<string[]>([]);
    const [stores, setStores] = useState<string[]>([]);
    const [tags, setTags] = useState<string[]>([]);

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

        // 최종 API 요청 URL 생성
        const apiUrl = `https://api.rawg.io/api/games?${params.toString()}`;

        // API 호출 및 결과 출력
        axios
            .get(apiUrl)
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, [searchParams]);

    return (
        <div className="w-full flex gap-5">
            {/* 썸네일 */}
            <div className="w-16 h-12 bg-gray-400" />
            <ul>
                <li>
                    <h4>게임제목</h4>
                </li>
                <li>
                    <span>게임회사명</span>
                </li>
            </ul>
            <ul className="flex">
                <Badge variant="secondary" className="mr-1">
                    레이싱
                </Badge>
                <Badge variant="secondary" className="mr-1">
                    RPG
                </Badge>
            </ul>
            <span className="float-right ml-auto">⭐️⭐️⭐️⭐️⭐️</span>
        </div>
    );
}
