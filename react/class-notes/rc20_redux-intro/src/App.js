import { Provider } from "react-redux";
import "./App.css";
import Counter from "./components/counter/Counter";
// import Todo from "./components/todo/Todo";
import {store} from "./redux/index"

function App() {
  return (
    <Provider store={store}>
      <Counter />
      {/* <Todo /> */}
    </Provider>
  );
}

export default App;
