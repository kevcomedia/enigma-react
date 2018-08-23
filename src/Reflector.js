import React, { Component } from 'react';

class Reflector extends Component {
  render() {
    return (
      <div className="Reflector">
        <p>Reflector</p>
        <label className="Reflector__label">
          B <input type="radio" name="reflector" value="B" />
        </label>
        <label className="Reflector__label">
          C <input type="radio" name="reflector" value="C" />
        </label>
      </div>
    );
  }
}

export default Reflector;
