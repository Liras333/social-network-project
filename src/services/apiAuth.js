import { supabase } from "./supabase";

export async function signup({ nickname, email, password }) {
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

export async function login({ email, password }) {
    const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
    })

    if (error) throw new Error(error.message);

    return data
}


export async function getCurrentUser() {
    const { data: session } = await supabase.auth.getSession();

    if (!session) return null;

    const { data, error } = await supabase.auth.getUser();

    if (error) throw new Error(error);

    return data?.user
}