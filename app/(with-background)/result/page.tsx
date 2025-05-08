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

export default function Result() {
    return (
        <div className="w-6/12">
            <h2 className="-mt-10 mb-8">테스트 결과</h2>
            <Dialog>
                <DialogTrigger>
                    <ResultItem />
                </DialogTrigger>
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
    );
}
