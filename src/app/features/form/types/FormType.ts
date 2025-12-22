type FormFieldValue = FormDataEntryValue | null;

type FieldValuesType = {
    activity: FormFieldValue;
    energy: FormFieldValue;
    minutes: FormFieldValue;
}

interface FieldSelection
{
    activity: boolean;
    energy: boolean;
    minutes: boolean;
}

interface FormState 
{
    fieldSelection: FieldSelection;
    formValues: FieldValuesType;
    recommendationMessage: string;
    isRecommendationEnabled: boolean;
}

interface FormActions 
{
    updateFieldSelected: (fieldName: string, isFieldSelected: boolean) => void;
    updateFormValues: (formValues: FieldValuesType) => void;
    updateRecommendationState: () => void;
    updateRecommendationMessage: (recommendationMessage: string) => void;
    isEveryFieldSelected: () => boolean;
}

type FormEventType = 
{
    e: React.FormEvent
}

type UpdateFormValuesType = Pick<FormActions, 'updateFormValues'>;
type MinutesObjectType = Pick<FieldValuesType, 'minutes'>;

type FormStoreType = FormState & FormActions;
type FormSubmitType = FormEventType & UpdateFormValuesType;

type RecommendationMessageType = Pick<FormState, 'recommendationMessage'>;



export {
    FormFieldValue,
    FormStoreType,
    FieldValuesType,
    MinutesObjectType,
    RecommendationMessageType,
    FormEventType,
    FormSubmitType,
};