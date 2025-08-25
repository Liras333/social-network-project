import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login as loginApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";

export function useLogin() {
    const navigate = useNavigate()
    const queryClient = useQueryClient()

    const { mutate: login, isPending } = useMutation({
        mutationFn: ({ email, password }) => loginApi({ email, password }),
        onSuccess: (user) => {
            queryClient.setQueryData(['user'], user.user)
            console.log(user)
            navigate('/home', { replace: true })
        },
        onError: (err) => {
            console.log(err)
        }

    })

    return { login, isPending }
}