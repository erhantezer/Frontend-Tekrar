import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Register from "../pages/Register";

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Dashboard />
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="register" element={<Register />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter