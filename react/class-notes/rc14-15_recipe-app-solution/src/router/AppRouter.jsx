import {BrowserRouter, Route, Routes} from "react-router-dom"
import Navbar from "../components/nav/Navbar"
import About from "../pages/about/About"
import Detail from "../pages/detail/Detail"
import Home from "../pages/home/Home"
import Login from "../pages/login/Login"
import Register from "../pages/register/Register"

const AppRouter = () => {
  return (
    <BrowserRouter>
    
    <Navbar/>
    
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="login" element={<Login/>}/>
        <Route path="register" element={<Register/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="detail" element={<Detail/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter