import { gamelist } from "@/data/gamelist";
import Image from "next/image";

type Params = {
    className?: string;
};

export default function ThumbnailMarquee({ className }: Params) {
    return (
        <div className="overflow-hidden w-full mb-5">
            <ul className={`${className} flex gap-2 relative h-fit`}>
                {gamelist.concat(gamelist).map((game, index) => (
                    <li key={index} className="flex-shrink-0">
                        <Image src={`/images/thumbs/${game}`} alt="thumbs" width={180} height={70} />
                    </li>
                ))}
            </ul>
        </div>
    );
}
