"use client";
import FormInput from "@/components/form/form-input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Slider } from "@/components/ui/slider";
import { personalizelist } from "@/data/personalizelist";
import React, { useState } from "react";

export default function Personalize() {
    // FormInput 상태 관리를 위한 state
    const [inputValues, setInputValues] = useState<{ [key: number]: string }>({});
    const [inputErrors, setInputErrors] = useState<{ [key: number]: string }>({});

    // 입력값 변경 핸들러
    const handleInputChange = (index: number, newValue: string) => {
        setInputValues((prev) => ({
            ...prev,
            [index]: newValue,
        }));
    };

    // 에러 상태 변경 핸들러
    const handleErrorChange = (index: number, error: string) => {
        setInputErrors((prev) => ({
            ...prev,
            [index]: error,
        }));
    };

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        // 모든 텍스트 입력에 오류가 있는지 확인
        const hasErrors = Object.values(inputErrors).some(error => error !== "");
        if (hasErrors) {
            console.log("입력 오류가 있어 제출할 수 없습니다.");
            // 오류가 있을 때 알림을 표시하거나 다른 처리를 할 수 있습니다.
            return;
        }
        
        // 폼 데이터 수집
        const formData = {
            textInputs: inputValues,
            // 다른 입력 타입(체크박스, 라디오 등)의 값도 여기에 추가할 수 있습니다
        };
        
        console.log("제출 데이터:", formData);
        // 서버에 데이터 전송 로직 구현
        // 예: fetch('/api/personalize', { method: 'POST', body: JSON.stringify(formData) })
        
        // 폼 제출 (action 속성에 지정된 URL로 이동)
        e.currentTarget.submit();
    };

    return (
        <div className='w-6/12'>
            {/* 질문 & 답변 목록 */}
            <form onSubmit={(e) => onSubmit(e)} name='personalizeform' action='/result' method='post'>
                <ul className='flex flex-col gap-6 mb-5'>
                    {personalizelist.map((value, index) => (
                        <li key={index}>
                            <Card className='bg-violet-50/5'>
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
                                                <Slider className='mt-3' defaultValue={[value.slider.defaultvalue]} />
                                            </>
                                        ) : // 체크박스
                                        value.checkbox ? (
                                            <ul className='flex flex-col gap-2'>
                                                {value.checkbox.map((item, checkboxindex) => (
                                                    <div key={checkboxindex} className='flex items-center space-x-2'>
                                                        <Checkbox id={"checkbox" + checkboxindex.toString()} />
                                                        <Label htmlFor={"checkbox" + checkboxindex.toString()}>
                                                            {item.name}
                                                        </Label>
                                                    </div>
                                                ))}
                                            </ul>
                                        ) : // 라디오
                                        value.radio ? (
                                            <RadioGroup>
                                                {value.radio.map((item, radioindex) => (
                                                    <div key={radioindex} className='flex items-center space-x-2'>
                                                        <RadioGroupItem
                                                            value={item.name}
                                                            id={"radio" + radioindex.toString()}
                                                        />
                                                        <Label htmlFor={"radio" + radioindex.toString()}>
                                                            {item.name}
                                                        </Label>
                                                    </div>
                                                ))}
                                            </RadioGroup>
                                        ) : // 텍스트
                                        value.text ? (
                                            <>
                                                <FormInput 
                                                    value={inputValues[index] || ""}
                                                    onChange={(newValue) => handleInputChange(index, newValue)}
                                                    error={inputErrors[index] || ""}
                                                    onErrorChange={(error) => handleErrorChange(index, error)}
                                                />
                                                {/* 에러 메시지가 FormInput 내부에서 표시되므로 여기서는 추가 표시 안 함 */}
                                            </>
                                        ) : null
                                    }
                                </CardContent>
                            </Card>
                        </li>
                    ))}
                </ul>
                
                {/* 폼 전체 오류가 있을 때 표시할 메시지 (선택적) */}
                {Object.values(inputErrors).some(error => error !== "") && (
                    <div className="mb-4 p-3 bg-red-50 text-red-700 rounded-md">
                        <p className="font-medium">입력을 확인해주세요</p>
                        <p className="text-sm">모든 항목을 올바르게 입력해야 계속 진행할 수 있습니다.</p>
                    </div>
                )}
                
                {/* 버튼 디자인 필요 */}
                <Button 
                    type='submit' 
                    className='float-right'
                    // 오류가 있으면 버튼 비활성화 (선택적)
                    disabled={Object.values(inputErrors).some(error => error !== "")}
                >
                    결과 보러가기
                </Button>
            </form>
        </div>
    );
}