import { useForm } from "react-hook-form";
import { useState } from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import styled from "styled-components";
import Input from "../../ui/Input";
import Button from "../../ui/Button";
import { useSignup } from "./useSignup";

const ShowPassword = styled.span`
    position: absolute;
    right:1rem;
    cursor:pointer;
    bottom:145px;

`
const ShowPassword2 = styled(ShowPassword)`
    bottom:75px;
`

const Form = styled.form`
    display: flex;
    gap: 1rem;
    flex-direction: column;
    width:100%;
    position: relative;
    text-align:center;
`


function RegisterAuth() {
    const [showPassword, setShowPassword] = useState(false);
    const [showPassword2, setShowPassword2] = useState(false);
    const { register, reset, handleSubmit, formState: {errors}, getValues } = useForm();

    const { signup, isPending } = useSignup();

    function onSubmit({ nickname, email, password }) {
        signup({ nickname, email, password }, { onSettled: reset })
    }


    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <h3>Are you new?</h3>
            <p>Create your new account and start making posts.</p>
            <Input type="text" placeholder="Nickname" required {...register('nickname')} />
            <Input type="text" placeholder="Email" required {...register('email')} />
            <Input type={showPassword ? "text" : "password"} placeholder="Password" required {...register('password')} />
            <ShowPassword onClick={() => setShowPassword(show => !show)}>
                {showPassword
                    ? <BsEye />
                    : <BsEyeSlash />
                }
            </ShowPassword>

            <Input type={showPassword2 ? "text" : "password"} placeholder="Repeat Password" required {...register('password2', {validate: (value)=>value === getValues().password || "Passwords are not the same"})} />
            <ShowPassword2 onClick={() => setShowPassword2(show => !show)}>
                {showPassword2
                    ? <BsEye />
                    : <BsEyeSlash />
                }
            </ShowPassword2>
            <Button type="submit">Sign in</Button>
        </Form>
    )
}

export default RegisterAuth;