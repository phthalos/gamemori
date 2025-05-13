import Link from "next/link";
import React from "react";

type Params = {
    children: React.ReactNode;
    className: string;
    href: string;
};

export default function ButtonStart({ children, className, href }: Params) {
    return (
        <Link href={href}>
            <button
                type="button"
                className={`${className} bg-violet-700 hover:bg-violet-600 hover:animate-[pop_0.5s_ease-in-out_forwards] transition-all duration-300 rounded-full shadow-purple-500/50 inset-shadow-xs inset-shadow-purple-200/50`}
            >
                {children}
            </button>
        </Link>
    );
}
