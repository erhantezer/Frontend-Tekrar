import Person from "./Person";
import data from "./data"

//! array yapısındaki data alınırken props (dat) olarak alınır ve aşağıya gönderilir 
function App() {
  
  console.log(data);
  return (
    <Person props={data}/>
  );
}

export default App;
