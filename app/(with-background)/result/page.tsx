import ResultItem from "@/components/result/result-item";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";

export default function Result() {
    return (
        <>
            <div className="mb-10 w-full flex flex-col px-[10%]">
                <h1>무슨 스토어 게임</h1>
                <span className="text-gray-300">무슨무슨 스토어의 게임 목록에 대한 한줄설명을 입력합니다</span>
            </div>
            <div className="w-full grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-3 px-[10%] mb-24">
                {/* 게임 목록 1개 */}
                <Dialog>
                    {/* 게임 목록 아이템 */}
                    <DialogTrigger>
                        <ResultItem />
                    </DialogTrigger>
                    {/* 게임 상세정보 팝업 */}
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>게임제목</DialogTitle>
                            <DialogDescription>게임 한줄설명</DialogDescription>
                        </DialogHeader>
                        (게임 상세정보 영역)
                        <DialogFooter>(팝업 footer 영역)</DialogFooter>
                    </DialogContent>
                </Dialog>
            </div>
            {/* 페이지네이션 */}
            <Pagination>
                <PaginationContent>
                    <PaginationItem>
                        <PaginationPrevious href="#" />
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#">1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#" isActive>
                            2
                        </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#">3</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationEllipsis />
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationNext href="#" />
                    </PaginationItem>
                </PaginationContent>
            </Pagination>
        </>
    );
}
