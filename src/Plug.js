import React, { Component } from 'react';
import './Plug.css';

class Plug extends Component {
  handleChange = (event) => {
    this.props.onConnect(`${this.props.letter}${event.target.value}`);
    event.target.blur();
  };

  render() {
    const availableOptions = this.props.availableLetters.map((letter) => (
      <option value={letter} key={letter}>
        {letter}
      </option>
    ));

    const labelClasses = this.props.connectedTo
      ? 'Plug__label Plug__label_active'
      : 'Plug__label';

    return (
      <div className="Plug">
        <label className={labelClasses}>
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
