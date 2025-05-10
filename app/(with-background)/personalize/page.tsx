"use client";
import React, { useState } from "react";
import { personalizelist } from "@/data/personalizelist";
import FormInput from "@/components/form/form-input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Slider } from "@/components/ui/slider";

export default function Personalize() {
    const [answers, setAnswers] = useState<Record<number, any>>({});

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // 유효성 검사 구현
        console.log("사용자 응답:", answers);
    };

    const onCheckboxChange = (questionIndex: number, value: string, checked: boolean) => {
        setAnswers((prev) => {
            const prevList = prev[questionIndex] ?? [];
            if (checked) {
                return { ...prev, [questionIndex]: [...prevList, value] };
            } else {
                return {
                    ...prev,
                    [questionIndex]: prevList.filter((v: string) => v !== value),
                };
            }
        });
    };

    const onRadioChange = (questionIndex: number, value: string) => {
        setAnswers((prev) => ({ ...prev, [questionIndex]: value }));
    };

    return (
        <div className="w-6/12">
            <form onSubmit={onSubmit} name="personalizeform" action="/result" method="post">
                <ul className="flex flex-col gap-6 mb-5">
                    {personalizelist.map((value, index) => (
                        <li key={index}>
                            <Card className="bg-violet-50/5">
                                <CardHeader>
                                    <CardTitle>
                                        {index + 1}. {value.question}
                                    </CardTitle>
                                </CardHeader>
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
                                        ) : value.checkbox ? (
                                            <ul className="flex flex-col gap-2">
                                                {value.checkbox.map((item, checkboxindex) => (
                                                    <div key={checkboxindex} className="flex items-center space-x-2">
                                                        <Checkbox
                                                            id={`checkbox${index}-${checkboxindex}`}
                                                            checked={answers[index]?.includes(item.value) || false}
                                                            onCheckedChange={(checked) =>
                                                                onCheckboxChange(index, item.value, Boolean(checked))
                                                            }
                                                        />
                                                        <Label htmlFor={`checkbox${index}-${checkboxindex}`}>
                                                            {item.name}
                                                        </Label>
                                                    </div>
                                                ))}
                                            </ul>
                                        ) : value.radio ? (
                                            <RadioGroup
                                                value={answers[index] || ""}
                                                onValueChange={(val) => onRadioChange(index, val)}
                                            >
                                                {value.radio.map((item, radioindex) => (
                                                    <div key={radioindex} className="flex items-center space-x-2">
                                                        <RadioGroupItem
                                                            value={item.value}
                                                            id={`radio${index}-${radioindex}`}
                                                        />
                                                        <Label htmlFor={`radio${index}-${radioindex}`}>
                                                            {item.name}
                                                        </Label>
                                                    </div>
                                                ))}
                                            </RadioGroup>
                                        ) : value.text ? (
                                            <FormInput />
                                        ) : null
                                    }
                                </CardContent>
                            </Card>
                        </li>
                    ))}
                </ul>
                <Button type="submit" className="float-right">
                    결과 보기
                </Button>
            </form>
        </div>
    );
}
