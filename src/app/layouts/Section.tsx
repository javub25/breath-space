import { Form } from "@/app/features/form/ui/Form.tsx";
import {Counter } from "@/app/features/counter/ui/Counter";
import { RecommendationMessage } from "@/app/features/recommendation/ui/RecommendationMessage";
import { UserHistoryValues, UserHistoryButton } from "@/app/features/user/ui/UserHistoryValues";
import { useUserHistoryReference } from "@/app/features/user/hooks/useUserHistoryReference";
import WomanRestIntoComputer from "@/app/assets/webp/woman-rest-in-front-computer.webp";

export const Section = () => 
{
    const userHistoryRef = useUserHistoryReference();
     
   return (
        <section>
           <article className="w-full md:h-140 h-70 mb-13">
                <img 
                    src={WomanRestIntoComputer}
                    alt="A woman taking a deserved break after a workout"
                    className="w-full h-full object-cover" 
                />
                <div className="w-full relative flex justify-end items-center pr-4">
                    <h1 className="title-section" data-text="Take the break you need">Take the break you need</h1>                    
                </div>
            </article>
        
            <article className="w-full max-w-5xl mx-auto px-4 flex flex-col lg:flex-row gap-4 lg:gap-8 items-center">
                <div className="w-full md:mb-6">
                    <Form />
                </div>
                <div className="max-w-full md:mt-3 mt-12 relative ">
                    <Counter />
                    <UserHistoryButton userHistoryRef={userHistoryRef} />
                </div>
            </article>
            
            <article className="px-4 pt-20 pb-14">
                <RecommendationMessage />
                <UserHistoryValues userHistoryRef={userHistoryRef} />
            </article>
        </section>
   )
}