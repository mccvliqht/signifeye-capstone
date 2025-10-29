import React from "react";

function OutputBox({ output = "Text", fontSize = 16 }) {
  const isText = output === "Text";

  return (
    <div className="text-output-display">
      <p id="output-text" style={{ fontSize: `${fontSize}px` }}>
        {isText ? "Text output..." : "🔊 Speech output will play..."}
      </p>
    </div>
  );
}

export default OutputBox;
