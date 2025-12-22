type FormFieldType = 
{
    name: string,
    fieldData: FieldType
}

type OptionType = {
    label: string,
    value: string
}

type FieldType = {
    question: string,
    options: OptionType[]
}

export {FormFieldType};