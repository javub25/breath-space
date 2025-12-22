import '@/app/features/recommendation/styles/recommendation.css';
import { useRecommendationMessage } from '@/app/features/recommendation/hooks/useRecommendationMessage';


export const RecommendationMessage = () => 
{
    const recommendationMessage = useRecommendationMessage();
   
    return (
        recommendationMessage && 
            <div className="recommendation-container shadow-xl" key={recommendationMessage}>
                <h2 className="text-xl text-center font-bold mb-5">OUR RECOMMENDATION IS</h2>
                <p role="note" className="recommendation-message">
                    {recommendationMessage}
                </p>
            </div>
    )
}