import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Register from "../pages/Register";
import PrivateRouter from "./PrivateRouter";
import Stock from "../pages/Stock";

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Dashboard />
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="register" element={<Register />} />
                <Route path="stock" element={<PrivateRouter />} >
                    <Route path="" element={<Stock/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter