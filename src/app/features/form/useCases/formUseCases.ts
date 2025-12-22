import {
    FieldValuesType, 
    FormSubmitType,
    FormEventType,
} from "@/app/features/form/types/FormType.ts";

import { useFormStore } from "@/app/features/form/hooks/useFormStore.ts";

import {
    createRecommendationMessage,
    updateRecommendationMessage
} from "@/app/features/recommendation/useCases/recommendationUseCases";

import {
    getCountdownMinutes,
    updateCountdownMinutes
} from "@/app/features/counter/useCases/countdownUseCases.ts";


const submitForm = ({e, updateFormValues}: FormSubmitType) => 
{
    e.preventDefault();
    const formData = createFormData({e});
    const formValues = getFormValuesFromForm(formData);
    const recommendationMessage = createRecommendationMessage(formValues);
    const countdownMinutes = getCountdownMinutes(formValues);

    updateFormValues(formValues);
    updateCountdownMinutes(countdownMinutes);
    updateRecommendationMessage(recommendationMessage);
}

const createFormData = ({e}: FormEventType) => 
{
    return new FormData(e.target as HTMLFormElement);
}

const getFormValuesFromForm = (formData: FormData) => 
{
    return {
        activity: formData.get('activity'),
        energy: formData.get('energy'),
        minutes: formData.get('minutes'),
    }
}

const getFormValuesFromStore = () => 
{
    return useFormStore.getState().formValues;
}

const areFormValuesNotString = (formValues: FieldValuesType): formValues is FieldValuesType => 
{  
    const values = Object.values(formValues);  

    return values.every(value => typeof value !== 'string');    
};

export 
{
    submitForm,
    getFormValuesFromForm,
    getFormValuesFromStore,
    areFormValuesNotString,
}