import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Slider } from "@/components/ui/slider";
import { personalizelist } from "@/data/personalizelist";

export default function Personalize() {
    return (
        <div className="md:w-6/12 w-4/12">
            {/* 질문 & 답변 목록 */}
            <form>
                <ul className="flex flex-col gap-6 mb-5">
                    {personalizelist.map((value, index) => (
                        <li key={index} className="p-12 border rounded-lg w-full">
                            {/* 질문 */}
                            <h3 className="mb-3">
                                {index + 1}. {value.question}
                            </h3>
                            {/* 답변 선택지(동적으로 생성됨) */}
                            {
                                // 슬라이더
                                value.slider ? (
                                    <>
                                        {/* 슬라이더 값 표시 구현 필요 */}
                                        <Label htmlFor={index.toString()}>2025년</Label>
                                        {/* 슬라이더 핸들 2개 구현 필요 */}
                                        <Slider className="mt-3" defaultValue={[value.slider.defaultvalue]} />
                                    </>
                                ) : // 체크박스
                                value.checkbox ? (
                                    <ul className="flex flex-col gap-2">
                                        {value.checkbox.map((item, checkboxindex) => (
                                            <div key={checkboxindex} className="flex items-center space-x-2">
                                                <Checkbox id={"checkbox" + checkboxindex.toString()} />
                                                <Label htmlFor={"checkbox" + checkboxindex.toString()}>{item}</Label>
                                            </div>
                                        ))}
                                    </ul>
                                ) : // 라디오
                                value.radio ? (
                                    <RadioGroup>
                                        {value.radio.map((item, radioindex) => (
                                            <div key={radioindex} className="flex items-center space-x-2">
                                                <RadioGroupItem value={item} id={"radio" + radioindex.toString()} />
                                                <Label htmlFor={"radio" + radioindex.toString()}>{item}</Label>
                                            </div>
                                        ))}
                                    </RadioGroup>
                                ) : // 텍스트
                                value.text ? (
                                    // 유효성 검사 및 XSS 방어 필요
                                    <Input type="text" placeholder="게임 이름" />
                                ) : null
                            }
                        </li>
                    ))}
                </ul>
                {/* 버튼 디자인 및 결과 제출 기능 구현 필요 */}
                <Button type="submit" className="float-right">
                    결과 보러가기
                </Button>
            </form>
        </div>
    );
}
