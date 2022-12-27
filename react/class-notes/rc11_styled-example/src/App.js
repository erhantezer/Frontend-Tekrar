import {ThemeProvider} from "styled-components";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Container from "./components/styles/Container.styled";
import { GlobalStyles } from "./components/styles/Global";
import data from "./data"

const theme = {
  colors: {
      header: "#fff",
      body: "#fff",
      footer: "#8A1C4A",
    },
    responsive: "768px"
  }

function App() {

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <Header/>
      <Container>
      {data?.map((item,index) => {
        return(
          <Card {...item} key={index}/>
        )
      })}
        
      </Container>
      <Footer/>
    </ThemeProvider>
  );
}

export default App;
