import ThumbnailMarquee from "./thumbnail-marquee";

export default function ThumbnailMarqueeList() {
    return (
        <div
            style={{
                WebkitMaskImage: "linear-gradient(to right, transparent 4%, black 30%, black 70%, transparent 96%)",
                maskImage: "linear-gradient(to right, transparent 4%, black 30%, black 70%, transparent 96%)",
                transform: "perspective(400px) rotateX(30deg)",
            }}
        >
            <ThumbnailMarquee className="animate-[scroll-left_30s_linear_infinite]" />
        </div>
    );
}
