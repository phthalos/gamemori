import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";

const pretendard = localFont({
    src: "../fonts/Pretendard-1.3.9/woff2/PretendardVariable.woff2",
    display: "swap",
    weight: "45 920",
    variable: "--font-pretendard",
});

export const metadata: Metadata = {
    title: "게임모리",
    description: "명작 인디게임 컬렉션의 우주, 게임모리",
    icons: {
        icon: "/icon.ico",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="kr" className={`${pretendard.variable} dark`}>
            <body className={`${pretendard.className} antialiased overflow-x-hidden`}>
                <Header />
                <div className="flex justify-center items-center">{children}</div>
                <Footer />
            </body>
        </html>
    );
}
