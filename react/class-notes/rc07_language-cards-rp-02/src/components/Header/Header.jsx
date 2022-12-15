import reactSvg from "../../assets/react.svg";
import "./header.css"

const Header = () => {
    return (
        <div className="logo-container">
            <img className="react-logo" src={reactSvg} alt="react-header" />
        </div>
    )
}

export default Header