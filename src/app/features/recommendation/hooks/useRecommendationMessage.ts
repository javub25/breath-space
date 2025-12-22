import {useFormStore} from "@/app/features/form/hooks/useFormStore.ts";

const useRecommendationMessage = () => 
{
    const recommendationMessage = useFormStore(state => state.recommendationMessage);

    return recommendationMessage;
}

export {
    useRecommendationMessage
}

    