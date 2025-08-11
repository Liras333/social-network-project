import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import AppLayout from "./AppLayout"
import Home from "./pages/Home"

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<AppLayout />}>
                    <Route index element={<Navigate replace to='social-network-project/home' />} />
                    <Route path="social-network-project/home" element={<Home />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
