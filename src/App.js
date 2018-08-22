import React, { Component } from 'react';
import Keyboard from './Keyboard';

class App extends Component {
  state = {
    key: null,
  };

  render() {
    return (
      <div className="App">
        <Keyboard />
      </div>
    );
  }
}

export default App;
