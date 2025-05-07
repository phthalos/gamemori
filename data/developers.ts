export type DevelopersType = {
    name: string; // 이름
    github: string; // 깃허브 아이디
    introduce: string; // 자기소개
    roles: string[]; // 역할 담당 태그
};

const developers: DevelopersType[] = [
    {
        name: "김지원",
        github: "phthalos",
        introduce: "안녕하세요!",
        roles: ["기획", "프론트엔드"],
    },
    {
        name: "홍길동",
        github: "username",
        introduce: "안녕하세요!",
        roles: ["배포"],
    },
];

export { developers };
