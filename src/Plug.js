import React, { Component } from 'react';
import './Plug.css';

class Plug extends Component {
  render() {
    const availableOptions = this.props.availableLetters.map((letter) => (
      <option value={letter} key={letter}>
        {letter}
      </option>
    ));

    return (
      <div className="Plug">
        <label className="Plug__label">
          <b>{this.props.letter}</b>
          <select>
            <option value="-">none</option>
            {availableOptions}
          </select>
        </label>
      </div>
    );
  }
}

export default Plug;
