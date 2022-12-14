import Header from "./components/Header";
import Card from "./components/Card";
import Footer from "./components/Footer";

import "./scss/App.scss";
import data from "./utils/data";

function App() {

  console.log(data)
  
  return (
    
    <div>
      <Header/>
      <Card data={data}/>
      <Footer/>
    </div>
  );
}

export default App;
