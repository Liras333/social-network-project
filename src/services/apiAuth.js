import { supabase } from "./supabase";

export async function signUop(email, password, nickname){
    const { data, error } = await supabase.auth.signUp({
    email,
    password,
    data: {
        nickname,
    }
})

    return { data, error };
}