import React from 'react';
import './style.css'
const PredictButton = ({ onClick }) => {
  return (
    <button className='predict-btn' onClick={onClick}>
   Process Audio
    </button>
  );
};

export default PredictButton;
