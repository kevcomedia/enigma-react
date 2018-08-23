import React, { Component } from 'react';

class Rotor extends Component {
  handlePositionChange = (event) => {
    let value = +event.target.value;
    if (Number.isNaN(value)) return;

    if (value > 26) {
      value = 1;
    } else if (value < 1) {
      value = 26;
    }

    this.props.onUpdate({
      type: this.props.type,
      position: value,
    });
  };

  render() {
    return (
      <div className="Rotor">
        <select>
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
