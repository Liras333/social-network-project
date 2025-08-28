import { useMutation, useQueryClient } from "@tanstack/react-query";
import { unlike as unlikeApi } from "../../services/apiPosts";

export function useUnlike() {
    const queryClient = useQueryClient();

    const {mutate: unlike, isPending: isUnliking} = useMutation({
        mutationFn: ({postId, userUid}) => unlikeApi({postId, userUid}),
        onSuccess: ()=> {
            queryClient.invalidateQueries({
                queryKey: ['likedPosts']
            })

        }
    })

    return {unlike, isUnliking}
}