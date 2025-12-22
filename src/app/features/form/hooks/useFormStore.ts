import { create } from 'zustand';
import { FormStoreType } from '@/app/features/form/types/FormType';

export const useFormStore = create<FormStoreType>((set, get) => (
{
     fieldSelection: {
        activity: false,
        energy: false,
        minutes: false,
    },

    formValues: {
        activity: null,
        energy: null,
        minutes: null,
    },

    isRecommendationEnabled: false,

    recommendationMessage: "",

    updateFieldSelected: (fieldName, isFieldSelected) => {
        const {fieldSelection, updateRecommendationState} = get();
        const currentFields = fieldSelection;

        set({
            fieldSelection: {
                ...currentFields,
                [fieldName]: isFieldSelected
            }
        });

        updateRecommendationState();
    },

    updateFormValues: (formValues) => {
        set({
            formValues
        });
    },

    updateRecommendationState: () => {

        const {isEveryFieldSelected} = get();
        const canRecommend = isEveryFieldSelected();

        set({
            isRecommendationEnabled: canRecommend
        });
    },

    updateRecommendationMessage: (recommendationMessage) => {
        set({
            recommendationMessage
        });
    },
    
    isEveryFieldSelected: () => 
    {
        const {fieldSelection} = get();
        const fieldsValues = Object.values(fieldSelection);
        
        const areAllFieldsSelected = fieldsValues.every(fieldSelected => fieldSelected === true);
        
        return areAllFieldsSelected;
    }
}));