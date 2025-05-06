import ThumbnailMarquee from "./thumbnail-marquee";

export default function ThumbnailMarqueeList() {
    return (
        <div
            className="-rotate-2"
            style={{
                WebkitMaskImage: "linear-gradient(to right, transparent 4%, black 30%, black 70%, transparent 96%)",
                maskImage: "linear-gradient(to right, transparent 4%, black 30%, black 70%, transparent 96%)",
            }}
        >
            <ThumbnailMarquee className="animate-[scroll-left_30s_linear_infinite]" />
            <ThumbnailMarquee className="animate-[scroll-right_30s_linear_infinite]" />
            <ThumbnailMarquee className="animate-[scroll-left_30s_linear_infinite]" />
        </div>
    );
}
