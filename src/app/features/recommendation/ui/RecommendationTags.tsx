import { getFormValuesFromStore } from '@/app/features/form/useCases/formUseCases.ts';

export const RecommendationTags = () => 
{
    const {activity, energy, minutes} = getFormValuesFromStore();

    return (
        <ul className="flex flex-wrap items-center gap-3 mt-8">
            <li className="bg-[#4f39f6] rounded-xl p-3">
                <p className="text-white">{activity?.toString()}</p>
            </li>
            <li className="bg-[#4f39f6] rounded-xl p-3">
                <p className="text-white">{energy?.toString()}</p>
            </li>
             <li className="bg-[#4f39f6] rounded-xl p-3">
                <p className="text-white">{minutes?.toString()}</p>
            </li>
        </ul>
    )
}