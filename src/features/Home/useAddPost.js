import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addPost as addPostApi } from "../../services/apiPosts"

export function useAddPost() {
    const queryClient = useQueryClient();

    const { mutate: addPost, isPending: isAddingPost } = useMutation({
        mutationFn: (post) => addPostApi(post),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["posts"],
            })
        },
        onError: (error) => {
            console.error("Error adding post:", error.message);
        }

    })

    return { addPost, isAddingPost }
}