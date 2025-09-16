import styled from "styled-components";
import { Outlet, useSearchParams } from "react-router-dom";
import Header from "./ui/Header";
import Navigation from "./ui/Navigation"
import Comments from "./ui/Comments";

import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import { useComments } from "./features/Home/useComments";
import { useLikes } from "./features/Home/useLikes";
import { AppContext } from "./hooks/AppContext";
import { useUser } from "./features/Auth/useUser";

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
    
    const { comments } = useComments();
    const { likes } = useLikes();
    const { user } = useUser();

    const [searchParams] = useSearchParams()
    const postId = searchParams.get("post")


    return (
        <AppContext.Provider value={{ likes,user }}>
            <Container>
                <Header />
                <Navigation />
                <Main>
                    <SimpleBar autoHide={true}>
                        <Outlet likes={likes} />
                    </SimpleBar>

                    {postId &&
                        <SimpleBar autoHide={true}>
                            <Comments postId={postId} comments={comments} />
                        </SimpleBar>
                    }
                </Main>
            </Container>
        </AppContext.Provider>
    )
}

export default AppLayout
