import { useState } from "react"


const Header = ({task, setTask}) => {
    const [btnStyle, setBtnStyle] = useState({
    name: 'SHOW ADD TASK BAR',
    bgColor: 'purple',
    })


    const handleClick = () => {
    
    }
    return (
    <header>
        <h1 className="text-blue-500 font-semibold">TASK TRACKER</h1>
        <button 
        className="btn" 
        onClick={handleClick}
        style={{backgroundColor: btnStyle.bgColor}}
        >

        </button>
    </header>
    )
}

export default Header