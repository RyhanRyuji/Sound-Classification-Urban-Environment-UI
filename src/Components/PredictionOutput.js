import React from 'react';

function PredictionOutput(props) {
  const { imageSrc, prediction } = props;

  return (
    <div className='predict-output'>
      <p>Prediction:</p>
      <pre>
        <img className='img-content' src={imageSrc} alt="prediction" />
        <p>{prediction}</p>
      </pre>
    </div>
  );
}

export default PredictionOutput;
