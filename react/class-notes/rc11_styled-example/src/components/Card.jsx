import { Image } from "./styles/Header.styled"


const Card = ({id, title, body, image}) => {
  return (
    <div key={id}>
        <div>
          <h2>{title}</h2>
          <p>{body}</p>
        </div>
        <div>
          <Image src={`./images/${image}`} width="500" alt="" />
        </div>
    </div>
  )
}

export default Card