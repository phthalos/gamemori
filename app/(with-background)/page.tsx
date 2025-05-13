// "use client";
// import CrtModelViewer from "@/components/3d/crt";
import ThumbnailMarqueeList from "@/components/common/thumbnail-marquee-list";
import { ArrowRightIcon } from "@/components/ui/arrow-right";
import ButtonStart from "@/components/ui/button-start";

export default function Home() {
    return (
        <>
            <p
                className={`text-6xl font-semibold bg-linear-120 from-violet-50 via-violet-300 via-70% to-violet-400 text-transparent bg-clip-text mb-6 leading-16 text-center 
                ${/*text-shadow-[0_0px_6px] text-shadow-violet-50/60*/ ``}
                `}
            >
                게임의 우주에서
                <br />
                <span className="font-[SokchoBadaBatang] tracking-tighter">숨겨진 보석</span>을 찾아보세요
            </p>
            <p className="mb-10 relative opacity-75 text-center">
                끝없는 스크롤은 그만! 당신의 진정한 게임 취향을 알아보아요.
                <br />
                게임모리가 숨겨진 명작 인디게임 컬렉션의 세계를 발견하도록 도와드릴게요.
            </p>
            {/* 테스트 시작하기 버튼 */}
            <ButtonStart
                href="/personalize"
                className="px-8 py-4 text-lg font-bold shadow-lg  hover:shadow-xl flex relative gap-1 mb-16"
            >
                테스트 시작하기
                <ArrowRightIcon />
            </ButtonStart>
            {/* 3D CRT 모델 */}
            {/* <div className="fixed w-96 h-96 m-auto -z-1 left-0">
                <CrtModelViewer />
            </div> */}
            {/* 흐르는 게임 썸네일들 */}
            <ThumbnailMarqueeList />
        </>
    );
}
