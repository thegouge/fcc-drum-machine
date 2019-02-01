import React, {Component} from "react";

import DrumPad from "./components/DrumPad";
import Toolbar from "./components/Toolbar";
import Footer from "./components/Footer";

// drum sound imports
import eight08 from "./assets/808.wav";
import bassC from "./assets/Bass-C.wav";
import bassCSharp from "./assets/Bass-Cs.wav";
import openHat1 from "./assets/OpenHat1.wav";
import ride from "./assets/Ride.wav";
import crash from "./assets/Crash.wav";
import hat1 from "./assets/Hat1.wav";
// import hat2 from "./assets/Hat2.wav";
import kick1 from "./assets/Kick1.wav";
// import kick2 from "./assets/Kick2.wav";
import clap from "./assets/Clap.wav";

import "./css/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drums: [
        {letter: "Q", description: "drum 1", sound: eight08},
        {letter: "W", description: "drum 2", sound: bassC},
        {letter: "E", description: "drum 3", sound: bassCSharp},
        {letter: "A", description: "drum 4", sound: openHat1},
        {letter: "S", description: "drum 5", sound: ride},
        {letter: "D", description: "drum 6", sound: crash},
        {letter: "Z", description: "drum 7", sound: hat1},
        {letter: "X", description: "drum 8", sound: kick1},
        {letter: "C", description: "drum 9", sound: clap}
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
