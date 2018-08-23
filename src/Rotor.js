import React, { Component } from 'react';

class Rotor extends Component {
  update = ({
    type = this.props.type,
    position = this.props.position,
  } = {}) => {
    this.props.onUpdate({ type, position });
  };

  handleTypeChange = (event) => {
    this.update({ type: event.target.value });
  };

  handlePositionChange = (event) => {
    let position = +event.target.value;
    if (Number.isNaN(position)) return;

    if (position > 26) {
      position = 1;
    } else if (position < 1) {
      position = 26;
    }

    this.update({ position });
  };

  render() {
    return (
      <div className="Rotor">
        <select value={this.props.type} onChange={this.handleTypeChange}>
          <option value="I">I</option>
          <option value="II">II</option>
          <option value="III">III</option>
          <option value="IV">IV</option>
          <option value="V">V</option>
          <option value="VI">VI</option>
          <option value="VII">VII</option>
          <option value="VIII">VIII</option>
        </select>
        <input
          type="number"
          value={this.props.position}
          onChange={this.handlePositionChange}
        />
      </div>
    );
  }
}

export default Rotor;
