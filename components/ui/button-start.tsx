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
                className={`${className} bg-violet-700 hover:bg-violet-600 transition-all duration-300 rounded-full shadow-lg shadow-purple-500/50 inset-shadow-xs inset-shadow-purple-200/50 hover:shadow-xl px-8 py-4 text-lg font-bold`}
            >
                {children}
            </button>
        </Link>
    );
}
