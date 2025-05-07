import Link from "next/link";
import FooterDivider from "./footer-divider";

export default function Footer() {
    return (
        <footer className="fixed w-full bottom-0 px-28 py-4 flex flex-col items-center justify-center gap-1 text-xs text-neutral-300/75">
            <ul className="flex gap-3 items-center">
                <li>© 2025 gamemori. All Rights Reserved.</li>
                <FooterDivider />
                <li>
                    <Link href="/license">오픈소스 라이선스</Link>
                </li>
                <FooterDivider />
                <li>
                    <Link href="/developers">개발자 소개</Link>
                </li>
            </ul>
            <p>Build abcd123 Rendered at 2025. 05. 00. 00:00:00</p>
        </footer>
    );
}
