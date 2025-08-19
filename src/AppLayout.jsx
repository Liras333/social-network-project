import { Outlet } from "react-router-dom";
import Header from "./ui/Header";
import Navigation from "./ui/Navigation"
import styled from "styled-components";

const Container = styled.div`
    display:grid;
    grid-template-columns: 16rem 1fr;
    grid-template-rows: 60px calc(100dvh - 60px);
`
const Main = styled.main`
    overflow-y: auto;
    padding: 1rem;
`


function AppLayout() {
    return (
        <Container>
            <Header />
            <Navigation />
            <Main>
                <Outlet />
            </Main>

        </Container>
    )
}

export default AppLayout
