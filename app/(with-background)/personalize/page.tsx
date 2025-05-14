"use client";
import React, { useState } from "react";
import { personalizelist } from "@/data/personalizelist";
import FormInput from "@/components/form/form-input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export default function Personalize() {
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        //유효성 검사 구현
    };

    type Answers = {
        genres: string[];
        stores: string[];
        tags: string[];
    };

    const [answers, setAnswers] = useState<Answers>({
        genres: [],
        stores: [],
        tags: [],
    });

    const buildQuery = () => {
        const queryObject: Record<string, string> = {};

        (["genres", "stores", "tags"] as (keyof Answers)[]).forEach((key) => {
            if (answers[key] && answers[key].length > 0) {
                queryObject[key] = answers[key].join(",");
            }
        });

        return new URLSearchParams(queryObject).toString();
    };

    const query = buildQuery();

    const onCheckboxChange = (key: keyof Answers, value: string, checked: boolean) => {
        setAnswers((prev) => {
            const prevList = prev[key];
            return {
                ...prev,
                [key]: checked ? [...prevList, value] : prevList.filter((v: string) => v !== value),
            };
        });
    };

    const onRadioChange = (key: keyof Answers, value: string) => {
        setAnswers((prev) => {
            const current = prev[key] || [];

            const radioOptions =
                personalizelist.find((item) => item.key === key && item.radio)?.radio?.map((r) => r.value) || [];

            const filtered = current.filter((v) => !radioOptions.includes(v));

            return {
                ...prev,
                [key]: [...filtered, value],
            };
        });
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
                                    {value.checkbox ? (
                                        <ul className="flex flex-col gap-2">
                                            {value.checkbox.map((item, checkboxindex) => (
                                                <div key={checkboxindex} className="flex items-center space-x-2">
                                                    <Checkbox
                                                        id={`checkbox${index}-${checkboxindex}`}
                                                        checked={
                                                            answers[value.key as keyof Answers]?.includes(item.value) ||
                                                            false
                                                        }
                                                        onCheckedChange={(checked) =>
                                                            onCheckboxChange(
                                                                value.key as keyof Answers,
                                                                item.value,
                                                                Boolean(checked)
                                                            )
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
                                            value={
                                                answers[value.key as keyof Answers]?.find((v) =>
                                                    value.radio?.some((r) => r.value === v)
                                                ) || ""
                                            }
                                            onValueChange={(val) => onRadioChange(value.key as keyof Answers, val)}
                                        >
                                            {value.radio.map((item, radioindex) => (
                                                <div key={radioindex} className="flex items-center space-x-2">
                                                    <RadioGroupItem
                                                        value={item.value}
                                                        id={`radio${index}-${radioindex}`}
                                                    />
                                                    <Label htmlFor={`radio${index}-${radioindex}`}>{item.name}</Label>
                                                </div>
                                            ))}
                                        </RadioGroup>
                                    ) : value.text ? (
                                        <FormInput />
                                    ) : null}
                                </CardContent>
                            </Card>
                        </li>
                    ))}
                </ul>
                <Button href={`/result?${query}`} type="submit" className="float-right">
                    결과 보기
                </Button>
            </form>
        </div>
    );
}
