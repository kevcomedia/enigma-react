import React, { Component } from 'react';
import Reflector from './Reflector';
import Rotor from './Rotor';
import Lampboard from './Lampboard';
import Keyboard from './Keyboard';
import Plugboard from './Plugboard';
import { createPipe } from './utils';

class App extends Component {
  state = {
    key: null,
    plugboard: [],
    reflector: 'B',
    rotors: [
      {
        type: 'I',
        position: 1,
      },
    ],
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

  updateRotor = (index, rotor) => {
    this.setState((prevState) => ({
      rotors: [
        ...prevState.rotors.slice(0, index),
        rotor,
        ...prevState.rotors.slice(index + 1),
      ],
    }));
  };

  transform = () => {
    if (!this.state.key) return null;

    const transformPipe = createPipe(
      this,
      this.plugboardTransform,
      this.rotorTransform.bind(
        this,
        this.state.rotors[0].type,
        this.state.rotors[0].position,
        true,
      ),
      this.reflectorTransform,
      this.rotorTransform.bind(
        this,
        this.state.rotors[0].type,
        this.state.rotors[0].position,
        false,
      ),
      this.plugboardTransform,
    );
    return transformPipe(this.state.key);
  };

  plugboardTransform = (letter) => {
    const pair = this.state.plugboard.find((pair) => pair.includes(letter));
    if (pair) {
      return letter === pair[0] ? pair[1] : pair[0];
    }

    return letter;
  };

  reflectorTransform = (letter) => {
    const reflectors = {
      B: 'YRUHQSLDPXNGOKMIEBFZCWVJAT',
      C: 'FVPJIAOYEDRZXWGCTKUQSBNMHL',
    };

    const letterCode = letter.charCodeAt() - 65;
    return reflectors[this.state.reflector][letterCode];
  };

  rotorTransform = (type, position, fromRight, letter) => {
    const rotors = {
      I: 'EKMFLGDQVZNTOWYHXUSPAIBRCJ',
      II: 'AJDKSIRUXBLHWTMCQGZNPYFVOE',
      III: 'BDFHJLCPRTXVZNYEIWGAKMUSQO',
      IV: 'ESOVPZJAYQUIRHXLNFTGKDCMWB',
      V: 'VZBRGITYUPSDNHLXAWMJQOFECK',
      VI: 'JPGVOUMFYQBENHZRDKASXLICTW',
      VII: 'NZJHGRCXMYSWBOUFAIVLPEKQDT',
      VIII: 'FKQHTLXOCBJSPDZRAMEWNIUYGV',
    };

    const letterCode = letter.charCodeAt() - 65;
    const p = position - 1;

    if (fromRight) {
      const index = (letterCode + p) % 26;
      return String.fromCharCode(
        ((rotors[type][index].charCodeAt() - 65 - p + 26) % 26) + 65,
      );
    } else {
      const index = rotors[type].indexOf(
        String.fromCharCode(((letterCode + p) % 26) + 65),
      );
      return String.fromCharCode(((index - p + 26) % 26) + 65);
    }
  };

  render() {
    return (
      <div className="App">
        <Reflector type={this.state.reflector} onChange={this.setReflector} />
        {this.state.rotors.map(({ type, position }, idx) => (
          <Rotor
            type={type}
            position={position}
            onUpdate={this.updateRotor.bind(this, idx)}
            key={idx}
          />
        ))}
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
