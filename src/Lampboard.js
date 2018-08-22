import React, { Component } from 'react';
import './Lampboard.css';
import Lamp from './Lamp';
import letterRows from './letter-rows';

class Lampboard extends Component {
  render() {
    return (
      <div className="Lampboard">
        {letterRows.map((row, idx) => (
          <div className="Lampboard__row" key={idx}>
            {row.map((letter) => (
              <Lamp
                isActive={this.props.output === letter}
                label={letter}
                key={letter}
              />
            ))}
          </div>
        ))}
      </div>
    );
  }
}

export default Lampboard;
