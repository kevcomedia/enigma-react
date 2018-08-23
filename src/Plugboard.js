import React, { Component } from 'react';
import './Plugboard.css';
import Plug from './Plug';
import letterRows from './letter-rows';

const alphabet = Array.from({ length: 26 }).map((_, i) =>
  String.fromCharCode(i + 65),
);

class Plugboard extends Component {
  renderPlug = (letter) => {
    return (
      <Plug
        letter={letter}
        availableLetters={alphabet.filter((l) => l !== letter)}
        key={letter}
      />
    );
  };

  render() {
    return (
      <div className="Plugboard">
        {letterRows.map((row, idx) => (
          <div className="Plugboard__row" key={idx}>
            {row.map(this.renderPlug)}
          </div>
        ))}
      </div>
    );
  }
}

export default Plugboard;
