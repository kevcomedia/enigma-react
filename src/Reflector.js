import React, { Component } from 'react';

class Reflector extends Component {
  handleChange = (event) => {
    this.props.onChange(event.target.value);
  };

  render() {
    return (
      <div className="Reflector">
        <p>Reflector</p>
        <label className="Reflector__label">
          B{' '}
          <input
            type="radio"
            name="reflector"
            value="B"
            onChange={this.handleChange}
            checked={this.props.type === 'B'}
          />
        </label>
        <label className="Reflector__label">
          C{' '}
          <input
            type="radio"
            name="reflector"
            value="C"
            onChange={this.handleChange}
            checked={this.props.type === 'C'}
          />
        </label>
      </div>
    );
  }
}

export default Reflector;
