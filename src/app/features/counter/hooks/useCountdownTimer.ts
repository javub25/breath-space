import {useEffect} from "react";
import { useCountdownStore } from "@/app/features/counter/hooks/useCountdownStore.ts";
import { advanceCountdown} from "@/app/features/counter/useCases/countdownUseCases.ts";

export const useCountdownTimer = () => 
{
    const timeInMiliseconds = 1000;
    const isCounting = useCountdownStore((state) => state.isCounting);
    const updateCountdown = useCountdownStore((state) => state.updateCountdown);

    useEffect(() => 
    {
        let counterInterval: number;
        
        if(isCounting) 
        {
            counterInterval = setInterval(() => 
            {
                advanceCountdown({counterInterval, updateCountdown});

            }, timeInMiliseconds);
        }
        
        return () => clearInterval(counterInterval);

    }, [isCounting])  
};
