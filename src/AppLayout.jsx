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
    overflow:hidden;
`
const Main = styled.main`
    padding: 1rem;
    gap:1rem;
    display: flex;
    justify-content:center;
`


function AppLayout() {

    const [searchParams, setSearchParams] = useSearchParams()
    const postId = searchParams.get("post")

    

    return (
        <Container>
            <Header />
            <Navigation />
            <Main>
                <SimpleBar autoHide={true}>
                    <Outlet />
                </SimpleBar>
                
                
                {postId &&
                <SimpleBar autoHide={true}>
                    <Comments /> 
                </SimpleBar>
                }
            </Main>

            
            
        </Container>
    )
}

export default AppLayout
