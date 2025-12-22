
import {userRepository} from "@/app/database/infraestructure/supabase/userRepository.ts"
import { HistoryRefType, HistoryInsertType} from "@/app/features/user/types/UserHistoryType";
import {getFormValuesFromStore} from "@/app/features/form/useCases/formUseCases.ts";

const saveHistoryItemToDatabase = ({currentAuthId, recommendationMessage}: HistoryInsertType) => 
{
    const newItem = createHistoryItem({currentAuthId, recommendationMessage});
   
    userRepository.insert(newItem);

    return newItem;
}

const createHistoryItem = ({currentAuthId, recommendationMessage}: HistoryInsertType) => 
{
    const {activity, energy, minutes} = getFormValuesFromStore();

    return {
        id: crypto.randomUUID(),
        user_id: currentAuthId,
        activity, 
        energy, 
        minutes, 
        recommendationMessage
    }
}

const scrollToHistorySection = ({userHistoryRef}: HistoryRefType) => 
{
    userHistoryRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}


export {
    saveHistoryItemToDatabase,
    scrollToHistorySection,
}