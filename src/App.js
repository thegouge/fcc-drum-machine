import React, {Component} from "react";

import DrumPad from "./components/DrumPad";
import Toolbar from "./components/Toolbar";
import Footer from "./components/Footer";

import testSound from "./assets/test.wav";

import "./css/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drums: [
        {letter: "Q", description: "drum 1", sound: testSound},
        {letter: "W", description: "drum 2", sound: testSound},
        {letter: "E", description: "drum 3", sound: testSound},
        {letter: "A", description: "drum 4", sound: testSound},
        {letter: "S", description: "drum 5", sound: testSound},
        {letter: "D", description: "drum 6", sound: testSound},
        {letter: "Z", description: "drum 7", sound: testSound},
        {letter: "X", description: "drum 8", sound: testSound},
        {letter: "C", description: "drum 9", sound: testSound}
      ],
      currentlyPlayed: ""
    };
  }
  updatePlayed = (playing) => {
    this.setState({
      currentlyPlayed: playing
    });
  };
  render() {
    const drumBank = this.state.drums.map((drumObj) => {
      const {letter, description, sound} = drumObj;
      return (
        <DrumPad
          letter={letter}
          descr={description}
          key={description}
          sound={sound}
          update={this.updatePlayed}
        />
      );
    });
    return (
      <div className="App">
        <div id="drum-machine">
          <Toolbar description={this.state.currentlyPlayed} />
          <div id="drumGrid">{drumBank}</div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
