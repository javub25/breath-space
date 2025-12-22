import { recommendationModels } from "@/app/features/recommendation/models/RecommendationModels.ts";
import { FieldValuesType } from "@/app/features/form/types/FormType";
import { areFormValuesNotString } from "@/app/features/form/useCases/formUseCases.ts";
import {useFormStore} from "@/app/features/form/hooks/useFormStore.ts";

const createRecommendationMessage = (formValues: FieldValuesType) => 
{   
    if (areFormValuesNotString(formValues)) 
    {
        return undefined;
    }

    const {activity, energy, minutes} = formValues;
    
    const activityModel = recommendationModels[activity];
    const durationModel = activityModel.durations[minutes];
    const recommendationMessage = durationModel[energy];

    return recommendationMessage;
}

const updateRecommendationMessage = (recommendationMessage: string = '') => 
{
    const setRecommendationMessage = useFormStore.getState().updateRecommendationMessage;

    setRecommendationMessage(recommendationMessage);
}

export 
{
    createRecommendationMessage,
    updateRecommendationMessage
}