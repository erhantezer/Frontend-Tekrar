
import './App.css';
import Home from './pages/Home';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer} from 'react-toastify';

function App() {
  return (
    <div>
      <Home />
      <ToastContainer />
    </div>
    
    )
  
}

export default App;
