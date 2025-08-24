import { useState } from "react";
import { useForm, } from "react-hook-form";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import styled from "styled-components";
import Input from "../../ui/Input";
import Button from "../../ui/Button";


const ShowPassword = styled.span`
    position: absolute;
    right: 1rem;
    bottom: 77px;
    cursor:pointer;
`

const Form = styled.form`
    display: flex;
    gap: 1rem;
    flex-direction: column;
    width:100%;
    position: relative;
    text-align:center;
`

function LoginAuth() {
  const [showPassword, setShowPassword] = useState(false);
  const { register, handleSubmit, reset, getValues, formState } = useForm()

  const { errors } = formState;

  // console.log(errors)
  function onSubmit() {
    reset();
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <h3>Hello again!</h3>
      <p>Let's throw to your new posts.</p>

      <Input
        type="text"
        placeholder="Email"
        required
        {...register("email", {
          required: "This field is required"

        })}
      />

      <Input
        type={showPassword ? "text" : "password"}
        placeholder="Password"
        required
        {...register("password", {
          required: "This field is required",
        })

        }
      />
      {errors?.password?.message ? <span>{errors?.password?.message}</span> : ''}

      <ShowPassword onClick={() => setShowPassword(show => !show)}>
        {showPassword
          ? <BsEye />
          : <BsEyeSlash />
        }
      </ShowPassword>
      <Button type="submit">Login</Button>
    </Form>
  )
}

export default LoginAuth;