import { Outlet } from "react-router-dom";
import Header from "./ui/Header";
import Navigation from "./ui/Navigation"
import styled from "styled-components";

const Container = styled.div`
    display:grid;
    grid-template-columns: 15rem 1fr;
    grid-template-rows: 60px calc(100% - 60px);
`


function AppLayout() {
    return (
        <Container>
            <Header />
            <Navigation />
            <Outlet />

        </Container>
    )
}

export default AppLayout
