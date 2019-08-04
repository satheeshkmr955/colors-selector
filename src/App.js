import React from "react";
import "./App.css";
import ColorsSelector from "./ColorsSelector/ColorsSelector";

function App() {
  return (
    <div className="App">
      <div>
        <ColorsSelector colors={["#333", "red", "green"]} />
      </div>
      <div>
        <ColorsSelector colors={["pink", "blue", "white"]} />
      </div>
      <div>
        <ColorsSelector colors={["orange", "yellow", "violet"]} />
      </div>
    </div>
  );
}

export default App;
