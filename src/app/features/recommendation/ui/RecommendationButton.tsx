import { useFormStore } from "@/app/features/form/hooks/useFormStore";

export const RecommendationButton = () => 
{
    const isRecommendationEnabled = useFormStore((state) => state.isRecommendationEnabled);
    
    return (
        <button 
            type="submit"
            disabled={isRecommendationEnabled ? false : true}
            className={`button ${isRecommendationEnabled ? 'button--enabled' : 'button--disabled'}`}>
            Get a recommendation
        </button>
    );
}