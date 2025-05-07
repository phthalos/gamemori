export default function HomeLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <div className="w-full h-full justify-center flex">
                {/* 보라색 그라디언트 배경 */}
                <div className="fixed -z-10 w-[260%] h-[85%] bg-radial-[at_50%_-20%] from-violet-600 via-violet-950 via-30% to-transparent to-70% animate-[pulse_8s_ease-in-out_infinite]" />
                {/* 본문 */}
                <div className="flex flex-col items-center w-full h-fit my-32">{children}</div>
            </div>
        </>
    );
}
