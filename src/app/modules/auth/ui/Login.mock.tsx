import { UserAvatar } from '@/app/features/user/ui/UserAvatar';
import { getAuthText } from '@/app/modules/auth/useCases/authUseCases.ts';

const LoginMock = ({authenticatedUser}: {authenticatedUser: string}) => 
{
    const authText = getAuthText(authenticatedUser);
    
    return (
        <>
            <UserAvatar currentAuthUserName={authenticatedUser} />
            <AuthButton authText={authText} />
        </>
    )
}

const AuthButton = ({authText}: {authText: string}) => 
{
    return (
        <button>{authText}</button>
    )
}

export { LoginMock };