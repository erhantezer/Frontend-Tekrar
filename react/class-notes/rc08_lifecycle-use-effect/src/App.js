
import { useState } from 'react';
import './App.css';
import LifeCycleMethods from './components/LifeCycleMethods';

function App() {
  const [show, setShow] = useState(true);
  return (
    <div className="App">
    <button onClick={() => setShow(!show)} className='btn btn-warning m-4'>
      {show ? "Hide":"Show"}
    </button>
        {show && <LifeCycleMethods/>}
    </div>
  );
}

export default App;
