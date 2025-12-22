import {renderForm} from '@/app/features/form/ui/Form.mock.tsx';
import {expectRadioOptionToBeCorrect} from '@/app/features/form/ui/Form.mock.utils.ts';

describe('Activity Form', () => 
{
    test("it should have correct value for Mental option", () => 
    {
        renderForm();
        expectRadioOptionToBeCorrect("Mental Label", "Mental Value");
    })

    test('it should have correct value for Meetings option', () => 
    {
        renderForm();
        expectRadioOptionToBeCorrect("Meetings Label", "Meetings Value");
    })  
})