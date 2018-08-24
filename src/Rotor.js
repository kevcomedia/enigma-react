import React, { Component } from 'react';

class Rotor extends Component {
  update = ({
    type = this.props.type,
    position = this.props.position,
    ringSetting = this.props.ringSetting,
  } = {}) => {
    this.props.onUpdate({ type, position, ringSetting });
  };

  handleTypeChange = (event) => {
    event.target.blur();
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

  handleRingSettingChange = (event) => {
    let ringSetting = +event.target.value;
    if (Number.isNaN(ringSetting)) return;

    if (ringSetting > 26) {
      ringSetting = 1;
    } else if (ringSetting < 1) {
      ringSetting = 26;
    }

    this.update({ ringSetting });
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
        <label>
          Position
          <input
            type="number"
            value={this.props.position}
            onChange={this.handlePositionChange}
          />
        </label>
        <label>
          Ring Setting
          <input
            type="number"
            value={this.props.ringSetting}
            onChange={this.handleRingSettingChange}
          />
        </label>
      </div>
    );
  }
}

export default Rotor;
