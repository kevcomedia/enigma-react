import React, { Component } from 'react';
import Key from './Key';

class Keyboard extends Component {
  render() {
    const keyRows = [
      ['Q', 'W', 'E', 'R', 'T', 'Z', 'U', 'I', 'O'],
      ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K'],
      ['P', 'Y', 'X', 'C', 'V', 'B', 'N', 'M', 'L'],
    ];

    return (
      <div className="Keyboard">
        {keyRows.map((row, idx) => (
          <div className="Keyboard__row" key={idx}>
            {row.map((key) => (
              <Key label={key} key={key} />
            ))}
          </div>
        ))}
      </div>
    );
  }
}

export default Keyboard;
