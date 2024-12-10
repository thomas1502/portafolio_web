// CardComponent.jsx

import React from 'react';
import './CardComponent.css';

const CardComponent = ({ icon, title, description }) => {
  return (
    <div className="card">
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
