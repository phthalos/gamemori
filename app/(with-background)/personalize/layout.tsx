import { Progress } from "@/components/ui/progress";

export default function PersonalizeLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            {/* 임시제목, 확정 또는 변경 필요 */}
            <h2 className="-mt-10 mb-8">게임 취향 테스트</h2>
            {/* 질문 진행도를 나타내는 progress bar, 스크롤이 아래로 내려갈수록 채워지는 기능 구현 필요 */}
            <Progress className="fixed bottom-0" />
            {children}
        </>
    );
}
