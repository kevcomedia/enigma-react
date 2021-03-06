import React, { Component } from 'react';
import './Plugboard.css';
import Plug from './Plug';
import letterRows from './letter-rows';

const alphabet = Array.from({ length: 26 }).map((_, i) =>
  String.fromCharCode(i + 65),
);

class Plugboard extends Component {
  updateConnections = (pair: string) => {
    const conflictingRemoved = this.props.connections.filter(
      (p) => !p.includes(pair[0]) && !p.includes(pair[1]),
    );

    if (pair.includes('-')) {
      this.props.onConnectionChange(conflictingRemoved);
    } else {
      this.props.onConnectionChange([...conflictingRemoved, pair]);
    }
  };

  renderPlug = (letter) => {
    const pair = this.props.connections.find((pair) => pair.includes(letter));
    const connectedTo = pair && (letter === pair[0] ? pair[1] : pair[0]);

    return (
      <Plug
        letter={letter}
        availableLetters={alphabet.filter((l) => l !== letter)}
        key={letter}
        connectedTo={connectedTo}
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
