import { authRepository } from "@/app/database/infraestructure/supabase/authRepository"

export const signOutFromGoogle = async () => 
{
    return authRepository.signOut();  
}