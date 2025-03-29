// src/Card.jsx
import React from 'react';

const Card = ({ name, age, occupation, email, imageUrl }) => {
  return (
    <div className="card">
      <img src={imageUrl} alt={name} className="card-image" />
      <div className="card-content">
        <h2 className="card-title" style={{ color: 'black' }}>{name}</h2>
        <p className="card-text"><strong>Edad:</strong> {age}</p>
        <p className="card-text"><strong>Ocupación:</strong> {occupation}</p>
        <p className="card-text"><strong>Email:</strong> {email}</p>
      </div>
    </div>
  );
};

export default Card;