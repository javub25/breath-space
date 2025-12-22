import trashIcon from "@/app/features/user/assets/svg/trash.svg";
import { useAuthUserId } from "@/app/modules/auth/hooks/useAuthUserId.ts";
import { useAuthUserName } from "@/app/modules/auth/hooks/useAuthUserName";
import { useRecommendationMessage } from "@/app/features/recommendation/hooks/useRecommendationMessage";
import { useUserHistoryData} from "@/app/features/user/hooks/useUserHistoryData";
import { userRepository } from "@/app/database/infraestructure/supabase/userRepository.ts";

import { 
    HistoryListProps,
    HistoryItemType,
    HistoryFieldType, 
    HistoryRefType,
} from "@/app/features/user/types/UserHistoryType.ts";

import { 
  saveHistoryItemToDatabase, 
  scrollToHistorySection
} from "@/app/features/user/useCases/userHistoryUseCases";
import { useUserHistoryStore } from "../hooks/useUserHistoryStore";


const UserHistoryValues = ({userHistoryRef}: HistoryRefType ) => 
{
    const currentAuthId = useAuthUserId();
    const {currentAuthUserName} = useAuthUserName();
    const {historyData} = useUserHistoryData({currentAuthId});

    if(currentAuthId)
    {
        return (
            <div className="mt-40 p-8" ref={userHistoryRef}>
                <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">
                    History for {currentAuthUserName}
                </h2>

                <UserHistoryCount count={historyData.length} />
                <UserHistoryList items={historyData} />
            </div>
        );
    }
}



const UserHistoryList = ({ items }: HistoryListProps) => 
{
  return (
      <ul className="flex w-full flex-wrap gap-6 mx-auto items-center justify-center">
        {items.map((item, index) => (
            <UserHistoryItem key={index} data={item} />
        ))}
    </ul>
  );
};

const UserHistoryCount = ({ count }: { count: number }) => 
{
  return (
    <div className="flex mb-8 mx-auto justify-center items-center gap-2 rounded-full bg-[#4f39f6] p-5 w-fit">
        <span className="text-white animate-pulse text-2xl leading-none">•</span>
        <p className="text-white text-center text-lg">{count} {count === 1 ? "result" : "results"} available</p>
    </div>
  );
};


const UserHistoryItem = ({data}: HistoryItemType) => 
{
  const {id, activity, energy, minutes, recommendationMessage } = data;

  return (
    <li className="w-[20rem] my-4 rounded-2xl shadow-md border border-gray-200 p-5 transition hover:shadow-lg hover:border-indigo-400">

        <HistoryField title="Activity" value={activity} />
        <HistoryField title="Energy" value={energy} />
        <HistoryField title="Minutes" value={minutes} />
        <HistoryField title="Recommendation" value={recommendationMessage} />

        <DeleteHistoryButton itemId={id}/>
    </li>
  );
};

const HistoryField = ({ title, value }: HistoryFieldType) => 
{
  return (
    <>
        <p className="text-sm text-gray-500 uppercase tracking-wide font-semibold">
            {title}
        </p>

        <p className="text-lg font-medium mb-3">{value?.toString()}</p>
    </>
  )       
}


const DeleteHistoryButton = ({itemId}: {itemId: string}) => 
{  
    const removeHistoryFromStore = useUserHistoryStore((state) => state.removeHistoryItem);

    const handleDeleteItem = () => 
    {
        removeHistoryFromStore(itemId);
        userRepository.delete(itemId);
    }

    return (
        <button onClick={handleDeleteItem} 
            className="base-controls__buttons">
            <img src={trashIcon} alt="trash icon" className="w-5 h-5" />
        </button>
    )
}


const UserHistoryButton = (userHistoryRef: HistoryRefType) => 
{
    const currentAuthId = useAuthUserId();
    const recommendationMessage = useRecommendationMessage();
    const canUserSaveHistory = Boolean(currentAuthId && recommendationMessage);
    const addHistoryItemToStore = useUserHistoryStore((state) => state.addHistoryItem);

    const handleSaveToHistory = () => 
    {
        const newItem = saveHistoryItemToDatabase({
            currentAuthId, 
            recommendationMessage
        });

        addHistoryItemToStore(newItem);
        scrollToHistorySection(userHistoryRef);
    }
    
    if(canUserSaveHistory)
    {
        return (
            <button 
                onClick={handleSaveToHistory}
                className="button button--enabled scroll-mt-70 mt-11">
                Add data to user history
            </button>
        )
    }
}

export {
    UserHistoryValues,
    UserHistoryButton
}
