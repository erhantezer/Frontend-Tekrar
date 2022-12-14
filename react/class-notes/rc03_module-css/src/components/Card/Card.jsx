
import Buton from "../Buton/Buton"
import cardStyle from "./card.module.css"

//* module.css unique className'ler ürettiği için istenmeyen
//* stil ezilmeleri olmaz.

const Card = ({props}) => {
    const { id, img, btnName, dil }=props
  return (
    <div>
        <h1 className={cardStyle.title}>{dil}</h1>
        <img className={cardStyle["images"]} src={img} alt="img" />
        <Buton key={id} btn ={btnName}/>
    </div>
  )
}

export default Card