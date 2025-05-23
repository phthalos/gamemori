import LicenseList from "@/components/license/license-list";
import { license as licenseData } from "@/data/license";

export default function License() {
    return (
        <div className="flex flex-col items-center justify-center my-20 w-6/12">
            <h2 >오픈소스 라이선스 소개</h2>
            <span className="mb-8 text-sm text-gray-300">사용된 오픈소스의 라이선스를 소개합니다</span>
            <ul className="flex flex-wrap justify-center w-full gap-6">
                {licenseData.map((item, index) => (
                    <li
                        key={index}
                        className="flex-shrink-0 w-60 h-32 border-gray-600 rounded-md p m-2 flex flex-col justify-center"
                    >
                        <LicenseList
                            license_name={item.license_name}
                            version={item.version}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
}
