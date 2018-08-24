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

  handlePropChange = (prop) => (event) => {
    // If a non-number gets entered, the number input's value becomes an empty
    // string.
    if (!event.target.value) return this.update();

    let val = +event.target.value;
    if (val > 26) {
      val = 1;
    } else if (val < 1) {
      val = 26;
    }

    this.update({ [prop]: val });
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
            onChange={this.handlePropChange('position')}
          />
        </label>
        <label>
          Ring Setting
          <input
            type="number"
            value={this.props.ringSetting}
            onChange={this.handlePropChange('ringSetting')}
          />
        </label>
      </div>
    );
  }
}

export default Rotor;
