"use client";

import Link from "next/link";
import FooterDivider from "./footer-divider";
import { useState } from "react";
import { convertISO } from "@/utils/time";

export default function Footer() {
    const [commit, setCommit] = useState<string>("로딩중...");
    const [rendered, setRendered] = useState<string>("로딩중...");

    // 리포지토리가 비공개일 경우 api를 fetch할 수 없으므로 표시되지 않습니다.
    async function fetchCommitInfo() {
        try {
            const response: Response = await fetch("https://api.github.com/repos/phthalos/gamemori/commits?per_page=1");
            if (!response.ok) {
                throw new Error("최신 빌드 정보를 가져오지 못했습니다.");
            }
            const data = await response.json();
            if (data) {
                setCommit(data[0].sha.substr(0, 6));
                setRendered(convertISO(data[0].commit.committer.date));
            }
        } catch (error) {
            console.error(error);
        }
    }
    fetchCommitInfo();

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
            <p>
                Build {commit} Rendered at {rendered}
            </p>
        </footer>
    );
}
