import React, { Component } from "react";
import "./App.css";
import ColorsSelector from "./ColorsSelector/ColorsSelector";

class App extends Component {
  changeColor = (event, i, color) => {};
  render() {
    return (
      <div className="App">
        <div>
          <ColorsSelector
            colors={["#333", "red", "green"]}
            defaultColor={"#333"}
            changeColor={this.changeColor}
          />
        </div>
        <div>
          <ColorsSelector
            colors={["pink", "blue", "white"]}
            defaultColor={"pink"}
            changeColor={this.changeColor}
          />
        </div>
        <div>
          <ColorsSelector
            colors={["orange", "yellow", "violet"]}
            defaultColor={"orange"}
            changeColor={this.changeColor}
          />
        </div>
      </div>
    );
  }
}

export default App;
