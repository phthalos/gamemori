import ThumbnailMarqueeList from "@/components/common/thumbnail-marquee-list";
import { ArrowRightIcon } from "@/components/ui/arrow-right";
import ButtonStart from "@/components/ui/button-start";

export default function Home() {
    return (
        <>
            <p className="text-6xl font-[pretendard_semibold] bg-linear-120 from-violet-50 via-violet-300 via-70% to-violet-400 text-transparent bg-clip-text mb-6 leading-16 text-center">
                게임의 우주에서
                <br />
                숨겨진 보석을 찾아보세요
            </p>
            <p className="mb-10 relative opacity-75 text-center">
                끝없는 스크롤은 그만! 당신의 진정한 게임 취향을 알아보아요.
                <br />
                게임모리가 숨겨진 명작 인디게임 컬렉션의 세계를 발견하도록 도와드릴게요.
            </p>
            {/* 테스트 시작하기 버튼 */}
            <ButtonStart href="/personalize" className="flex relative gap-1 mb-16">
                테스트 시작하기
                <ArrowRightIcon />
            </ButtonStart>
            {/* 흐르는 게임 썸네일들 */}
            <ThumbnailMarqueeList />
        </>
    );
}
