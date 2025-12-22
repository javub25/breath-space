import {useEffect, useRef} from "react";
import { hasAuthIdChanged } from "@/app/modules/auth/useCases/authUseCases.ts";
import { AuthUserIdType } from "@/app/modules/auth/types/AuthType";
import { userRepository } from "@/app/database/infraestructure/supabase/userRepository.ts";
import { useUserHistoryStore } from "./useUserHistoryStore";

export const useUserHistoryData = ({currentAuthId}: AuthUserIdType) => 
{
    const {historyData, updateHistoryData} = useUserHistoryStore();
       
     const prevAuthId = useRef<string>(null);
    
    useEffect(() => 
    {
        const isAuthIdChanged = hasAuthIdChanged({currentAuthId, prevAuthId});

        if(isAuthIdChanged)
        {
            const fetchUserHistory = async () => 
            {
                try
                {
                    const {data} = await userRepository.select({currentAuthId});
                    
                    updateHistoryData(data);
                }
                catch(error) 
                {
                    console.error("Error fetching user history:", error);
                }
            }
            fetchUserHistory();
        }

        prevAuthId.current = currentAuthId

    }, [currentAuthId]);
    

    return {
        historyData,
    }
}