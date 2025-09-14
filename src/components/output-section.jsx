function OutputSection() {
  return (
    <div className="output-section">
      <div className="output-controls">
        <div className="language-area">
          <img src="/img/ph-flag.webp" alt="flag" />
          <p id="langauge-text">Filipino Sign Language</p>
        </div>
        <div className="output-type">
          <span className="material-symbols-outlined">volume_up</span>
          <p id="output">Speech Output</p>
        </div>
      </div>
      <div className="text-output-display">
        <p id="output-text">Text output...</p>
      </div>
    </div>
  );
}

export default OutputSection;
