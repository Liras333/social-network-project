import { Outlet } from "react-router-dom";
import Header from "./ui/Header";
import Navigation from "./ui/Navigation"



function AppLayout() {
    return (
        <>
            <Header />
            <Navigation />
            <Outlet />

        </>
    )
}

export default AppLayout
