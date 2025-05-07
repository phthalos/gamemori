type PersonalizeListType = {
    question: string;
    slider?: {
        defaultvalue: number;
        max: number;
        step: number;
    };
    checkbox?: string[];
    radio?: string[];
    text?: boolean;
};
const personalizelist: PersonalizeListType[] = [
    {
        question: "고전게임 vs 최신게임",
        slider: {
            defaultvalue: 50,
            max: 100,
            step: 1,
        },
    },
    {
        question: "좋아하는 그래픽 스타일은?",
        checkbox: ["실사풍", "로우폴리", "애니메이션", "도트"],
    },
    {
        question: "하나만 선택하는 질문",
        radio: ["선택지1", "선택지2", "선택지3"],
    },
    {
        question: "최근 가장 재미있게 플레이한 게임을 한 가지 알려주세요!",
        text: true,
    },
];

export { personalizelist };
