import { useQuery } from "@tanstack/react-query";
import { getOnePost } from "../../services/apiPosts";

export function useOnePost(postId) {

    const { data: post, isLoading } = useQuery({
        queryKey: ['post', postId],
        queryFn: () => getOnePost({postId})
    })

    return {post, isLoading}
}