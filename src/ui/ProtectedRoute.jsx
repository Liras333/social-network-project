import { useEffect } from "react";
import { useUser } from "../features/Auth/useUser"
import Spinner from "../ui/Spinner"
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const CenterBox = styled.div`
    width:100%;
    height:100dvh;
    display:flex;
    justify-content:center;
    align-items:center;
`

function ProtectedRoute({ children }) {
    const navigate = useNavigate()

    const { isLoading, isAuthenticated } = useUser();

    useEffect(function () {
        if (!isAuthenticated && !isLoading) navigate("/login");

    }, [isAuthenticated, isLoading, navigate])


    if (isLoading) return (
        <CenterBox>
            <Spinner type="big" />
        </CenterBox>
    )


    if (isAuthenticated) return children

    return null
}

export default ProtectedRoute
