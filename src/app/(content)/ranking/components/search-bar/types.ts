import { InputHTMLAttributes } from "react";

interface SearchBarProps extends InputHTMLAttributes<HTMLInputElement> {
    onEnterPress: (text: string) => void,
}

export type { SearchBarProps }