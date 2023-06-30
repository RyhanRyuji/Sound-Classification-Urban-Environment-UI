import React from 'react';
import './style.css'

function CloseButton(props) {
    return (
      <button className='close-btn' onClick={props.onClick}>X</button>
    );
  }
  
  export default CloseButton;
  