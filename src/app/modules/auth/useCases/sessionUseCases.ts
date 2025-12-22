import {SessionType} from "@/app/database/infraestructure/supabase/types.ts";

const getUserNameFromSession = (session: SessionType)=> 
{
    const user = getUserFromSession(session);
    const profile = user?.user_metadata;
    const userName = profile?.name;

    return userName;
};

const getUserIdFromSession = (session: SessionType) => 
{
    const user = getUserFromSession(session);
    const userId = user?.id;

    return userId;
};

const getUserFromSession = (session: SessionType) => 
{
    const user = session?.user;
    return user;
}


export {
    getUserNameFromSession, 
    getUserIdFromSession,
};