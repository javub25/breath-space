import { 
    renderRecommendationButton,
    renderActivityValues
} from '@/app/features/form/ui/Form.mock.tsx';

import {
    mockIsEveryFieldSelected,
    updateRecommendationButton,
    expectRecommendationMessage
} from '@/app/features/form/ui/Form.mock.utils.ts';


describe('Recommendation Message', () => 
{ 
    test('it shows Inhale deeply, exhale fast 3 times when activity is Mental work and energy High', () => 
    {
        const { mentalValues } = renderActivityValues;

        expectRecommendationMessage(mentalValues, "Inhale deeply, exhale fast 3 times");
    });

    test('it shows Close your eyes when activity is Meetings and energy Low', () => 
    {
        const { meetingsValues } = renderActivityValues;

        expectRecommendationMessage(meetingsValues, "Close your eyes and breathe calmly without thinking");
    });

    test('it shows Stand up and lightly stretch your back and legs when activity is Sitting and energy Medium', () => 
    {
        const { sittingValues } = renderActivityValues;

        expectRecommendationMessage(sittingValues, "Stand up and lightly stretch your back and legs");
    });
});


describe('Recommendation Button', () => 
{
    test('it enables when all fields are selected', () => 
    {
        mockIsEveryFieldSelected(true);
        updateRecommendationButton();

        const recommendationButton = renderRecommendationButton();
        expect(recommendationButton).toBeEnabled();
    });

    test('it disables when all fields are unselected', () => 
    {
        mockIsEveryFieldSelected(false);
        updateRecommendationButton();

        const recommendationButton = renderRecommendationButton();
        expect(recommendationButton).toBeDisabled();
    });
});