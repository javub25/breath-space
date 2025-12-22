import { HistoryDataType } from "@/app/features/user/types/UserHistoryType";
import { create } from "zustand";

type UserHistoryStore = {
    historyData: HistoryDataType[];
    updateHistoryData: (data: HistoryDataType[]) => void;
    addHistoryItem: (item: HistoryDataType) => void;
    removeHistoryItem: (itemId: string) => void;
};

const useUserHistoryStore = create<UserHistoryStore>((set) => ({
    historyData: [],
    updateHistoryData: (data) => set({ historyData: data }),

    addHistoryItem: (item) => set((state) => ({ 
        historyData: [item, ...state.historyData] 
    })),
    removeHistoryItem: (itemId) => set((state) => ({ 
        historyData: state.historyData.filter(item => item.id !== itemId) 
    })),
}));

export {
    useUserHistoryStore
}