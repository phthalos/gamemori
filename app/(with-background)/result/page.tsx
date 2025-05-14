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
            <h2 className="-mt-10 mb-8">테스트 결과</h2>
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
