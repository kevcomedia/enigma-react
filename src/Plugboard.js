import React, { Component } from 'react';
import Plug from './Plug';

class Plugboard extends Component {
  render() {
    return (
      <div className="Plugboard">
        <Plug label="A" />
        <Plug label="B" />
        <Plug label="C" />
      </div>
    );
  }
}

export default Plugboard;
