import { supabase } from "./supabase";

export async function getPosts() {
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


export async function getLikes() {
    const { data, error } = await supabase
        .from("likedPosts")
        .select('*')

    if (error) throw new Error(error.message)

    return data

}

export async function addLike({ postId, userUid }) {
    const { data, error } = await supabase
        .from('likedPosts')
        .insert([
            { postId, userUid },
        ])
        .select()

    if (error) throw new Error(error.message)

    return data
}

export async function unlike({ postId, userUid }) {
    const { error } = await supabase
        .from('likedPosts')
        .delete()
        .eq('postId', postId)
        .eq('userUid', userUid)

    if (error) throw new Error(error.message)
}