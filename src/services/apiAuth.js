import { supabase } from "./supabase";

export async function signUp({nickname, email, password}) {
    const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
            data: {
                nickname,
                avatar: ""
            }
        }
    })

    if (error) throw new Error(error.message);


    return data;
}