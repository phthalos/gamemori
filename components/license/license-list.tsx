import { LicenseType } from "@/data/license";

export default function LicenseList({license_name, version}: LicenseType) {
    return (
        <div>
            <ul className="border border-purple-900  ">
            <a className="flex flex-col items-center justify-center p-1">라이선스 명</a>
                <li className="flex gap-2 items-center justify-center text-l font-bold p-3">
                {license_name}
                </li>
                <li className="flex gap-2 items-center justify-center ">version: {version}</li>
                <li>
                </li>
            </ul>
        </div>
    )
}