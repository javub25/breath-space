import { authRepository } from "@/app/database/infraestructure/supabase/authRepository"

export const signInWithGoogle = async () => 
{
  return authRepository.signIn();
}