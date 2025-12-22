import { useAuthUserStore } from "@/app/modules/auth/hooks/useAuthUserStore";

export const useAuthUserName = () => 
{
    const currentAuthUserName = useAuthUserStore((state) => state.currentAuthUserName);

    return {currentAuthUserName};
}