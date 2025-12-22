import { signInWithGoogle } from "@/app/modules/auth/services/signInWithGoogle";
import { signOutFromGoogle } from "@/app/modules/auth/services/signOutFromGoogle";
import { useAuthUserStore } from "@/app/modules/auth/hooks/useAuthUserStore";
import { AuthIdChangedType } from "@/app/modules/auth/types/AuthType";


import { 
    getUserIdFromSession, 
    getUserNameFromSession 
} from "@/app/modules/auth/useCases/sessionUseCases";

import {SessionType} from '@/app/database/infraestructure/supabase/types.ts';


const handleSignInOut = (authenticatedUser: string) => 
{
    if(authenticatedUser) 
    {
        signOutFromGoogle();
    }
    
    else 
    {
        signInWithGoogle();
    } 
}

const handleAuthChange = (session: SessionType) => 
{
    const updateAuthUser = useAuthUserStore.getState().setCurrentAuthUser;

    const userId = getUserIdFromSession(session);
    const userName = getUserNameFromSession(session);
        
    updateAuthUser({userName, userId});
};


const getAuthUserId = () => 
{
    const authUserId = useAuthUserStore.getState().currentAuthId;
    return authUserId;
}

const getAuthText = (userNameLogged: string) => 
{
    if(userNameLogged) 
    {
        return "LOG OUT";
    }
        
    return "LOG IN";
}

  const hasAuthIdChanged = ({currentAuthId, prevAuthId}: AuthIdChangedType) => 
 {
    const hasAuthId = currentAuthId;
    const hasChanged = currentAuthId !== prevAuthId.current;

    if(hasAuthId && hasChanged)
    {
        return true;
    }
    
    return false;
}

export {
    handleSignInOut, 
    handleAuthChange,
    hasAuthIdChanged,
    getAuthUserId,
    getAuthText,
}