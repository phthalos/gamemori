"use client";
import { Badge } from "../ui/badge";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import axios from "axios";

export default function ResultItem() {
    const searchParams = useSearchParams();
    const [genres, setGenres] = useState<string[]>([]);
    const [platforms, setPlatforms] = useState<string[]>([]);
    const [tags, setTags] = useState<string[]>([]);

    useEffect(() => {
        const decodeAndSplit = (value: string | null): string[] => (value ? decodeURIComponent(value).split(",") : []);

        const decodedGenres = decodeAndSplit(searchParams.get("genres"));
        const decodedPlatforms = decodeAndSplit(searchParams.get("platforms"));
        const decodedTags = decodeAndSplit(searchParams.get("tags"));

        setGenres(decodedGenres);
        setPlatforms(decodedPlatforms);
        setTags(decodedTags);

        console.log("Genres:", decodedGenres);
        console.log("Platforms:", decodedPlatforms);
        console.log("Tags:", decodedTags);

        const params = new URLSearchParams();
        params.set("key", "5982c1593bb64042b5f0e2921337b65f");

        if (decodedGenres.length > 0) {
            params.set("genres", decodedGenres.join(","));
        }
        if (decodedPlatforms.length > 0) {
            params.set("platforms", decodedPlatforms.join(","));
        }
        if (decodedTags.length > 0) {
            params.set("tags", decodedTags.join(","));
        }

        const apiUrl = `https://api.rawg.io/api/games?${params.toString()}`;

        axios
            .get(apiUrl)
            .then((response) => {
                console.log(`요청주소: ${apiUrl}`);
                console.log(response.data);
            })
            .catch((error) => {
                console.error(error);
                console.log("요청 실패");
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
