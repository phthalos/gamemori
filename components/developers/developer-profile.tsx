import { DevelopersType } from "@/data/developers";
import Link from "next/link";
import { Badge } from "../ui/badge";

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
                <li className="flex gap-2 items-center text-xl font-bold my-1 justify-center">{name}</li>
                {/* 역할 배지 (추후 수정) */}
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
