import DeveloperProfile from "@/components/developers/developer-profile";
import { developers } from "@/data/developers";

export default function Developers() {
    return (
        <div className="flex flex-col items-center justify-center my-20 w-6/12">
            <h2>개발자 소개</h2>
            <span>게임모리 개발팀을 소개합니다</span>
            <ul className="m-auto grid-cols-3 grid">
                {developers.map((item, index) => (
                    <li key={index} className="w-fit my-8 mx-4 inline-block">
                        <DeveloperProfile name={item.name} github={item.github} roles={item.roles} />
                    </li>
                ))}
            </ul>
        </div>
    );
}
