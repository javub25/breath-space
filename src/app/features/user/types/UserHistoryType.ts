

import { RecommendationMessageType } from "@/app/features/form/types/FormType.ts"
import { AuthUserIdType } from "@/app/modules/auth/types/AuthType"
import { FieldValuesType, FormFieldValue } from "@/app/features/form/types/FormType.ts";

type HistoryInsertType = AuthUserIdType & RecommendationMessageType;
type HistoryDataType = FieldValuesType & RecommendationMessageType & { 
    id: string 
}

type HistoryItemType = {
  data: HistoryDataType;
};

type HistoryListProps = {
  items: HistoryDataType[];
};

type HistoryFieldType = {
    title: string,
    value: FormFieldValue
}

type HistoryRefType = {
  userHistoryRef: React.RefObject<HTMLDivElement | null>
}

export {
    HistoryInsertType,
    HistoryDataType,
    HistoryItemType,
    HistoryListProps,
    HistoryFieldType,
    HistoryRefType
}