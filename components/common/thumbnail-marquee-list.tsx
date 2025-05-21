import ThumbnailMarquee from "./thumbnail-marquee";

export default function ThumbnailMarqueeList() {
    return (
        <div className="absolute left-0 bottom-32">
            <div className="z-2 absolute w-screen h-8 bg-linear-[90deg,#0a0a0a_4%,transparent_30%,transparent_70%,#0a0a0a_96%] bg-transparent" />
            <ThumbnailMarquee className="animate-[scroll-left_30s_linear_infinite]" />
        </div>
    );
}
