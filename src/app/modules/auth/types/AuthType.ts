
type AuthUserStoreType = {
  currentAuthUserName: string,
  currentAuthId: string | null,
  setCurrentAuthUser: ({userName, userId}: {userName: string, userId: string | undefined}) => void
}

type AuthUserNameType = Pick<AuthUserStoreType, 'currentAuthUserName'>

type AuthUserIdType = Pick<AuthUserStoreType, 'currentAuthId'>;

type PreviousAuthIdType = React.RefObject<string | null>;

type AuthIdChangedType = AuthUserIdType & {
  prevAuthId: PreviousAuthIdType
}


export {
    AuthUserStoreType,
    AuthUserNameType,
    AuthUserIdType,
    AuthIdChangedType    
}