import React, { Component } from 'react';
import './Keyboard.css';

import Key from './Key';

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
                isActive={key == this.state.key}
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