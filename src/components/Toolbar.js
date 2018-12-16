import React from "react";

import "../css/toolbar.css";

const Toolbar = (props) => {
  return (
    <div id="toolBar">
      <p id="display">{props.description !== "" && props.description}</p>
    </div>
  );
};

export default Toolbar;
