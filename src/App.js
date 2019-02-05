import React, {Component} from "react";

import DrumPad from "./components/DrumPad";
import Toolbar from "./components/Toolbar";
import Footer from "./components/Footer";

import drumBanks from "./assets/drumBanks";

import "./css/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bbMode: false,
      drums: drumBanks.default,
      currentlyPlayed: ""
    };
  }

  updatePlayed = (playing) => {
    this.setState({
      currentlyPlayed: playing
    });
  };

  bbToggle = () => {
    this.setState({
      bbMode: !this.state.bbMode,
      drums: !this.state.bbMode ? drumBanks.beatBox : drumBanks.default
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
          <Toolbar
            description={this.state.currentlyPlayed}
            bbMode={this.state.bbMode}
            bbToggle={this.bbToggle}
          />
          <div id="drumGrid">{drumBank}</div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
