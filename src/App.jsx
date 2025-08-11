import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"

import { GlobalStyles } from "./styles/GlobalStyles"
import AppLayout from "./AppLayout"
import Home from "./pages/Home"

function App() {
    return (
        <>
            <GlobalStyles/>
            <BrowserRouter>
                <Routes>
                    <Route element={<AppLayout />}>
                        <Route index element={<Navigate replace to='home' />} />
                        <Route path="home" element={<Home />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
