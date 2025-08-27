import { useQuery } from "@tanstack/react-query";
import { getUserUid } from "../../services/apiAuth";

export function useUserUid() {

  const { data: userUid, isLoading } = useQuery({
    queryKey: ['userUid'],
    queryFn: getUserUid,
  });


  return { userUid, isLoading }
}