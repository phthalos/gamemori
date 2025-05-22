import React from "react";
import { Input } from "../ui/input";
import DOMPurify from 'dompurify';

interface FormInputProps {
  value: string;
  onChange: (value: string) => void;
  onErrorChange: (error: string) => void;
  error: string;
}

export default function FormInput({ value, onChange, onErrorChange, error }: FormInputProps) {
    const [isFocused, setIsFocused] = React.useState<boolean>(false);
    
    // 입력값에 대한 유효성 검사 패턴
    const validateInput = (input: string): boolean => {
        // 허용되는 문자만 포함하는지 확인 (예: 알파벳, 숫자, 일부 특수문자)
        const pattern = /^[A-Za-z0-9\s가-힣ㄱ-ㅎㅏ-ㅣ_\-\.]+$/;
        return pattern.test(input);
    };
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        // 사용자 입력을 DOMPurify로 소독(sanitize)
        const sanitizedValue = DOMPurify.sanitize(e.target.value);
        
        // 유효성 검사
        if (sanitizedValue && !validateInput(sanitizedValue)) {
            onErrorChange("유효하지 않은 문자가 포함되어 있습니다.");
        } else {
            onErrorChange("");
        }
        
        // 부모 컴포넌트로 값 전달
        onChange(sanitizedValue);
    };
    
    return (
        <div className="relative">
            <Input 
                type="text" 
                placeholder="게임 이름" 
                value={value} 
                onChange={handleChange}
                maxLength={50}
                className={error ? "border-red-500" : ""}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
            />
            
            {/* 경고 메시지 표시 */}
            {error && (
                <div className="flex items-center mt-2">
                    <div className="flex-shrink-0 mr-2">
                        <svg className="h-5 w-5 text-red-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <p className="text-sm text-red-600">
                        {error}
                    </p>
                </div>
            )}
            
            {/* 입력이 유효할 때 피드백 (선택 사항) */}
            {isFocused && !error && value && (
                <div className="absolute right-0 top-full mt-1 px-2 py-1 bg-gray-100 text-xs text-gray-600 rounded">
                    올바른 입력 형식입니다
                </div>
            )}
        </div>
    );
}