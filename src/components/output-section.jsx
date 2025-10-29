import React from "react";
import OutputHeader from "./output-header";
import OutputBox from "./output-box";

function OutputSection({ lang, output, fontSize }) {
  return (
    <div className="output-section">
      <OutputHeader lang={lang} output={output} />
      <OutputBox output={output} fontSize={fontSize} />
    </div>
  );
}

export default OutputSection;
