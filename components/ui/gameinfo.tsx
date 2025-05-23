"use client";

import { useEffect, useState } from "react";

interface Props {
    id: number;
    className?: string;
}

export default function GameInfo({ id, className }: Props) {
    const [genres, setGenres] = useState<string[]>([]);
    const [releaseDate, setReleaseDate] = useState<string>("");
    const [developers, setDevelopers] = useState<string[]>([]);
    const [publishers, setPublishers] = useState<string[]>([]);

    useEffect(() => {
        if (!id) return;

        fetch(`https://api.rawg.io/api/games/${id}?key=${process.env.NEXT_PUBLIC_RAWG_API_KEY}`)
            .then((res) => res.json())
            .then((data) => {
                setGenres(data.genres?.map((g: { name: string }) => g.name) ?? []);
                setReleaseDate(data.released ?? "");
                setDevelopers(data.developers?.map((d: { name: string }) => d.name) ?? []);
                setPublishers(data.publishers?.map((p: { name: string }) => p.name) ?? []);
            })
            .catch((err) => {
                console.error("게임 정보 불러오기 실패:", err);
            });
    }, [id]);

    return (
        <div className={`space-y-2 text-sm ${className ?? ""}`}>
            <InfoRow label="Genre" value={genres.join(", ")} />
            <InfoRow label="Release Date" value={releaseDate} />
            <InfoRow label="Developer" value={developers.join(", ")} />
            <InfoRow label="Publisher" value={publishers.join(", ")} />
        </div>
    );
}

function InfoRow({ label, value }: { label: string; value: string }) {
    return (
        <div className="flex gap-4">
            <div className="w-32 shrink-0 text-gray-400">{label}</div>
            <div className="text-white flex-1 break-words">{value}</div>
        </div>
    );
}
