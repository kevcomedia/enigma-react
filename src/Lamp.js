import React from 'react';
import './Lamp.css';

function Lamp(props) {
  return (
    <div className={props.isActive ? 'Lamp Lamp_active' : 'Lamp'}>
      {props.label}
    </div>
  );
}

export default Lamp;
