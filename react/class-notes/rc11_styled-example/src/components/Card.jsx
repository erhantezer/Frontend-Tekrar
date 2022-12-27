import StyledCard from "./styles/Card.styled"
import { Image } from "./styles/Header.styled"


const Card = ({id, title, body, image}) => {
  return (
    <StyledCard key={id} odd={id % 2 && 'row-reverse'}>
        <div>
          <h2>{title}</h2>
          <p>{body}</p>
        </div>
        <div>
          <Image src={`./images/${image}`} width="500" alt="" />
        </div>
    </StyledCard>
  )
}

export default Card