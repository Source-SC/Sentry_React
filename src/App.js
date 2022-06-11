import "./App.css";

function App() {
  function exception1() {
    throw "exception1";
  }

  function exception2() {
    throw "exception2";
  }

  function exception3() {
    throw "exception3";
  }

  return (
    <div className="App">
      <button onClick={exception1}>crash - Exception1</button>
      <button onClick={exception2}>crash - Exception2</button>
      <button onClick={exception3}>crash - Exception3</button>
    </div>
  );
}

export default App;
