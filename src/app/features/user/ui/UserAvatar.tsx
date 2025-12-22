
import { AuthUserNameType } from "@/app/modules/auth/types/AuthType";

export const UserAvatar = ({currentAuthUserName}: AuthUserNameType) => 
{
    const userNameInitial = currentAuthUserName.charAt(0).toUpperCase();

    return (
        <span className="size-11 rounded-full bg-[#4f39f6] grid place-content-center text-white font-semibold">
            {userNameInitial}
        </span>
    )
}