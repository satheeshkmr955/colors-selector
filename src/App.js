import React from "react";
import "./App.css";
import ColorsSelector from "./ColorsSelector/ColorsSelector";

function App() {
  return (
    <div className="App">
      <ColorsSelector colors={["#333", "red", "green"]} />
    </div>
  );
}

export default App;
