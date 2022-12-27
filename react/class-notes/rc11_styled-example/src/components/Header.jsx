import Container from "./styles/Container.styled"
import StyledHeader, { Logo } from "./styles/Header.styled"
import Button from "./styles/Button.styled"

const Header = () => {
  return (
    <StyledHeader>
        <Container>
            <nav>
                <Logo src="./images/logo.png" alt="" />
                <div>
                    <Button color="#A62440">Apply Courses</Button>
                    <Button bg="#A62440">Talk to Adviser</Button>
                </div>
                
            </nav>

            <div>
                <div>
                    <h1>The IT Career of Your Dreams Starts Here!</h1>
                    <p>
                    Clarusway is a leading international software Bootcamp. Join a
                    micro class online with other trainees and learn coding skills
                    with a highly-skilled instructor.
                    </p>
                    <button>Start Your New Carier</button>
                </div>
                <img src="./images/hero.jpg" width="500" alt="" />
            </div>
        </Container>
    </StyledHeader>
  )
}

export default Header