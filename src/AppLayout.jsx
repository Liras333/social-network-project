import styled from "styled-components";
import { Outlet, useSearchParams } from "react-router-dom";
import Header from "./ui/Header";
import Navigation from "./ui/Navigation"
import Comments from "./ui/Comments";

import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';

const Container = styled.div`
    display:grid;
    grid-template-columns: 0.2fr 1fr;
    grid-template-rows: 60px calc(100dvh - 60px);
`
const Main = styled.main`
    padding: 1rem;
    gap:1rem;
    display: flex;

`


function AppLayout() {

    const [searchParams, setSearchParams] = useSearchParams()
    const postId = searchParams.get("post")

    return (
        <Container>
            <Header />
            <Navigation />
            <Main>
                <Outlet />

                <SimpleBar autoHide={true}>
                    {postId ? <Comments /> : ""}
                </SimpleBar>
            </Main>

            
            
        </Container>
    )
}

export default AppLayout
