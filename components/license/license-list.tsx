import { LicenseType } from "@/data/license";
import { SquareArrowOutUpRightIcon } from "lucide-react";
import Link from "next/link";

export default function LicenseList({ name, version, description, website, license }: LicenseType) {
    return (
        <ul className="flex flex-col gap-1 bg-card p-4 rounded-md h-38">
            <li className="flex justify-between items-center">
                <b>{name}</b>
                <span className="text-sm text-muted-foreground">{version}</span>
            </li>
            <li className="text-sm leading-5">{description}</li>
            <li className="flex justify-between items-center mt-auto">
                <Link href={website} className="flex gap-1 items-center hover:underline">
                    website
                    <SquareArrowOutUpRightIcon size={14} />
                </Link>
                <span className="text-sm text-muted-foreground">{license} License</span>
            </li>
        </ul>
    );
}
