import "./Counter.css";

const Counter = () => {

  return (
    <div className="app">
      <h2 className="counter-header">Counter With Redux</h2>
      <h1>counter:0</h1>
      <div>

        <button 
        className="counter-button positive"
        // onClick={() =>  dispatch()}
        >
        increase
        </button>

        <button 
        className="counter-button zero"
        // onClick={() =>  dispatch()}
        >
        reset
        </button>

        <button 
        className="counter-button negative"
        // onClick={() =>  dispatch()}
        >
        decrease
        </button>
      </div>
    </div>
  );
};

export default Counter;
