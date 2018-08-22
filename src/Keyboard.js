import React, { Component } from 'react';
import Key from './Key';

class Keyboard extends Component {
  activateKey = (key) => {
    this.props.onActivate(key);
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
    const keyRows = [
      ['Q', 'W', 'E', 'R', 'T', 'Z', 'U', 'I', 'O'],
      ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K'],
      ['P', 'Y', 'X', 'C', 'V', 'B', 'N', 'M', 'L'],
    ];

    return (
      <div className="Keyboard">
        {keyRows.map((row, idx) => (
          <div className="Keyboard__row" key={idx}>
            {row.map((key) => (
              <Key
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
