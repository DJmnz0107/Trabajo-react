import React, { useState } from "react";
import { InputField } from "../assets/InputField";
import { Button } from "../assets/Buttons";
import Todo from "../Todo";
import "../Todo.css";

function App() {
  const [activeComponent, setActiveComponent] = useState("calculator");

  return (
    <div className="calculadora-container">
      <div className="calculadora">
        <div className="text-center mb-4">
          <h2>Mi Aplicación</h2>
          <div className="d-flex justify-content-center gap-3">
            <Button 
              text="Calculadora" 
              onClick={() => setActiveComponent("calculator")}
              className={activeComponent === "calculator" ? "active" : ""}
            />
            <Button 
              text="Todo List" 
              onClick={() => setActiveComponent("todo")}
              className={activeComponent === "todo" ? "active" : ""}
            />
          </div>
        </div>

        {activeComponent === "calculator" ? <Calculator /> : <Todo />}
      </div>
    </div>
  );
}

function Calculator() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [resultado, setResultado] = useState("");
  const [error, setError] = useState("");

  const validarEntradas = () => {
    setError("");
    if (num1 === "" || num2 === "") {
      setError("Por favor ingrese ambos números");
      return false;
    }
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);
    if (isNaN(n1) || isNaN(n2)) {
      setError("Ingrese números válidos");
      return false;
    }
    return { n1, n2 };
  };

  const handleOperacion = (operacion) => {
    const valores = validarEntradas();
    if (!valores) return;

    const { n1, n2 } = valores;
    let resultadoOperacion = "";
    let emoji = "";

    switch (operacion) {
      case "sumar":
        resultadoOperacion = `${n1} + ${n2} = ${n1 + n2}`;
        emoji = "➕";
        break;
      case "restar":
        resultadoOperacion = `${n1} - ${n2} = ${n1 - n2}`;
        emoji = "➖";
        break;
      case "multiplicar":
        resultadoOperacion = `${n1} × ${n2} = ${n1 * n2}`;
        emoji = "✖️";
        break;
      case "dividir":
        if (n2 === 0) {
          setError("No se puede dividir por cero");
          return;
        }
        resultadoOperacion = `${n1} ÷ ${n2} = ${n1 / n2}`;
        emoji = "➗";
        break;
      default:
        return;
    }
    setResultado(`${emoji} ${resultadoOperacion}`);
  };

  const handleLimpiar = () => {
    setNum1("");
    setNum2("");
    setResultado("");
    setError("");
  };

  return (
    <div className="calculator-content">
      <div className="input-container">
        <InputField 
          placeholder="Primer número" 
          value={num1} 
          onChange={(e) => setNum1(e.target.value)}
          type="number"
        />
        <InputField 
          placeholder="Segundo número" 
          value={num2} 
          onChange={(e) => setNum2(e.target.value)}
          type="number"
        />
      </div>
      
      <div className="button-container">
        <div className="operation-buttons">
          <Button 
            text="Sumar" 
            onClick={() => handleOperacion("sumar")} 
            className="operation-btn"
          />
          <Button 
            text="Restar" 
            onClick={() => handleOperacion("restar")} 
            className="operation-btn"
          />
          <Button 
            text="Multiplicar" 
            onClick={() => handleOperacion("multiplicar")} 
            className="operation-btn"
          />
          <Button 
            text="Dividir" 
            onClick={() => handleOperacion("dividir")} 
            className="operation-btn"
          />
        </div>
        <Button 
          text="Limpiar" 
          onClick={handleLimpiar} 
          className="clear-btn"
        />
      </div>
      
      {error && (
        <div className="error-message">
          ⚠️ {error}
        </div>
      )}
      
      {resultado && !error && (
        <div className="success-message">
          {resultado}
        </div>
      )}
    </div>
  );
}

export default App;