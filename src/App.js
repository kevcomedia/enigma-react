import React, { Component } from 'react';
import Lampboard from './Lampboard';
import Keyboard from './Keyboard';
import Plugboard from './Plugboard';

class App extends Component {
  state = {
    key: null,
  };

  setActiveKey = (key) => {
    this.setState({ key });
  };

  render() {
    return (
      <div className="App">
        <Lampboard output={this.state.key} />
        <Keyboard onActivate={this.setActiveKey} />
        <Plugboard />
      </div>
    );
  }
}

export default App;
