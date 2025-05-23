import { DevelopersType } from "@/data/developers";
import Link from "next/link";
import { Badge } from "../ui/badge";
import { ArrowUpRightFromSquareIcon } from "lucide-react";

export default function DeveloperProfile({ name, github, roles }: DevelopersType) {
    return (
        <>
            {/* 프로필 사진 */}
            <div className="rounded-full w-32 h-32 overflow-clip mb-2 hover:scale-105 transition-all duration-300">
                <Link href={`https://github.com/${github}`} target="_blank">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={`/images/developers/${name}.jpg`} alt={name} className="w-32 h-32 object-cover" />
                </Link>
            </div>
            <ul>
                {/* 이름 */}
                <li className="flex gap-2 items-center text-xl font-bold justify-center">{name}</li>
                {/* 깃허브 아이디 */}
                <li>
                    <Link
                        href={`https://github.com/${github}`}
                        target="_blank"
                        className="flex gap-1 justify-center items-center text-sm mb-1 text-muted-foreground hover:underline"
                    >
                        {github}
                        <ArrowUpRightFromSquareIcon size={11} />
                    </Link>
                </li>
                {/* 역할 배지 */}
                <li className="flex justify-center">
                    {roles.map((role, index) => (
                        <Badge key={index} variant="secondary" className="mr-1">
                            {role}
                        </Badge>
                    ))}
                </li>
            </ul>
        </>
    );
}
