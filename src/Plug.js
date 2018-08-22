import React, { Component } from 'react';

class Plug extends Component {
  render() {
    return (
      <div className="Plug">
        <label className="Plug__label">
          {this.props.label}
          <select>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
          </select>
        </label>
      </div>
    );
  }
}

export default Plug;
