import Logo from "../logos/logo";
import GithubOfficial from "../icons/github-official";
import Link from "next/link";

export default function Header() {
    return (
        <div className="py-4 fixed w-full flex items-center justify-center">
            <div className="w-full mx-[10%] flex justify-between items-center">
                <Logo />
                {/* <span className="bg-gray-50/20 rounded-full px-3 py-2 -ml-10">테스트</span> */}
                <Link
                    href="https://github.com/phthalos/ossproject"
                    target="_blank"
                    className="cursor-pointer text-gray-50/50 hover:text-gray-200 transition-all duration-300
                    
                    "
                >
                    <GithubOfficial />
                </Link>
            </div>
        </div>
    );
}
