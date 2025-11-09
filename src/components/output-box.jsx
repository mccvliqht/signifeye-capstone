import React from "react";

function OutputBox({ output = "", fontSize = 16 }) {
  return (
    <div className="text-output-display">
      <p id="output-text" style={{ fontSize: `${fontSize}px` }}>
        {output ? output : "Waiting for sign..."}
      </p>
    </div>
  );
}



export default OutputBox;
