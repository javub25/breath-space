import { FormFieldType } from "@/app/features/form/types/FormFieldType.ts";
import { useFormStore } from "@/app/features/form/hooks/useFormStore";


export const FormField = ({ name, fieldData }: FormFieldType) => 
{
  const { question, options } = fieldData;

  const updateFieldSelected = useFormStore((state) => state.updateFieldSelected);

  return (
    <fieldset className="mb-5">
        <legend className="text-lg font-semibold text-gray-900 mb-4 block">
          {question}
        </legend>

        <ul className="space-y-2">
          {options.map((option, i) => (
              <li key={i}>
                <label className="flex items-center p-2 rounded-md border cursor-pointer transition-all border-gray-200 hover:border-[#4f39f6] hover:bg-gray-50">
                  <input
                    type="radio"
                    name={name}
                    value={option.value}
                    className="mr-2"
                    onChange={() => updateFieldSelected(name, true)}
                  />
                  <span className="text-lg">{option.label}</span>
                </label>
              </li>
          ))}
        </ul>
    </fieldset>
  );
};