import React, { Component } from 'react';
import './Plugboard.css';
import Plug from './Plug';
import letterRows from './letter-rows';

const alphabet = Array.from({ length: 26 }).map((_, i) =>
  String.fromCharCode(i + 65),
);

class Plugboard extends Component {
  state = {
    connections: [],
  };

  updateConnections = (pair: string) => {
    this.setState((prevState) => {
      const conflictingRemoved = prevState.connections.filter(
        (p) => !p.includes(pair[0]) && !p.includes(pair[1]),
      );

      if (pair.includes('-')) {
        return {
          connections: conflictingRemoved,
        };
      }

      return {
        connections: [...conflictingRemoved, pair],
      };
    });
  };

  renderPlug = (letter) => {
    return (
      <Plug
        letter={letter}
        availableLetters={alphabet.filter((l) => l !== letter)}
        key={letter}
        onConnect={this.updateConnections}
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
