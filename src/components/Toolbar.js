import React from "react";

import "../css/toolbar.css";

export default function Toolbar(props) {
  return (
    <div id="toolBar">
      <h2 id="display">
        {props.description !== "" ? props.description : "Play a drum!"}
      </h2>
      <div className="tool" id="bb">
        <label htmlFor="bb-toggle" id="bb-label">
          Beatbox Mode
        </label>
        <label className="switch">
          <input
            id="bb-toggle"
            type="checkbox"
            checked={props.bbMode}
            onChange={props.bbToggle}
          />
          <span className="slider" />
        </label>
      </div>
    </div>
  );
}
