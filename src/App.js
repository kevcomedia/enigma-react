import React, { Component } from 'react';
import Lampboard from './Lampboard';
import Keyboard from './Keyboard';

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
      </div>
    );
  }
}

export default App;
