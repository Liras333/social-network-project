import { deleteComment as deleteCommentApi } from "../../services/apiComments"
import { useMutation, useQueryClient } from "@tanstack/react-query"

export function useDeleteComment() {
    const queryClient = useQueryClient()
    const { mutate: deleteComment, isPending: isDeletingComment } = useMutation({
        mutationFn: deleteCommentApi,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['comments']
            })
        }
    })

    return { deleteComment, isDeletingComment }
}