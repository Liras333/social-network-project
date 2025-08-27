import { useEffect } from "react";
import { useUser } from "../features/Auth/useUser"
import Spinner from "../ui/Spinner"
import { useNavigate } from "react-router-dom";

function ProtectedRoute({ children }) {
    const navigate = useNavigate()
    
    const { isLoading, isAuthenticated } = useUser();

    useEffect(function() {
        if (!isAuthenticated && !isLoading) navigate("/login");
    }, [isAuthenticated, isLoading, navigate])


    if (isLoading) return (
        <span>
            loading...
        </span>
    )


    if (isAuthenticated) return children
}

export default ProtectedRoute
