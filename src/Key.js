import React, { Component } from 'react';

class Key extends Component {
  render() {
    return (
      <button className="Key" type="button">
        {this.props.label}
      </button>
    );
  }
}

export default Key;
