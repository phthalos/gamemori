import React, { useState } from "react";
import { Input } from "../ui/input";
import DOMPurify from 'dompurify';

export default function FormInput() {
    const [value, setValue] = useState<string>("");
    
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        // 사용자 입력을 DOMPurify로 소독(sanitize)
        const sanitizedValue = DOMPurify.sanitize(e.target.value);
        setValue(sanitizedValue);
        
        // 필요한 경우 여기에 조건부 로직 추가
        // if(sanitizedValue === "특정값") {
        //     // 어떤 동작 수행
        // }
    };
    
    // 입력값에 대한 유효성 검사 패턴 (선택적)
    const validateInput = (input: string): boolean => {
        // 허용되는 문자만 포함하는지 확인 (예: 알파벳, 숫자, 일부 특수문자)
        const pattern = /^[A-Za-z0-9\s가-힣ㄱ-ㅎㅏ-ㅣ_\-\.]+$/;
        return pattern.test(input);
    };
    
    // 오류 상태 관리 (선택적)
    const [error, setError] = useState<string>("");
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const sanitizedValue = DOMPurify.sanitize(e.target.value);
        
        // 유효성 검사 (선택적)
        if (sanitizedValue && !validateInput(sanitizedValue)) {
            setError("유효하지 않은 문자가 포함되어 있습니다.");
        } else {
            setError("");
        }
        
        onChange(e);
    };
    
    return (
        <div>
            <Input 
                type="text" 
                placeholder="게임 이름" 
                value={value} 
                onChange={handleChange}
                // HTML 속성을 통한 추가 보호
                maxLength={50}
            />
            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        </div>
    );
}
