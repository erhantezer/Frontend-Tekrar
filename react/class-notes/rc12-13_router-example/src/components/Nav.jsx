import logo from "../img/et.jpg"
import { Link, NavLink } from 'react-router-dom'

const Nav = () => {
    return (
        <nav className="navbar navbar-expand-md bg-light">
            <div className="container-fluid ">
                <Link className="navbar-brand" href="#">
                <img className="Img" src={logo} alt="" />
                </Link>
                <button 
                className="navbar-toggler" 
                type="button" 
                data-bs-toggle="collapse" 
                data-bs-target="#navbarNav" 
                aria-controls="navbarNav" 
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto mb-2 me-5 mb-lg-0">
                        <li className="nav-item">
                            <NavLink 
                            style={({ isActive }) => ({color: isActive && "red"})}
                            className="nav-link active" 
                            aria-current="page" 
                            to="/">
                            Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink 
                            style={({ isActive }) => {
                            return (
                            { color: isActive && 'red' })}
                            } 
                            className="nav-link" 
                            to="/instructors">
                            Instructors
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink 
                            style={({ isActive }) => ({ color: isActive && 'red' })}
                            className="nav-link" 
                            to="/contact">
                            Contact
                            </NavLink>
                        </li>
                        {/* <li className="nav-item">
                            <NavLink className="nav-link disabled">Disabled</NavLink>
                        </li> */}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Nav