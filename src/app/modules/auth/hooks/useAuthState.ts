import { useEffect} from "react";
import supabase from "@/app/database/infraestructure/supabase/client.ts";
import { handleAuthChange } from "@/app/modules/auth/useCases/authUseCases";
import { useAuthUserName } from "@/app/modules/auth/hooks/useAuthUserName.ts";

export const useAuthState = () => 
{
    const {currentAuthUserName} = useAuthUserName();

    useEffect(() => 
    {
       const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => 
        {
            handleAuthChange(session);
        });

        return () => subscription.unsubscribe();

    }, []);

    return currentAuthUserName
}