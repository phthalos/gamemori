// import fs from "fs";
// import path from "path";

// const developersImages = fs.readdirSync(path.join(process.cwd(), "public/images/developers"));

// export { developersImages };

export type DevelopersType = {
    name: string; // 이름
    github: string; // 깃허브 아이디
    roles: string[]; // 역할 담당 태그
};

const developers: DevelopersType[] = [
    {
        name: "김연지",
        github: "YeonJi0201",
        roles: ["역할"],
    },
    {
        name: "김의윤",
        github: "euisak",
        roles: ["역할"],
    },
    {
        name: "김지원",
        github: "phthalos",
        roles: ["역할"],
    },
    {
        name: "박소정",
        github: "sojeong0302",
        roles: ["역할"],
    },
    {
        name: "홍샛별",
        github: "saetbyeolhong",
        roles: ["역할"],
    },
];

export { developers };
