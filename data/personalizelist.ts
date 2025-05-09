type PersonalizeListType = {
    question: string;
    slider?: {
        defaultvalue: number;
        max: number;
        step: number;
    };
    checkbox?: { name: string; value: string }[];
    radio?: { name: string; value: string }[];
    text?: boolean;
};
const personalizelist: PersonalizeListType[] = [
    {
        question: '어떤 장르의 게임을 좋아하시나요?',
        checkbox: [
            { name: '액션', value: 'action' },
            { name: '인디', value: 'indie' },
            { name: '어드벤처', value: 'adventure' },
            { name: '롤플레잉', value: 'role-playing-games-rpg' },
            { name: '전략', value: 'strategy' },
            { name: '슈팅', value: 'shooter' },
            { name: '캐주얼', value: 'casual' },
            { name: '시뮬레이션', value: 'simulation' },
            { name: '퍼즐', value: 'puzzle' },
            { name: '아케이드', value: 'arcade' },
            { name: '레이싱', value: 'racing' },
            { name: '스포츠', value: 'sports' },
            { name: '격투', value: 'fighting' },
            { name: '가족용', value: 'family' },
            { name: '보드 게임', value: 'board-games' },
            { name: '카드 게임', value: 'card' },
            { name: '교육용', value: 'educational' },
        ],
    },
    {
        question: '좋아하는 그래픽 스타일은?',
        checkbox: [
            { name: '픽셀 아트', value: 'pixel-art' },
            { name: '2D', value: '2d' },
            { name: '3D', value: '3d' },
            { name: '만화 스타일', value: 'comic-book' },
            { name: '셀 셰이딩', value: 'cel-shaded' },
            { name: '레트로', value: 'retro' },
            { name: '미니멀리즘', value: 'minimalist' },
            { name: '사실적', value: 'realistic' },
            { name: '애니메이션 스타일', value: 'anime' },
            { name: '핸드 드로잉', value: 'hand-drawn' },
            { name: '사이버펑크', value: 'cyberpunk' },
            { name: '디스토피아', value: 'dystopian' },
            { name: '미래지향적', value: 'futuristic' },
            { name: '다크 판타지', value: 'dark-fantasy' },
            { name: '네온', value: 'neon' },
            { name: '흑백', value: 'black-and-white' },
            { name: '수채화', value: 'watercolor' },
        ],
    },
    {
        question: '어떤 게임 플랫폼을 자주 이용하시나요?',
        checkbox: [
            { name: 'Steam', value: 'steam' },
            { name: 'Epic Games', value: 'epic-games' },
            { name: 'EA App', value: 'ea-app' },
            { name: 'GOG', value: 'gog' },
            { name: 'Xbox Store', value: 'xbox-store' },
            { name: 'PlayStation Store', value: 'playstation-store' },
            { name: 'Nintendo eShop', value: 'nintendo' },
            { name: 'itch.io', value: 'itch' },
            { name: 'Google Play', value: 'google-play' },
            { name: 'App Store', value: 'apple-appstore' },
        ],
    },
    {
        question: '선호하는 게임 플레이 시간은?',
        radio: [
            { name: '10시간 이하 (짧고 간단한 게임)', value: 'short' },
            { name: '10~30시간', value: 'medium' },
            { name: '30시간 이상 (장기 몰입형 게임)', value: 'long' },
            { name: '상관없음', value: 'any' },
        ],
    },
    {
        question: '누구와 함께 게임을 하시나요?',
        checkbox: [
            { name: '혼자 플레이', value: 'singleplayer' },
            { name: '친구들과 온라인 멀티', value: 'multiplayer-friends' },
            { name: '불특정 다수와 멀티플레이', value: 'online-multiplayer' },
            { name: '로컬(같은 화면) 멀티', value: 'local-multiplayer' },
        ],
    },
    {
        question: '게임에서 가장 중요하게 생각하는 요소는?',
        checkbox: [
            { name: '스토리', value: 'story' },
            { name: '그래픽', value: 'graphics' },
            { name: '게임성/조작감', value: 'gameplay' },
            { name: '음악/사운드', value: 'sound' },
            { name: '도전 과제/성취감', value: 'achievements' },
            { name: '커스터마이징 요소', value: 'customization' },
        ],
    },
    {
        question: '무료 게임을 선호하시나요?',
        radio: [
            { name: '네, 무료 게임만 하고 싶어요', value: 'free' },
            { name: '아니요, 유료 게임도 괜찮아요', value: 'paid' },
            { name: '상관없어요', value: 'any' },
        ],
    },
    {
        question: '최근 가장 재미있게 플레이한 게임을 한 가지 알려주세요.',
        text: true,
    },
];

export { personalizelist };
