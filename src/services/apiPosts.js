import { supabase } from "./supabase";

export async function getPosts(id) {
    const { data, error } = await supabase
        .from('posts')
        .select('*')
        .order('created_at', { ascending: false });

    if (error) {
        throw new Error(`Error fetching posts: ${error.message}`);
    }

    return data;
}

export async function addPost(post) {
    const { data, error } = await supabase
        .from('posts')
        .insert([post])
        .single();

    if (error) {
        throw new Error(`Error inserting post: ${error.message}`);
    }

    return data;
}