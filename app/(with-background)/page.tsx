import ThumbnailMarqueeList from "@/components/common/thumbnail-marquee-list";
import { ArrowRightIcon } from "@/components/ui/arrow-right";
import { Button } from "@/components/ui/button";
import ButtonStart from "@/components/ui/button-start";

export default function Home() {
    return (
        <>
            <div className="w-fit h-[50vh] flex flex-col justify-center items-center z-10">
                <Button variant="outline" size="sm" className="rounded-full text-neutral-200 mb-2 flex gap-1">
                    <span className="relative flex size-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-violet-100 opacity-75" />
                        <span className="relative inline-flex size-2 rounded-full bg-violet-300" />
                    </span>
                    +50만개 게임 데이터 제공
                </Button>
                <p
                    className={`text-5xl font-semibold bg-linear-120 from-violet-50 via-violet-300 via-70% to-violet-400 text-transparent bg-clip-text mb-6 leading-14 text-center`}
                >
                    게임의 우주에서
                    <br />
                    <span className="font-[SokchoBadaBatang] tracking-tighter">숨겨진 보석</span>을 찾아보세요
                </p>
                <p className="mb-8 relative opacity-75 text-center text-sm">
                    끝없는 스크롤은 그만! 당신의 진정한 게임 취향을 알아보아요.
                    <br />
                    게임모리가 숨겨진 명작 인디게임 컬렉션의 세계를 발견하도록 도와드릴게요.
                </p>
                {/* 테스트 시작하기 버튼 */}
                <ButtonStart
                    href="/personalize"
                    className="flex items-center px-7 py-4 text-md font-bold shadow-lg hover:shadow-xl relative gap-1"
                >
                    테스트 시작하기
                    <ArrowRightIcon size={24} />
                </ButtonStart>
            </div>
            {/* 흐르는 게임 썸네일들 */}
            <ThumbnailMarqueeList />
        </>
    );
}
