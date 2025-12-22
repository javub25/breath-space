import { FormField } from '@/app/features/form/ui/FormField.tsx';
import { RecommendationMessage } from "@/app/features/recommendation/ui/RecommendationMessage"
import { RecommendationButton } from '@/app/features/recommendation/ui/RecommendationButton';
import {getRecommendationMessage} from '@/app/features/form/ui/Form.mock.utils.ts';
import {getRecommendationButton} from '@/app/features/form/ui/Form.mock.utils.ts';

import {render} from '@testing-library/react';
import '@testing-library/jest-dom';


const renderForm = () => 
{
    render(
        <>
        <form data-testid="test-mock-form">
            <FormField 
              name="activity" 
              fieldData={mockEnFormFile.activity} 
            />
        </form>
    </>)
}

const mockEnFormFile = 
{
  activity: {
    question: "Activity you doing?",
    options: [
        { label: "Mental Label", value: "Mental Value"}, 
        {label: "Meetings Label", value: "Meetings Value"},
    ]
  },
};

const mentalValues = {
    activity: 'Mental work',
    energy: 'High',
    minutes: '2 minutes',
};

const meetingsValues = {
    activity: 'Many Meetings',
    energy: 'Low',
    minutes: '3 minutes',
};

const sittingValues = {
    activity: 'Long Time Sitting',
    energy: 'Medium',
    minutes: '2 minutes',
};

const renderRecommendationMessage = () => 
{
   render(<RecommendationMessage />);

   return getRecommendationMessage();
}

const renderRecommendationButton = () => 
{
    render(<RecommendationButton />);

    return getRecommendationButton();
};

const renderActivityValues = 
{
    mentalValues,
    meetingsValues,
    sittingValues,
};


export {
  renderForm,
  renderRecommendationButton,
  renderRecommendationMessage,
  renderActivityValues,
};