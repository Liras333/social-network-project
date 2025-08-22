import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { GlobalStyles } from "./styles/GlobalStyles"
import AppLayout from "./AppLayout"
import Home from "./pages/Home"
import User from "./pages/User"
import Friends from "./pages/Friends"
import Groups from "./pages/Groups"
import Favorite from "./pages/Favorite"
import Login from "./pages/Login"

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 1000 * 60 * 5, // 5 minutes
        }
    }
})


function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <ReactQueryDevtools initialIsOpen={false} />
            <GlobalStyles />
            <BrowserRouter>
                <Routes>
                    <Route element={<AppLayout />}>
                        <Route index element={<Navigate replace to='home' />} />
                        <Route path="home" element={<Home />} />
                        <Route path="user" element={<User />} />
                        <Route path="friends" element={<Friends />} />
                        <Route path="groups" element={<Groups />} />
                        <Route path="favorite" element={<Favorite />} />
                    </Route>
                    <Route path="login" element={<Login />} />
                    <Route path="*" element={<h1>Not found any page</h1>} />
                </Routes>
            </BrowserRouter>
        </QueryClientProvider>
    )
}

export default App
