import { useState } from "react";

function Settings({
  onClose,
  savedLang = "FSL",
  savedOutput = "Text",
  savedTheme = "Light",
  savedFontSize = 16,
  onSave,
}) {
  // draft values (local) — only applied when Save clicked
  const [draftLang, setDraftLang] = useState(savedLang);
  const [draftOutput, setDraftOutput] = useState(savedOutput);
  const [draftTheme, setDraftTheme] = useState(savedTheme);
  const [draftFont, setDraftFont] = useState(savedFontSize);

  return (
    <div className="settings-overlay">
      <div className="settings">
        <div className="settings-title">
          <h2>Settings</h2>
          <span className="material-symbols-outlined close-btn" onClick={onClose}>
            close
          </span>
        </div>

        <div className="settings-control">
          {/* Language */}
          <div className="settings-btn">
            <h3>Language</h3>
            <button
              className={draftLang === "ASL" ? "active" : ""}
              onClick={() => setDraftLang("ASL")}
            >
              ASL
            </button>
            <button
              className={draftLang === "FSL" ? "active" : ""}
              onClick={() => setDraftLang("FSL")}
            >
              FSL
            </button>
          </div>

          {/* Output */}
          <div className="settings-btn">
            <h3>Output</h3>
            <button
              className={draftOutput === "Speech" ? "active" : ""}
              onClick={() => setDraftOutput("Speech")}
            >
              Speech
            </button>
            <button
              className={draftOutput === "Text" ? "active" : ""}
              onClick={() => setDraftOutput("Text")}
            >
              Text
            </button>
          </div>

          {/* Theme */}
          <div className="settings-btn">
            <h3>Theme</h3>
            <button
              className={draftTheme === "Light" ? "active" : ""}
              onClick={() => setDraftTheme("Light")}
            >
              Light
            </button>
            <button
              className={draftTheme === "Dark" ? "active" : ""}
              onClick={() => setDraftTheme("Dark")}
            >
              Dark
            </button>
          </div>

          {/* Font Size — number display (left) + square +/- buttons (right) */}
          <div className="settings-btn font-size-row">
            <h3>Font Size</h3>

            {/* Number display — same look as other buttons but non-interactive */}
            <button
              id="font-display"
              disabled
              aria-disabled="true"
            >
              {draftFont}px
            </button>

            {/* Square controls */}
            <div className="font-size-controls">
              <button
                id="font-decrement"
                aria-label="Decrease font size"
                onClick={() => setDraftFont((prev) => Math.max(12, prev - 1))}
              >
                -
              </button>

              <button
                id="font-increment"
                aria-label="Increase font size"
                onClick={() => setDraftFont((prev) => Math.min(40, prev + 1))}
              >
                +
              </button>
            </div>
          </div>

          <button
            id="save-btn"
            onClick={() => onSave(draftLang, draftOutput, draftTheme, draftFont)}
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}

export default Settings;
