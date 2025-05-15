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
            { name: "판타지", value: "Fantasy" },
            { name: "유머", value: "Funny" },
            { name: "고어", value: "Gore" },
            { name: "탐험", value: "Exploration" },
            { name: "고전", value: "Classic" },
            { name: "생존", value: "Survival" },
            { name: "폭력성", value: "Violent" },
            { name: "액션 어드벤처", value: "Action-Adventure" },
            { name: "액션 RPG", value: "Action RPG" },
            { name: "전략 전술", value: "Tactical" },
            { name: "통계", value: "stats" },
            { name: "포스트 아포칼립스", value: "Moddable" },
            { name: "우주", value: "Space" },
            { name: "롤플레잉", value: "role-playing" },
            { name: "좀비", value: "Zombies" },
            { name: "전쟁", value: "War" },
            { name: "미스터리", value: "Mystery" },
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
            { name: "픽셀 그래픽", value: "Pixel Graphics" },
            { name: "애니메이션", value: "Anime" },
            { name: "레트로", value: "Retro" },
            { name: "화려함", value: "Colorful" },
            { name: "귀여움", value: "Cute" },
            { name: "3D", value: "3D" },
            { name: "사실적", value: "Realistic" },
            { name: "역사적", value: "Historical" },
            { name: "시네마틱", value: "Clinermatic" },
            { name: "미래적", value: "Futuristic" },
            { name: "중세", value: "Medieval" },
            { name: "가상현실", value: "VR" },
        ],
    },
    {
        question: "누구와 함께 게임을 하시나요?",
        key: "tags",
        checkbox: [
            { name: "온라인 협동", value: "Online Co-Op" },
            { name: "온라인 멀티", value: "Online multiplayer" },
            { name: "로컬 협동", value: "Local Co-Op" },
            { name: "로컬 멀티", value: "Local Multiplayer" },
        ],
    },
    {
        question: "게임에서 가장 중요하게 생각하는 요소는 무엇인가요?",
        key: "tags",
        checkbox: [
            { name: "어려움", value: "Difficult" },
            { name: "컨트롤러 지원", value: "Controller" },
            { name: "플레이어 간 전투", value: "PvP" },
            { name: "레벨 시스템", value: "Includes level editor" },
            { name: "캐릭터 커스터마이징", value: "Character Customization" },
            { name: "빠른 전개", value: "Fast-Paced" },
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
