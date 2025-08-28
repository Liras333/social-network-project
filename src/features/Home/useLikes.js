import { useQuery } from "@tanstack/react-query";
import { Likes as likesApi } from "../../services/apiPosts";

export function useLikes(){
    const {data: likes, isLoading} = useQuery({
        queryKey: ['likedPosts'],
        queryFn: likesApi
    })

    return {likes, isLoading}
}