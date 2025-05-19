import { ScoreBadge } from "./score-badge";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { GameTypes } from "@/types/types";
import { PlatformIconList } from "../ui/platform-icon";
import GameDescription from "../ui/GameDescription";

interface Props {
    games: GameTypes[];
    index: number;
}

export default function ResultItem({ games, index }: Props) {
    return (
        <div className="flex flex-col gap-3">
            {games.slice(index * 4, (index + 1) * 4).map((game, index) => (
                /* 게임 목록 1개 */
                <Dialog key={index}>
                    {/* 게임 목록 아이템 */}
                    <DialogTrigger className="h-fit">
                        <div className="bg-gradient-to-bl p-px from-purple-500 to-40% to-neutral-800 rounded-lg overflow-hidden hover:scale-105 transition-all duration-300 text-left">
                            <div className="bg-gradient-to-bl from-violet-950 to-60% to-neutral-900 rounded-lg overflow-hidden pb-2 hover:scale-105 transition-all duration-300 text-left relative">
                                {/* 썸네일 이미지 */}
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src={game.background_image}
                                    alt="썸네일 이미지"
                                    className="bg-gray-700 object-cover"
                                />
                                <div className="p-4">
                                    <ul className="flex justify-between">
                                        {/* 게임제목 */}
                                        <li>
                                            <h4 className="break-keep leading-6">{game.name}</h4>
                                        </li>
                                        {/* 메타크리틱 점수 배지 */}
                                        <li className="ml-12">
                                            <ScoreBadge
                                                variant={
                                                    game.metacritic >= 75
                                                        ? "green"
                                                        : game.metacritic >= 50
                                                        ? "yellow"
                                                        : game.metacritic >= 0
                                                        ? "red"
                                                        : "gray"
                                                }
                                            >
                                                {game.metacritic}
                                            </ScoreBadge>
                                        </li>
                                    </ul>
                                    {/* 플랫폼 목록 아이콘들 */}
                                    <PlatformIconList list={game.platforms} />
                                </div>
                            </div>
                        </div>
                    </DialogTrigger>
                    {/* 게임 상세정보 팝업 */}
                    <DialogContent className="max-h-[90vh] overflow-y-scroll">
                        <DialogHeader>
                            <DialogTitle>{game.name}</DialogTitle>
                        </DialogHeader>
                        {/* 썸네일 이미지 */}
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src={game.background_image}
                            alt="썸네일 이미지"
                            className="bg-gray-400 object-cover my-8"
                        />

                        {/* 게임 설명 */}
                        <DialogDescription>
                            <GameDescription id={game.id} />
                        </DialogDescription>
                        <DialogFooter>(팝업 footer 영역)</DialogFooter>
                    </DialogContent>
                </Dialog>
            ))}
        </div>
    );
}
