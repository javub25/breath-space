import "@/app/features/counter/styles/counter.css";
import { CounterCircle } from "@/app/features/counter/ui/CounterCircle";
import { Countdown } from "@/app/features/counter/ui/Countdown";
import {CounterControls} from "@/app/features/counter/ui/CounterControls";
import { useCountdownTimer } from "@/app/features/counter/hooks/useCountdownTimer";

export const Counter = () => 
{    
    useCountdownTimer();

    return (
        <>
            <CounterCircle />
            <Countdown />
            <CounterControls/>
        </>
    )
}