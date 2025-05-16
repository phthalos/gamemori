type GameTypes = {
    name: string;
    metacritic: number;
    background_image: string;
    platforms: {
        platform: {
            id: number;
            name: string;
            slug: string;
        };
    }[];
};

export type { GameTypes };
