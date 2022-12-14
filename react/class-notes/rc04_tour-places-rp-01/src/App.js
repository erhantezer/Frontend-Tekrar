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
    </div>
  );
}

export default App;
