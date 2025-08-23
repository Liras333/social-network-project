import styled, { css } from "styled-components";
import LoginAuth from "../features/Auth/LoginAuth";
import { useState } from "react";
import RegisterAuth from "../features/Auth/RegisterAuth";

const StyledLogin = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100dvh;
    overflow: auto;
     & hr {
        width: 100%;
        border-top: 1px solid #ccc;
    }
`

const Box = styled.div`
    width: 500px;
    height:auto;
    background-color: #ffffff;
    border-radius: 20px;
    padding:1rem;
    display:flex;
    flex-direction: column;
    align-items: center;
    gap:1rem;
    position: relative;
`


const LoginOptions = styled.div`
    display: flex;
    gap: 1rem;
    font-weight: bold;

`

const Option = styled.span`
    cursor: pointer;
    padding: .5rem;
    border-radius:5px;
    transition: background-color .2s, color .2s;

    ${props => props.active && css`
            background-color: #424b57;

        color:white;
        `
    }

    &:hover{
            background-color: #424b57;

        color:white;
    }
`

function Login() {
    const [isLogin, setIsLogin] = useState(true);

    return (
        <StyledLogin>
            <Box>
                <img src="logo.png" alt="Logo" />
                <LoginOptions>
                    <Option active={isLogin} onClick={() => { setIsLogin(true) }}>Log in</Option>
                    <Option active={!isLogin} onClick={() => { setIsLogin(false) }}>Sign up</Option>
                </LoginOptions>
                <hr />

                {isLogin
                    ? <LoginAuth />
                    : <RegisterAuth />
                }


            </Box>

        </StyledLogin>
    )
}

export default Login;