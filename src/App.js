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
        ringSetting: 1,
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
        this.state.rotors[0].ringSetting,
        true,
      ),
      this.reflectorTransform,
      this.rotorTransform.bind(
        this,
        this.state.rotors[0].type,
        this.state.rotors[0].position,
        this.state.rotors[0].ringSetting,
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

  rotorTransform = (type, position, ringSetting, fromRight, letter) => {
    /*
    These are right-to-left encodings. For example, transforming "A" through the
    I-type rotor from the right yields "E".

    For left-to-right transforms, the index of the input is looked up, then
    converted to a letter. So to transform "A" through the I-type from the left,
    we get its index 20, then convert that to the letter "U".
    */
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
    const rotorCodes = [...rotors[type]].map((l) => l.charCodeAt() - 65);

    const letterCode = letter.charCodeAt() - 65;
    const adjustment = position - ringSetting;
    /*
    adjustment could be negative, so to prevent the adjusted value from falling
    into the dark realm of negative ints prior to modulo-ing by 26, we add 26
    first.
    */
    const adjustedCode = (letterCode + adjustment + 26) % 26;

    const transformedCode = fromRight
      ? rotorCodes[adjustedCode]
      : rotorCodes.indexOf(adjustedCode);
    return String.fromCharCode(((transformedCode - adjustment + 26) % 26) + 65);
  };

  render() {
    return (
      <div className="App">
        <Reflector type={this.state.reflector} onChange={this.setReflector} />
        {this.state.rotors.map(({ type, position, ringSetting }, idx) => (
          <Rotor
            type={type}
            position={position}
            ringSetting={ringSetting}
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
