import { getNextTime } from "@/app/features/counter/domain/services/counterRules.ts";
import { useCountdownStore } from "@/app/features/counter/hooks/useCountdownStore.ts";

import { 
    AdvanceCountdownType, 
} from "@/app/features/counter/domain/entities/CounterType.ts";

import {
    MinutesObjectType
} from "@/app/features/form/types/FormType.ts";


const advanceCountdown = ({counterInterval, updateCountdown}: AdvanceCountdownType) => 
{
    updateCountdown((currentCountdown) => 
    {
        const countdownTime = getNextTime(currentCountdown);
                    
        if(countdownTime.isFinished) 
        {
            clearInterval(counterInterval);
        }

        return {
            minutes: countdownTime.minutes,
            seconds: countdownTime.seconds
        }  
    })
}

const updateCountdownMinutes = (minutes: number) => 
{
    const setCountdown = useCountdownStore.getState().updateCountdown;

    setCountdown(() => ({
        minutes,
        seconds: 0
    }));
}

const getCountdownMinutes = ({minutes}: MinutesObjectType) => 
{
    const countdownMinutes = convertMinutesToInteger({minutes});

    return countdownMinutes;
}

const convertMinutesToInteger = ({minutes}: MinutesObjectType) =>
{
    return parseInt(minutes as string);
}


export {
    advanceCountdown,
    getCountdownMinutes,
    updateCountdownMinutes
}