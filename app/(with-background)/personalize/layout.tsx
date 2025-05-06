export default function PersonalizeLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <span>테스트 페이지 레이아웃</span>
            {children}
        </>
    );
}
