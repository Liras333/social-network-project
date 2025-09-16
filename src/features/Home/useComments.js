import { useQuery } from "@tanstack/react-query";
import { getComments as getCommentsApi } from "../../services/apiComments";

export function useComments() {

    const { data: comments, isLoading } = useQuery({
        queryKey: ["comments"],
        queryFn: () => getCommentsApi(),
    });

    return { comments, isLoading };
}