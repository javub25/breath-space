import { create } from "zustand";
import {CountdownStoreType} from "@/app/features/counter/domain/entities/CounterType.ts";

export const useCountdownStore = create<CountdownStoreType>((set, get) => (
{
    currentCountdown: 
    { 
        minutes: 0, seconds: 0 
    },

    isCounting: false,
    
    updateCountdown(updater) 
    {         
        const {currentCountdown} = get();
        
        const newCountdown = updater(currentCountdown);
        
        set({ currentCountdown: newCountdown });
    },

    startCountdown: () => 
    {
        set({ isCounting: true })
    },

     stopCountdown: () => 
    {
        set({ isCounting: false })
    },
}));