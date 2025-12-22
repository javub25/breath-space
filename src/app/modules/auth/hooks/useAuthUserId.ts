import { useAuthUserStore } from "@/app/modules/auth/hooks/useAuthUserStore";

export const useAuthUserId = () => 
{
    const currentAuthUserId = useAuthUserStore((state) => state.currentAuthId);

    return currentAuthUserId;
}