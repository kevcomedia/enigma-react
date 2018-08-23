import React, { Component } from 'react';
import Reflector from './Reflector';
import Lampboard from './Lampboard';
import Keyboard from './Keyboard';
import Plugboard from './Plugboard';

class App extends Component {
  state = {
    key: null,
    plugboard: [],
    reflector: 'B',
  };

  setActiveKey = (key) => {
    this.setState({ key });
  };

  updatePlugboard = (plugboard) => {
    this.setState({ plugboard });
  };

  setReflector = (reflector) => {
    this.setState({ reflector });
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
        <Reflector type={this.state.reflector} onChange={this.setReflector} />
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
