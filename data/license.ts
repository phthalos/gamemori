export type LicenseType = {
    name: string; // 오픈소스 이름
    version: string; // 오픈소스 버전
    description: string; // 오픈소스 한줄설명
    website: string; // 홈페이지
    license: string; // 라이선스 종류
};

const license: LicenseType[] = [
    {
        name: "@hookform/resolvers",
        version: "5.0.1",
        description: "Performant, flexible and extensible forms with easy to use validation.",
        website: "https://www.npmjs.com/package/@hookform/resolvers",
        license: "MIT",
    },
    {
        name: "@radix-ui/react-icons",
        version: "1.3.2",
        description: "A crisp set of 15×15 icons designed by the WorkOS team.",
        website: "https://www.npmjs.com/package/@radix-ui/react-icons",
        license: "MIT",
    },
    {
        name: "axios",
        version: "1.9.0",
        description: "Promise based HTTP client for the browser and node.js",
        website: "https://www.npmjs.com/package/axios",
        license: "MIT",
    },
    {
        name: "class-variance-authority",
        version: "0.7.1",
        description:
            "cva aims to take those pain points away, allowing you to focus on the more fun aspects of UI development.",
        website: "https://www.npmjs.com/package/class-variance-authority",
        license: "Apache-2.0",
    },
    {
        name: "clsx",
        version: "2.1.1",
        description: "A tiny (239B) utility for constructing className strings conditionally.",
        website: "https://www.npmjs.com/package/clsx",
        license: "MIT",
    },
    {
        name: "concurrently",
        version: "9.1.2",
        description: "Run multiple commands concurrently. Like npm run watch-js & npm run watch-less but better.",
        website: "https://www.npmjs.com/package/concurrently",
        license: "MIT",
    },
    {
        name: "dompurify",
        version: "3.2.5",
        description: "DOMPurify is a DOM-only, super-fast, uber-tolerant XSS sanitizer for HTML, MathML and SVG.",
        website: "https://www.npmjs.com/package/dompurify",
        license: "MPL-2.0 OR Apache-2.0",
    },
    {
        name: "lucide-react",
        version: "0.503.0",
        description: "Implementation of the lucide icon library for React applications.",
        website: "https://www.npmjs.com/package/lucide-react",
        license: "ISC",
    },
    {
        name: "motion",
        version: "12.10.1",
        description: "Motion is an open source, production-ready library that’s designed for all creative developers.",
        website: "https://www.npmjs.com/package/motion",
        license: "MIT",
    },
    {
        name: "next",
        version: "15.3.1",
        description: "The React Framework for the Web",
        website: "https://www.npmjs.com/package/next",
        license: "MIT",
    },
    {
        name: "react",
        version: "19.0.0",
        description: "React is a JavaScript library for creating user interfaces.",
        website: "https://www.npmjs.com/package/react",
        license: "MIT",
    },
    {
        name: "react-dom",
        version: "19.0.0",
        description: "This package serves as the entry point to the DOM and server renderers for React.",
        website: "https://www.npmjs.com/package/react-dom",
        license: "MIT",
    },
    {
        name: "react-hook-form",
        version: "7.56.3",
        description: "Performant, flexible and extensible forms with easy-to-use validation.",
        website: "https://www.npmjs.com/package/react-hook-form",
        license: "MIT",
    },
    {
        name: "tailwind-merge",
        version: "3.2.0",
        description: "Utility function to efficiently merge Tailwind CSS classes in JS without style conflicts.",
        website: "https://www.npmjs.com/package/tailwind-merge",
        license: "MIT",
    },
    {
        name: "zod",
        version: "3.24.4",
        description: "TypeScript-first schema validation with static type inference",
        website: "https://www.npmjs.com/package/zod",
        license: "MIT",
    },
    {
        name: "tailwindcss",
        version: "4.0.0",
        description: "A utility-first CSS framework for rapidly building custom user interfaces.",
        website: "https://www.npmjs.com/package/tailwindcss",
        license: "MIT",
    },
];

export { license };
