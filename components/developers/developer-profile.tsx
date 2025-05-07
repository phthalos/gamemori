import { DevelopersType } from "@/data/developers";
import Link from "next/link";
import { GithubIcon } from "../ui/github";
import { Badge } from "../ui/badge";

export default function DeveloperProfile({ name, github, introduce, roles }: DevelopersType) {
    return (
        <div className="flex w-full mt-8">
            {/* 프로필 사진, 추후 이미지 태그로 변경 필요 */}
            <div className="bg-gray-400 rounded-full w-32 h-32 mr-4" />
            <ul>
                <li className="flex gap-2 items-center text-3xl font-bold mb-1">
                    {name}
                    <Link href={`https://github.com/${github}`}>
                        <GithubIcon className="" />
                    </Link>
                </li>
                <li>{introduce}</li>
                <li>
                    {roles.map((role, index) => (
                        <Badge key={index} variant="secondary" className="mr-1">
                            {role}
                        </Badge>
                    ))}
                </li>
            </ul>
        </div>
    );
}
