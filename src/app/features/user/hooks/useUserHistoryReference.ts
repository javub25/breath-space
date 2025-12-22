import {useRef} from "react";

export const useUserHistoryReference = () => 
{
    const userHistoryRef = useRef<HTMLDivElement | null>(null)

    return userHistoryRef;
}