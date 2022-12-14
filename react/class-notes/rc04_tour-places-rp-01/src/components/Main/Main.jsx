import {data} from "../../helpers/data"
import Card from "./Card";
import "./Main.scss";

//! props={item} yada {...item} spread ile verileri açıp gönderebiliriz

const Main = () => {
    console.log(data);
    return (
        <div className="card-container">
            {data?.map((item, index) => {
            
                return(
                    <Card key={index} {...item}/>
                )
            })}
        </div>
    )
}

export default Main