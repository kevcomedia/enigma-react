import React, { Component } from 'react';
import './Key.css';

class Key extends Component {
  handleMouseDown = (event) => {
    this.props.onActivate(this.props.label);
  };

  handleMouseUp = () => {
    this.props.onActivate(null);
  };

  render() {
    return (
      <button
        className={this.props.isActive ? 'Key Key_active' : 'Key'}
        type="button"
        onMouseDown={this.handleMouseDown}
        onMouseUp={this.handleMouseUp}
      >
        {this.props.label}
      </button>
    );
  }
}

export default Key;
