import React from "react";

export const InputField = ({ placeholder, value, onChange }) => {
  return (
    
    <input
      type="number"
      placeholder={placeholder}
      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      value={value}
      onChange={onChange}
    />
  );
};