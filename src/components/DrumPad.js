import React, {Component} from "react";

class DrumPad extends Component {
  constructor(props) {
    super(props);

    this.state = {
      classes: "drum-pad"
    };
  }
  componentDidMount() {
    document.addEventListener("keydown", this.playSound);
    document.addEventListener("keyup", this.unclick);
  }
  playSound = (e) => {
    const letter = this.props.letter;
    if (!e.key || letter === e.key.toUpperCase()) {
      document.getElementById(letter).play();
      console.log(`played ${letter}!`);
      this.setState({
        classes: "drum-pad clicked"
      });
      this.props.update(this.props.descr);
    }
  };
  unclick = (e) => {
    this.setState({
      classes: "drum-pad"
    });
  };
  render() {
    const {descr, letter, sound} = this.props;
    return (
      <div
        className={this.state.classes}
        id={descr}
        onMouseDown={this.playSound}
        onMouseUp={this.unclick}
      >
        <audio className="clip" id={letter} src={sound} onLoad />
        {letter}
      </div>
    );
  }
}

export default DrumPad;
