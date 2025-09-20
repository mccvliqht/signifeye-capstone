import {useState} from 'react';

function Settings ({ onClose, savedLang, savedOutput, savedTheme, onSave }) {

    const [draftLang, setDraftLang] = useState(savedLang);
    const [draftOutput, setDraftOutput] = useState(savedOutput);
    const [draftTheme, setDraftTheme] = useState(savedTheme);

    return (
        <div className="settings-overlay">
        <div className="settings">
            <div className="settings-title">
                <h2>Settings</h2>
                <span className="material-symbols-outlined" onClick={onClose}>close</span>
            </div>

            <div className="settings-control">

                {/* Language Selection */}
                <div className="settings-btn">
                    <h3>Language</h3>
                    <button className={draftLang === "ASL" ? "active" : ""}
              onClick={() => setDraftLang("ASL")}>ASL</button>
                    <button className={draftLang === "FSL" ? "active" : ""}
              onClick={() => setDraftLang("FSL")}>FSL</button>
                </div>

                {/* Output Selection */}
                <div className="settings-btn">
                    <h3>Output</h3>
                    <button className={draftOutput === "Speech" ? "active" : ""}
              onClick={() => setDraftOutput("Speech")}>Speech</button>
                    <button className={draftOutput === "Text" ? "active" : ""}
              onClick={() => setDraftOutput("Text")}>Text</button>
                </div>

                {/* Theme Selection */}
                <div className="settings-btn">
                    <h3>Theme</h3>
                    <button className={draftTheme === "Light" ? "active" : ""}
              onClick={() => setDraftTheme("Light")}>Light</button>
                    <button className={draftTheme === "Dark" ? "active" : ""}
              onClick={() => setDraftTheme("Dark")}>Dark</button>
                </div>

                {/* Font Size Selection */}
                <div className="settings-btn">
                    <h3>Font Size</h3>
                    <button className="font-display">16</button>
                    <button className="font-size-btn">Edit</button>
                </div>

                <button id="save-btn" onClick={() => onSave(draftLang, draftOutput, draftTheme)}>Save Changes</button>

            </div>
        </div>
        </div>
    );
}

export default Settings;
