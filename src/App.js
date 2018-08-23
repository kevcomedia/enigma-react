import React, { Component } from 'react';
import Lampboard from './Lampboard';
import Keyboard from './Keyboard';
import Plugboard from './Plugboard';

class App extends Component {
  state = {
    key: null,
    plugboard: [],
  };

  setActiveKey = (key) => {
    this.setState({ key });
  };

  updatePlugboard = (plugboard) => {
    this.setState({ plugboard });
  };

  transform = () => {
    if (!this.state.key) return null;
    return this.plugboardTransform(this.state.key);
  };

  plugboardTransform = (letter) => {
    const pair = this.state.plugboard.find((pair) => pair.includes(letter));
    if (pair) {
      return letter === pair[0] ? pair[1] : pair[0];
    }

    return letter;
  };

  render() {
    return (
      <div className="App">
        <Lampboard output={this.transform()} />
        <Keyboard onActivate={this.setActiveKey} />
        <Plugboard
          connections={this.state.plugboard}
          onConnectionChange={this.updatePlugboard}
        />
      </div>
    );
  }
}

export default App;
