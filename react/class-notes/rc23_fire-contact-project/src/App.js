import { useState } from "react";
import "./App.css";
import Contacts from "./components/contacts/Contacts";
import FormComponent from "./components/form/FormComponent";


//! fonksiyonları ve state leri burda oluşturup componentlere göndermemizin amacı 
//! edit te de aynı state ile veri göndermektir 
function App() {

  const initialValues={
    username:"",
    phoneNumber:"",
    gender:""
  }

  const [info, setInfo] = useState(initialValues);
  const [add, setAdd] = useState("ADD")

  const handleSubmit = (e) => {
    e.preventDefault();

  }


  return (
    <div className="App">
      <FormComponent  handleSubmit={handleSubmit} info={info} setInfo={setInfo} add={add} />
      <Contacts />
    </div>
  );
}

export default App;
