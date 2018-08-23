import React, { Component } from 'react';
import './Keyboard.css';

import Key from './Key';
import letterRows from './letter-rows';

class Keyboard extends Component {
  state = {
    key: null,
  };

  activateKey = (key) => {
    this.props.onActivate(key);
    this.setState({ key });
  };

  handleKeyDown = ({ keyCode }) => {
    const isLetterCode = 65 <= keyCode && keyCode <= 90;
    if (!isLetterCode) return;

    this.activateKey(String.fromCharCode(keyCode));
  };

  handleKeyUp = () => {
    this.activateKey(null);
  };

  render() {
    return (
      <div className="Keyboard">
        {letterRows.map((row, idx) => (
          <div className="Keyboard__row" key={idx}>
            {row.map((key) => (
              <Key
                isActive={key === this.state.key}
                label={key}
                key={key}
                onActivate={this.activateKey}
              />
            ))}
          </div>
        ))}
      </div>
    );
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
    document.addEventListener('keyup', this.handleKeyUp);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
    document.removeEventListener('keyup', this.handleKeyUp);
  }
}

export default Keyboard;
