import React from "react";

import "../css/toolbar.css";

const Toolbar = (props) => {
  return (
    <div id="toolBar">
      <h2 id="display">
        {props.description !== "" ? props.description : "Play a drum!"}
      </h2>
    </div>
  );
};

export default Toolbar;
