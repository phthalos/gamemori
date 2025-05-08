import React, { useState } from "react";
import { Input } from "../ui/input";

export default function FormInput() {
    const [value, setValue] = useState<string>();

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
        // if(e.target.value === ){

        // }
    };

    return <Input type="text" placeholder="게임 이름" value={value} onChange={() => onChange} />;
}
