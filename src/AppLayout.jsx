import { Outlet } from "react-router-dom";
import Header from "./ui/Header";
import Navigation from "./ui/Navigation"
import styled from "styled-components";

const Container = styled.div`
    display:grid;
    grid-template-columns: 14rem 1fr;
    grid-template-rows: 60px 1fr;

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
