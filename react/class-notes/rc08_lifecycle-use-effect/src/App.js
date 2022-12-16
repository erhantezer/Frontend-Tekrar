
import { useState } from 'react';
import './App.css';
import LifeCycleMethods from './components/LifeCycleMethods';
import UseEffectHook from './components/UseEffectHook';
import Users from './components/Users';
// import Timer from './components/Timer';

function App() {
  const [show, setShow] = useState(true);
  return (
    <div className="App">
    <button onClick={() => setShow(!show)} className='btn btn-warning m-4'>
      {show ? "Hide":"Show"}
    </button>
        {/* {show && <LifeCycleMethods/>} */}
        {/* {show ? <LifeCycleMethods /> : null} */}
        {/* {show && <UseEffectHook/>} */}
        <Users/>
    </div>
  );
}

export default App;
