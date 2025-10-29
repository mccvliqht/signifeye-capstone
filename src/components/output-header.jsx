import React from "react";

function OutputHeader({ lang = "FSL", output = "Text" }) {
  const isFSL = lang === "FSL";
  const flagSrc = isFSL ? "/img/ph-flag.webp" : "/img/us-flag.webp";
  const langText = isFSL ? "Filipino Sign Language" : "American Sign Language";

  const isText = output === "Text";
  const outputIcon = isText ? "description" : "volume_up";
  const outputLabel = isText ? "Text Output" : "Speech Output";

  return (
    <div className="output-controls">
      <div className="language-area">
        <img src={flagSrc} alt={`${langText} flag`} />
        <p id="language-text">{langText}</p>
      </div>

      <div className="output-type">
        <span className="material-symbols-outlined">{outputIcon}</span>
        <p id="output">{outputLabel}</p>
      </div>
    </div>
  );
}

export default OutputHeader;
