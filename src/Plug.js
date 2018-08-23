import React, { Component } from 'react';
import './Plug.css';

class Plug extends Component {
  handleChange = (event) => {
    this.props.onConnect(`${this.props.letter}${event.target.value}`);
  };

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
          <select
            value={this.props.connectedTo || '-'}
            onChange={this.handleChange}
          >
            <option value="-">-</option>
            {availableOptions}
          </select>
        </label>
      </div>
    );
  }
}

export default Plug;
