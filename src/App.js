import React, { Component } from 'react';
import Keyboard from './Keyboard';

class App extends Component {
  state = {
    key: null,
  };

  handleKeyDown = ({ keyCode }) => {
    const isLetterCode = 65 <= keyCode && keyCode <= 90;
    if (!isLetterCode) return;

    this.setState({ key: String.fromCharCode(keyCode) });
  };

  handleKeyUp = () => {
    this.setState({ key: null });
  };

  render() {
    return (
      <div className="App">
        <Keyboard />
        {this.state.key && <p>{this.state.key}</p>}
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

export default App;
