//! rccp class component
//! rafce functional component

import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Navbar from "./components/Navbar/Navbar";
import "./App.scss";

function App() {
  return (
    <div>
        <Navbar/>
        <Header/>
        <Main/>
        <p className="fs"><a href="#nav">E.T</a></p>
    </div>
  );
}

export default App;
