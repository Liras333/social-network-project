import { useState } from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import styled from "styled-components";
import Input from "../../ui/Input";
import Button from "../../ui/Button";



const ShowPassword = styled.span`
    position: relative;
    left: 200px;
    bottom: 50px;
    cursor:pointer;
`
function LoginAuth(){
    const [showPassword, setShowPassword] = useState(false);

  return(
    <>
    <h3>Hello again!</h3>
    <p>Let's throw to your new posts.</p>
    <Input type="text" placeholder="Email" required />
                <Input type={showPassword ? "text" : "password"} placeholder="Password" required />
                <ShowPassword onClick={()=> setShowPassword(show => !show)}>
                    {showPassword 
                        ? <BsEye/>
                        : <BsEyeSlash />
                    }
                </ShowPassword>
    <Button type="submit">Login</Button>
    </>
  )
}

export default LoginAuth;