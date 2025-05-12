"use client";
import { Badge } from "../ui/badge";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import axios from "axios";

export default function ResultItem() {
    const searchParams = useSearchParams();
    const [genres, setGenres] = useState<string[]>([]);
    const [stores, setStores] = useState<string[]>([]);
    const [tags, setTags] = useState<string[]>([]);

    const parseParams = (keys: string[]) => {
        const result: Record<string, string[]> = {};
        keys.forEach((key) => {
            const value = searchParams.get(key);
            result[key] = value ? decodeURIComponent(value).split(",") : [];
        });
        return result;
    };

    useEffect(() => {
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
