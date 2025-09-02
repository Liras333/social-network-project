import { supabase } from "./supabase";

export async function getComments( {postId} ) {
    const { data, error } = await supabase.
        from('commentPosts')
        .select("*")
        .eq('postId', postId)

    if (error) throw new Error(error.message)

    return data
}

export async function addComment( newComment ) {
    const { data, error } = await supabase
        .from("commentPosts")
        .insert([newComment])
        .single();
        

    if (error) throw new Error(error.message)

    return data
}

export async function deleteComment1( commentId ) {
    const {  error } = await supabase
        .from("commentPosts")
        .delete()
        .eq('commentId', commentId)
        

    if (error) throw new Error(error.message)

}