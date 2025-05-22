"use client";

import { useEffect, useState } from "react";

interface Props {
    id: number;
    thumbnail: string;
}

export default function ScreenshotCarousel({ id, thumbnail }: Props) {
    const [images, setImages] = useState<string[]>([]);
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        if (!id || !thumbnail) return;

        fetch(`https://api.rawg.io/api/games/${id}/screenshots?key=${process.env.NEXT_PUBLIC_RAWG_API_KEY}`)
            .then((res) => res.json())
            .then((data) => {
                if (data) {
                    const screenshots = data.results.slice(0, 7).map((s: { image: string }) => s.image) ?? [];
                    setImages([thumbnail, ...screenshots]);
                } else {
                    console.error("스크린샷 데이터를 가져오지 못했습니다.");
                }
            });
    }, [id, thumbnail]);

    const prev = () => setCurrent((c) => (c === 0 ? images.length - 1 : c - 1));
    const next = () => setCurrent((c) => (c === images.length - 1 ? 0 : c + 1));

    if (images.length === 0) return null;

    return (
        <div className="relative w-full h-[250px] my-8 overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
                src={images[current]}
                alt={`스크린샷 ${current + 1}`}
                className="w-full h-full object-cover transition-all duration-500"
            />

            {/* 좌우 화살표 */}
            {images.length > 1 && (
                <>
                    <button
                        onClick={prev}
                        className="absolute top-1/2 left-4 -translate-y-1/2 z-10 bg-black/50 text-white p-2 rounded-full hover:bg-black/80"
                    >
                        &#8592;
                    </button>

                    <button
                        onClick={next}
                        className="absolute top-1/2 right-4 -translate-y-1/2 z-10 bg-black/50 text-white p-2 rounded-full hover:bg-black/80"
                    >
                        &#8594;
                    </button>
                </>
            )}
        </div>
    );
}
