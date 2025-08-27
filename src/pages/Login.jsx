import styled, { css } from "styled-components";
import LoginAuth from "../features/Auth/LoginAuth";
import { useEffect, useState } from "react";
import RegisterAuth from "../features/Auth/RegisterAuth";
import { useUser } from "../features/Auth/useUser";
import { useNavigate } from "react-router-dom";

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
const Logo = styled.img`
  width:200px;
`

const Option = styled.span`
    cursor: pointer;
    padding: .5rem;
    border-radius:5px;
    transition: background-color .2s, color .2s;

    ${props => props.$active && css`
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

    const navigate = useNavigate()
    const { isAuthenticated, isLoading } = useUser();

    useEffect(() => {
        if (isAuthenticated && !isLoading) return navigate('/home')
    }, [isAuthenticated, isLoading, navigate])

    return (
        <StyledLogin>
            <Box>
                <Logo src="/logo.ico" alt="Logo" />
                <LoginOptions>
                    <Option $active={isLogin} onClick={() => { setIsLogin(true) }}>Log in</Option>
                    <Option $active={!isLogin} onClick={() => { setIsLogin(false) }}>Sign up</Option>
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