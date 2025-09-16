import { useQuery } from "@tanstack/react-query";
import { getPosts } from "../../services/apiPosts";

export function usePosts(postId) {
    const { data: posts, isLoading } = useQuery({
        queryKey: ["posts"],
        queryFn: (postId) => getPosts(postId),
    });


    return { posts, isLoading };
}