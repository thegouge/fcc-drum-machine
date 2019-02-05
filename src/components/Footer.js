import React from "react";

import "../css/footer.css";

const Footer = (props) => {
  return (
    <footer>
      all drum sounds are from{" "}
      <a href="https://soundpacks.com/free-sound-packs/travis-scott-drum-kit/">
        Travis Scott Drum Kit
      </a>{" "}
      by Tony Starks
      <br />
      Beatbox sounds from Alex Gouge-Schajer's Mouth, with the help of{" "}
      <a href="https://www.microsoft.com/en-us/p/wavepad-audio-editor-free/9p0kqx1z0wm2?activetab=pivot:overviewtab">
        Wave Pad
      </a>{" "}
      by NCH Software
    </footer>
  );
};

export default Footer;
