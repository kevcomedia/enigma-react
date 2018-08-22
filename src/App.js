import React, { Component } from 'react';
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
        <Keyboard onActivate={this.setActiveKey} />
        {this.state.key && <p>{this.state.key}</p>}
      </div>
    );
  }
}

export default App;
