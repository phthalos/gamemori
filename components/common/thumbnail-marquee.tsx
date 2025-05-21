import { gamelist } from "@/data/gamelist";

type Params = {
    className?: string;
};

export default function ThumbnailMarquee({ className }: Params) {
    return (
        <ul className={`${className} w-full flex gap-24`}>
            {gamelist.concat(...Array(3).fill(gamelist)).map((game, index) => (
                <li key={index} className="flex-shrink-0">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={`/logos/${game}`} alt="thumbs" className="h-6 grayscale opacity-55" />
                </li>
            ))}
        </ul>
    );
}
