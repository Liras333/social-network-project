import { useQuery } from "@tanstack/react-query";
import { getPosts } from "../../services/apiPosts";

export function usePosts() {
    const { data: posts, isLoading } = useQuery({
        queryKey: ["posts"],
        queryFn: getPosts,
        staleTime: 60000 * 5,
    });


    return { posts, isLoading };
}