import supabase from "@/app/database/infraestructure/supabase/client";
import { AuthUserIdType } from "@/app/modules/auth/types/AuthType.ts";

export const userRepository = {
    insert: async (dataToInsert: unknown) => 
    {
        const {error} = await supabase.from('user_history').insert(dataToInsert);
           
        if(error) 
        {
            throw new Error(error.message);
        }
    },

    select: async ({currentAuthId}: AuthUserIdType) => 
    {
        const fieldsFromUserHistory = "id,activity,energy,minutes,recommendationMessage";
        const userIdField = "user_id";

        const {data, error} = await supabase.from('user_history')
            .select(fieldsFromUserHistory)
            .eq(userIdField, currentAuthId);

        if(error) 
        {
            throw new Error(error.message);
        }

        return {data};
    },

    delete: async (itemId: string) => 
    {
        const {error} = await supabase.from('user_history').delete().eq("id", itemId);

        if(error) 
        {
            throw new Error(error.message);
        }
    },
    
}