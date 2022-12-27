
import './App.css';
import Button, { TomatoButton } from './components/Button.styled';
import Container from './components/Container.styled';
import HeaderText from './components/Header.styled';
import StyledLink from './components/Link.styled';

function App() {
  return (
<Container bg="green">
<HeaderText fs="1.5rem">STYLED COMPONENTS</HeaderText>
<Button primary>CLICK</Button>
<Button>Click</Button>
<TomatoButton>Click</TomatoButton>
<TomatoButton primary>Click</TomatoButton>

<StyledLink href="https://clarusway.com/" target="_blank">
          Clarusway
</StyledLink>

<StyledLink secondary href="https://clarusway.com/" target="_blank">
          Clarusway
</StyledLink>

</Container>
  );
}

export default App;
