import React from "react";
import RealTime from "./RealTime";

const style = {
  color: "red",
};

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1 style={style}>Dados do Socket: </h1>
      </div>
      <div className="container">
        <RealTime />
      </div>
    </div>
  );
}

export default App;
