// CardComponent.jsx

import React from 'react';
import '../styles/CardComponent.css';

const CardComponent = ({ icon, title, description, onClick }) => {
  return (
    <div className="card" onClick={onClick}>
      <div className="card-icon-container">
        <div className="card-icon">{icon}</div>
      </div>
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
      </div>
    </div>
  );
};

export default CardComponent;
