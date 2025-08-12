import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { GlobalStyles } from "./styles/GlobalStyles"
import AppLayout from "./AppLayout"
import Home from "./pages/Home"
import NewPost from "./pages/NewPost"
import User from "./pages/User"
import Friends from "./pages/Friends"
import Groups from "./pages/Groups"
import Favorite from "./pages/Favorite"
function App() {
    return (
        <>
            <GlobalStyles/>
            <BrowserRouter>
                <Routes>
                    <Route element={<AppLayout />}>
                        <Route index element={<Navigate replace to='home' />} />
                        <Route path="home" element={<Home />} />
                        <Route path="user" element={<User />} />
                        <Route path="new-post" element={<NewPost />} />
                        <Route path="friends" element={<Friends />} />
                        <Route path="groups" element={<Groups />} />
                        <Route path="favorite" element={<Favorite />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
