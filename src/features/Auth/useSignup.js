import { useMutation } from "@tanstack/react-query";
import { signup as signupApi } from "../../services/apiAuth";

export function useSignup() {


    const { mutate: signup, isPending } = useMutation({
        mutationFn: signupApi,
        onSuccess: (user) => {
            console.log(user)
        },
        onError: (error) => {
            console.error("ERROR:", error.message);
        }
    })

    return { signup, isPending }
}