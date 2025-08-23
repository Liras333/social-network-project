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
function RegisterAuth() {
    const [showPassword, setShowPassword] = useState(false);
    const [showPassword2, setShowPassword2] = useState(false);

    return (
        <>
            <h3>Are you new?</h3>
            <p>Create your new account and start making posts.</p>
            <Input type="text" placeholder="Nickname" required />
            <Input type="text" placeholder="Email" required />
            <Input type={showPassword ? "text" : "password"} placeholder="Password" required />
            <ShowPassword onClick={() => setShowPassword(show => !show)}>
                {showPassword
                    ? <BsEye />
                    : <BsEyeSlash />
                }
            </ShowPassword>

            <Input type={showPassword2 ? "text" : "password"} placeholder="Repeat Password" required />
            <ShowPassword onClick={() => setShowPassword2(show => !show)}>
                {showPassword2
                    ? <BsEye />
                    : <BsEyeSlash />
                }
            </ShowPassword>
            <Button type="submit">Sign in</Button>
        </>
    )
}

export default RegisterAuth;