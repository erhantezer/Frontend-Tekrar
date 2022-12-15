import { useState } from "react";
import "./item.css";

const Item = ({ name, img, options }) => {
  const [show, setShow] = useState(true)

  const handleClick = () => {
    setShow(!show)
  }

  return (
    <div onClick={handleClick} className="card">
      {show ? (
        <div>
          <img className='card-logo' src={img} alt="img" />
          <h3 className='card-title'>{name}</h3>
        </div>

      ) : (<ul className="list">
        {options?.map((element, index) => {
          return (
            <li key={index}>{element}</li>
          )
        })}
      </ul>)}




    </div>
  )
}

export default Item