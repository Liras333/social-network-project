import { supabase } from "./supabase";

export async function getComments(postId) {

}

export async function insertComment({newComment}){
    const {data, error} = await supabase
        .from("commentPosts")
        .insert([
            {newComment}
        ])
        .select()

    if(error) throw new Error(error.message)

    return data
}