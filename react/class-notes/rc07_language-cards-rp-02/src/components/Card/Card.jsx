import {languages} from "../../helpers/data";
import "./card.css";
import Item from "../Item/Item";

const Card = () => {
    return (
        <div className="cards-area-container">
        <div className="bars"></div>
        <h1 className="language-title">Languages</h1>
        <div className="cards-container">
        {languages?.map((item,index) => {
            return <Item key={index} {...item}/>
        })}
        </div>

            
        </div>
    )
}

export default Card