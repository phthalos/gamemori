import LicenseList from "@/components/license/license-list";
import { license } from "@/data/license";

export default function License() {
    return (
        <div className="flex flex-col items-center justify-center w-full my-20 mx-[10%]">
            <h2>오픈소스 라이선스</h2>
            <span className="mb-8 text-sm text-gray-300">
                게임모리 프로젝트에 사용된 오픈소스의 라이선스를 소개합니다
            </span>
            <ul className="grid grid-cols-3 gap-3 w-full">
                {license.map((item, index) => (
                    <li key={index}>
                        <LicenseList
                            name={item.name}
                            version={item.version}
                            description={item.description}
                            website={item.website}
                            license={item.license}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
}
