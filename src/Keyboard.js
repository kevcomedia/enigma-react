import React, { Component } from 'react';
import Key from './Key';

class Keyboard extends Component {
  handleKeyDown = ({ keyCode }) => {
    const isLetterCode = 65 <= keyCode && keyCode <= 90;
    if (!isLetterCode) return;

    this.props.onActivate(String.fromCharCode(keyCode));
  };

  handleKeyUp = () => {
    this.props.onActivate(null);
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
              <Key label={key} key={key} />
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
