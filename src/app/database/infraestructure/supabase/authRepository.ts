import supabase from "@/app/database/infraestructure/supabase/client";
import { getSiteURL } from "@/app/database/useCases/getSiteURL";

export const authRepository = 
{
    signIn: async () => 
    {
         await supabase.auth.signInWithOAuth({
            provider: 'google',
            options: {
                redirectTo: getSiteURL(),
                queryParams: {
                    prompt: 'select_account',
                },
            },
        })
    },

    signOut: async () => 
    {
        const {error} = await supabase.auth.signOut();

        if(error) 
        {
            throw new Error(error.message);
        }   
    }
}