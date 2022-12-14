
import './App.css';
import Card from './components/Card/Card';
import data from "./utils/data"; //! importtan sonra herhangi bir şey yazabiliriz 

function App() {
  console.log(data);
  return (
    <div className="App">
    {data?.map((item,index) => {

      return(
        <Card key={index} props={item}/>
      )
    })}
    
    </div>
  );
}

export default App;
