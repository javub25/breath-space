import { create } from "zustand";
import { AuthUserStoreType} from "@/app/modules/auth/types/AuthType";

export const useAuthUserStore = create<AuthUserStoreType>((set)  => (
{
    currentAuthUserName: "",
    currentAuthId: null,
    
    setCurrentAuthUser: ({userName, userId}) => 
      set({ 
          currentAuthUserName: userName, 
          currentAuthId: userId
        }),
}));