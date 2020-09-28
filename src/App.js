import React, { useEffect } from "react";
import "materialize-css/dist/css/materialize.min.css";
import "./App.css";
import M from "materialize-css/dist/js/materialize.min.js";
import Form from "./components/Form";

function App() {
  useEffect(() => {
    M.AutoInit();
  }, []);
  return (
    <div className="App">
      <h1>Scrabble Generator</h1>
      <div className="outerContainer">
        <div className="layoutContainer">
          <h3>Layout here</h3>
        </div>
        <div className="formContainer">
          <Form />
        </div>
      </div>
    </div>
  );
}

export default App;
