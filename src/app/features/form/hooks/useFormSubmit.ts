import { submitForm } from "@/app/features/form/useCases/formUseCases.ts";
import {useFormStore} from "@/app/features/form/hooks/useFormStore.ts";
import { FormEventType } from "@/app/features/form/types/FormType.ts";

export const useFormSubmit = () => 
{
    const updateFormValues = useFormStore((state) => state.updateFormValues);
    
    const handleSubmit = ({e}: FormEventType) => 
    {
        submitForm({e, updateFormValues});
    }
        
    return handleSubmit;
}