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

    const userUid = data?.user?.id || data?.user?.user_metadata?.sub;

    const {error: dbError} = await supabase.from('users').insert([{nickname, email, password, userUid, avatar: ""}]).select()
    if (dbError) throw new Error(dbError.message);

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

export async function getUserEqualId(){
    const {data, error} = await supabase.from('users').select('*')

    if(error) throw new Error(error.message)
    return data
}