import React, { Component } from 'react';

class Rotor extends Component {
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
        <input type="number" min="1" max="26" />
      </div>
    );
  }
}

export default Rotor;
