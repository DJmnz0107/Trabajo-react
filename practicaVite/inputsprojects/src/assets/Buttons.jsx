import React from "react";

export const Button = ({ text, onClick, color = "#3b82f6" }) => {
  const buttonStyle = {
    backgroundColor: color,
    color: "white",
    fontWeight: 500,
    padding: "0.75rem 1rem",
    borderRadius: "0.5rem",
    transition: "all 0.2s",
    margin: "0 0.5rem",
    border: "none",
    cursor: "pointer"
  };

  return (
    <button
      onClick={onClick}
      style={buttonStyle}
      onMouseOver={(e) => e.currentTarget.style.opacity = "0.9"}
      onMouseOut={(e) => e.currentTarget.style.opacity = "1"}
    >
      {text}
    </button>
  );
};

// Uso en el componente principal
export const CalculatorButtons = () => {
  return (
    <div style={{ 
      display: "flex", 
      justifyContent: "center", 
      gap: "1rem", 
      margin: "2rem 0" 
    }}>
      <Button text="Sumar" onClick={() => {}} color="#4CAF50" />
      <Button text="Restar" onClick={() => {}} color="#f44336" />
      <Button text="Multiplicar" onClick={() => {}} color="#2196F3" />
      <Button text="Dividir" onClick={() => {}} color="#FFC107" />
    </div>
  );
};