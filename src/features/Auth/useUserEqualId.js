import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getUserEqualId } from "../../services/apiAuth";

export function useUserEqualId(){

   const { data: userEqualId, isLoading } = useQuery({
    queryKey: ['userUid'],
    queryFn: () => getUserEqualId(),
  });


    return {userEqualId, isLoading}
}