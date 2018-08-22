import React, { Component } from 'react';
import Plug from './Plug';
import letterRows from './letter-rows';

class Plugboard extends Component {
  render() {
    const alphabet = Array.from({ length: 26 }).map((_, i) =>
      String.fromCharCode(i + 65),
    );

    return (
      <div className="Plugboard">
        {letterRows.map((row, idx) => (
          <div className="Plugboard__row" key={idx}>
            {row.map((letter) => (
              <Plug letter={letter} availableLetters={alphabet} key={letter} />
            ))}
          </div>
        ))}
      </div>
    );
  }
}

export default Plugboard;
