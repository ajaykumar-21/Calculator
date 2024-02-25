import "./App.css";
import React, { useState } from "react";

function App() {
  const [inputDisplay, setInputDisplay] = useState("");
  const [resultDisplay, setResultDisplay] = useState("");

  const handleInput = (value) => {
    setInputDisplay((prevInputDisplay) => prevInputDisplay + value);
  };

  const clearDisplay = () => {
    setInputDisplay("");
    setResultDisplay("");
  };

  const calculateResult = () => {
    try {
      const result = eval(inputDisplay);
      setResultDisplay(result.toString());
    } catch (error) {
      setResultDisplay("Error");
    }
  };
  return (
    <div className="container">
      <h1>React Calculator</h1>
      <input type="text" value={inputDisplay} readOnly />
      <div className="dislay">{resultDisplay}</div>
      <div className="calculator">
        <div className="keys">
          <button onClick={() => handleInput("1")}>1</button>
          <button onClick={() => handleInput("2")}>2</button>
          <button onClick={() => handleInput("3")}>3</button>
          <button onClick={() => handleInput("+")}>+</button>
          <button onClick={() => handleInput("4")}>4</button>
          <button onClick={() => handleInput("5")}>5</button>
          <button onClick={() => handleInput("6")}>6</button>
          <button onClick={() => handleInput("-")}>-</button>
          <button onClick={() => handleInput("7")}>7</button>
          <button onClick={() => handleInput("8")}>8</button>
          <button onClick={() => handleInput("9")}>9</button>
          <button onClick={() => handleInput("*")}>*</button>
          <button onClick={() => handleInput("0")}>0</button>
          <button onClick={() => calculateResult()}>=</button>
          <button onClick={() => handleInput("/")}>/</button>
          <button onClick={() => clearDisplay()}>C</button>
        </div>
      </div>
    </div>
  );
}

export default App;
