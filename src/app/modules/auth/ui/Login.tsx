import { UserAvatar } from "@/app/features/user/ui/UserAvatar";
import { getAuthText } from '@/app/modules/auth/useCases/authUseCases.ts';
import { handleSignInOut } from "@/app/modules/auth/useCases/authUseCases";
import {useAuthState} from "@/app/modules/auth/hooks/useAuthState.ts";
import logInIcon from "@/app/modules/auth/svg/logInIcon.svg";

export const Login = () => 
{      
    const currentAuthUserName = useAuthState();
    const authText = getAuthText(currentAuthUserName);
    
    return (
        <div className="flex items-center gap-7">
            {currentAuthUserName && 
                <UserAvatar currentAuthUserName={currentAuthUserName} />
            }

            {authText === "LOG IN" && 
                <img src={logInIcon} alt="log in icon" />
            }
            
            <button 
                type="button"
                onClick={() => handleSignInOut(currentAuthUserName)}
                className="hover:underline cursor-pointer text-md"
                >
                {authText}
            </button>        
        </div>  
    )
}