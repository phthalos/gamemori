type PersonalizeListType = {
    question: string;
    key?: string;
    checkbox?: { name: string; value: string }[];
    radio?: { name: string; value: string }[];
    text?: boolean;
};
const personalizelist: PersonalizeListType[] = [
    {
        question: "어떤 장르의 게임을 좋아하시나요?",
        key: "genres",
        checkbox: [
            { name: "액션", value: "action" },
            { name: "인디", value: "indie" },
            { name: "어드벤처", value: "adventure" },
            { name: "롤플레잉", value: "role-playing-games-rpg" },
            { name: "전략", value: "strategy" },
            { name: "슈팅", value: "shooter" },
            { name: "캐주얼", value: "casual" },
            { name: "시뮬레이션", value: "simulation" },
            { name: "퍼즐", value: "puzzle" },
            { name: "아케이드", value: "arcade" },
            { name: "레이싱", value: "racing" },
            { name: "스포츠", value: "sports" },
            { name: "격투", value: "fighting" },
            { name: "가족용", value: "family" },
            { name: "보드 게임", value: "board-games" },
            { name: "카드 게임", value: "card" },
            { name: "교육용", value: "educational" },
        ],
    },
    {
        question: "어떤 게임 플랫폼을 자주 이용하시나요?",
        key: "stores",
        checkbox: [
            { name: "Steam", value: "1" },
            { name: "PlayStation Store", value: "3" },
            { name: "Xbox Store", value: "2" },
            { name: "App Store", value: "4" },
            { name: "GOG", value: "5" },
            { name: "Nintendo Store", value: "6" },
            { name: "Xbox 360 Store", value: "7" },
            { name: "Google Play", value: "8" },
            { name: "itch.io", value: "9" },
            { name: "Epic Games", value: "11" },
        ],
    },
    {
        question: "좋아하는 그래픽 스타일은 무엇인가요?",
        key: "tags",
        checkbox: [
            { name: "고어", value: "gore" },
            { name: "판타지", value: "fantasy" },
            { name: "픽셀 그래픽", value: "pixel-graphics" },
            { name: "애니메이션", value: "anime" },
            { name: "레트로", value: "retro" },
            { name: "화려함", value: "colorful" },
            { name: "귀여움", value: "cute" },
            { name: "3D", value: "3d" },
            { name: "사실적", value: "realistic" },
            { name: "역사적", value: "historical" },
            { name: "시네마틱", value: "clinermatic" },
            { name: "미래적", value: "futuristic" },
            { name: "중세", value: "medieval" },
            { name: "가상현실", value: "vr" },
        ],
    },
    {
        question: "누구와 함께 게임을 하시나요?",
        key: "tags",
        checkbox: [
            { name: "온라인 협동", value: "online-co-op" },
            { name: "온라인 멀티", value: "online-multiplayer" },
            { name: "로컬 협동", value: "local-co-op" },
            { name: "로컬 멀티", value: "local-multiplayer" },
        ],
    },
    {
        question: "게임에서 가장 중요하게 생각하는 요소는 무엇인가요?",
        key: "tags",
        checkbox: [
            { name: "어려움", value: "difficult" },
            { name: "컨트롤러 지원", value: "controller" },
            { name: "플레이어 간 전투", value: "pvp" },
            { name: "레벨 시스템", value: "includes-level-editor" },
            { name: "캐릭터 커스터마이징", value: "character-customization" },
            { name: "빠른 전개", value: "fast-paced" },
        ],
    },
    {
        question: "무료 게임을 선호하시나요?",
        key: "tags",
        radio: [
            { name: "네, 무료 게임만 하고 싶어요", value: "free-to-play" },
            { name: "상관없어요", value: "any" },
        ],
    },
    {
        question: "최근 가장 재미있게 플레이한 게임을 한 가지 알려주세요.",
        text: true,
    },
];

export { personalizelist };
