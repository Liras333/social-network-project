import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addLike as addLikeApi } from "../../services/apiPosts";

export function useAddLike() {
    
    const queryClient = useQueryClient()
    const {mutate: addLike, isPending} = useMutation({
        mutationFn: ({postId, userUid}) => addLikeApi({postId, userUid}),
        onSuccess: ()=> {
            queryClient.invalidateQueries({
                queryKey: ['likedPosts']
            })
        }
    })

    return {addLike, isPending}
}