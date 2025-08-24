import { useMutation } from "@tanstack/react-query";
import { signUp as signupApi } from "../../services/apiAuth";

export function useSignup() {
    const { mutate: signup, isPending } = useMutation({
        mutationFn: ({ nickname, email, password }) => signupApi({ nickname, email, password }),
        onSuccess: (user) => {
            console.log(user)
        }
    })

    return { signup, isPending }
}