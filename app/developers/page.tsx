import DeveloperProfile from "@/components/developers/developer-profile";
import { developers } from "@/data/developers";

export default function Developers() {
    return (
        <div className="flex flex-col items-center justify-center my-20 w-6/12">
            <h2>개발자 소개</h2>
            <span>게임모리 개발팀을 소개합니다</span>
            <ul className="w-full">
                {developers.map((item, index) => (
                    <li key={index}>
                        <DeveloperProfile
                            name={item.name}
                            github={item.github}
                            introduce={item.introduce}
                            roles={item.roles}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
}
