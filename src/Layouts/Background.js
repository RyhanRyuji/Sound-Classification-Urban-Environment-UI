import React from 'react';
import background from '../Assets/background.jpg';

function Background() {
  return (
    <div className="container demo">
      <div className="content">
        <div id="large-header" className="large-header">
          <canvas id="demo-canvas"></canvas>
        </div>
      </div>
    </div>
  );
}

export default Background;