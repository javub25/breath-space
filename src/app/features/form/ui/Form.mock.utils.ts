import { useFormStore } from '@/app/features/form/hooks/useFormStore.ts';
import {renderRecommendationMessage} from '@/app/features/form/ui/Form.mock.tsx';
import {screen} from '@testing-library/react';
import { FieldValuesType } from '@/app/features/form/types/FormType.ts';
import { createRecommendationMessage } from '@/app/features/recommendation/useCases/recommendationUseCases';
import { updateRecommendationMessage } from '@/app/features/recommendation/useCases/recommendationUseCases';


const getFormStore = () => useFormStore.getState();

const getRecommendationButton = () => 
{
    return screen.getByRole('button');
}

const getRecommendationMessage = () => 
{
    return screen.getByRole('note');
}

const getRadioOption = (optionName: string) => 
{
    const radioOption = screen.getByRole<HTMLInputElement>('radio', { name: optionName });

    return {radioOption};
}

const mockIsEveryFieldSelected = (allFieldsSelected: boolean) => 
{
  const store = getFormStore();

  store.isEveryFieldSelected = () => allFieldsSelected;
};

const updateRecommendationButton = () => 
{
  const store = getFormStore();

  store.updateRecommendationState();
}


const expectRadioOptionToBeCorrect = (optionName: string, expectedValue: string) => 
{
   const {radioOption} = getRadioOption(optionName);
  
   expect(radioOption.value).toMatch(expectedValue);
}

const expectRecommendationMessage = (formValuesMock: FieldValuesType, expectedMessage: string) => 
{
   const recommendationMessage = createRecommendationMessage(formValuesMock);

   updateRecommendationMessage(recommendationMessage);

   expect(renderRecommendationMessage()).toHaveTextContent(expectedMessage);
}

export 
{
    mockIsEveryFieldSelected,
    updateRecommendationButton,
    expectRecommendationMessage,
    expectRadioOptionToBeCorrect,
    getRecommendationButton,
    getRecommendationMessage,
}