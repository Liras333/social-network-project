import { useQuery } from "@tanstack/react-query";
import { getLikes } from "../../services/apiPosts";

export function useLikes(){
    const {data: likes, isLoading} = useQuery({
        queryKey: ['likedPosts'],
        queryFn: getLikes
    })

    return {likes, isLoading}
}