import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addComment as addCommentApi } from "../../services/apiComments";

export function useAddComment() {
    const queryClient = useQueryClient();

    const { mutate: addComment, isPending } = useMutation({
        mutationFn: ( newComment ) => addCommentApi( newComment ),
        onSuccess: (data) => {
            queryClient.invalidateQueries({
                queryKey: ['comments'],
            })
            console.log(data)
        }
    })

    return { addComment, isPending }
}