import { FormField} from "@/app/features/form/ui/FormField.tsx";
import { RecommendationButton } from "@/app/features/recommendation/ui/RecommendationButton";
import { useFormSubmit } from "@/app/features/form/hooks/useFormSubmit.ts";
import FormFieldModel from "@/app/features/form/models/FormFieldModel.json";

export const Form = () => 
{
    const {activity, energy, minutes} = FormFieldModel;
    const handleSubmit = useFormSubmit();
    
    return (
        <div className="border border-gray-200 rounded-2xl shadow-xl w-full max-w-md p-6 mx-auto">
            <form action="" method="post" onSubmit={(e) => handleSubmit({e})} >

                <FormField
                    name="activity" 
                    fieldData={activity} 
                />
                <FormField 
                    name="energy"
                    fieldData={energy} 
                />
                <FormField
                    name="minutes"
                    fieldData={minutes} 
                />
                <RecommendationButton />               
            </form>
        </div>
    )
}