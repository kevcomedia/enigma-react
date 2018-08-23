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

  render() {
    return (
      <div className="App">
        <Lampboard output={this.state.key} />
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
