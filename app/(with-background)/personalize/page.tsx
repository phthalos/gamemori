"use client";
import FormInput from "@/components/form/form-input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Slider } from "@/components/ui/slider";
import { personalizelist } from "@/data/personalizelist";
import React from "react";

export default function Personalize() {
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // 유효성 검사 구현
    };
    return (
        <div className="w-6/12">
            {/* 질문 & 답변 목록 */}
            <form onSubmit={(e) => onSubmit(e)} name="personalizeform" action="/result" method="post">
                <ul className="flex flex-col gap-6 mb-5">
                    {personalizelist.map((value, index) => (
                        <li key={index}>
                            <Card className="bg-violet-50/5">
                                {/* 질문 */}
                                <CardHeader>
                                    <CardTitle>
                                        {index + 1}. {value.question}
                                    </CardTitle>
                                </CardHeader>
                                {/* 답변 선택지(동적으로 생성됨) */}
                                <CardContent>
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
                                                        <Label htmlFor={"checkbox" + checkboxindex.toString()}>
                                                            {item}
                                                        </Label>
                                                    </div>
                                                ))}
                                            </ul>
                                        ) : // 라디오
                                        value.radio ? (
                                            <RadioGroup>
                                                {value.radio.map((item, radioindex) => (
                                                    <div key={radioindex} className="flex items-center space-x-2">
                                                        <RadioGroupItem
                                                            value={item}
                                                            id={"radio" + radioindex.toString()}
                                                        />
                                                        <Label htmlFor={"radio" + radioindex.toString()}>{item}</Label>
                                                    </div>
                                                ))}
                                            </RadioGroup>
                                        ) : // 텍스트
                                        value.text ? (
                                            // 유효성 검사 및 XSS 방어 필요
                                            <FormInput />
                                        ) : null
                                    }
                                </CardContent>
                            </Card>
                        </li>
                    ))}
                </ul>
                {/* 버튼 디자인 필요 */}
                <Button type="submit" className="float-right">
                    결과 보러가기
                </Button>
            </form>
        </div>
    );
}
