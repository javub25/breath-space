import '@/app/features/recommendation/styles/recommendation.css';
import { useRecommendationMessage } from '@/app/features/recommendation/hooks/useRecommendationMessage';
import { RecommendationLoader } from '@/app/features/recommendation/ui/RecommendationLoader.tsx';
import { RecommendationHeader } from '@/app/features/recommendation/ui/RecommendationHeader.tsx';
import { RecommendationTags } from '@/app/features/recommendation/ui/RecommendationTags.tsx';


export const RecommendationMessage = () => 
{
    const {recommendationMessage, hasRecommendation} = useRecommendationMessage();
      
    return (
        <div className="max-w-2xl mx-auto px-8 py-12 border border-gray-200 rounded-2xl shadow-xl">
           <RecommendationHeader />
           
            {hasRecommendation ? (
                <>
                    <p role="note" className="recommendation-message">
                        {recommendationMessage}
                    </p>
                    <RecommendationTags />
                </>
            ):(
                <RecommendationLoader />
            )}
        </div>
    )
}