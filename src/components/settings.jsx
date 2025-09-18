function Settings ({onClose}) {
    return (
        <div className="settings-overlay">
        <div className="settings">
            <div className="settings-title">
                <h2>Settings</h2>
                <span className="material-symbols-outlined" onClick={onClose}>close</span>
            </div>

            <div className="settings-control">

                <div className="settings-btn">
                    <button className="asl">ASL</button>
                    <button className="fsl">FSL</button>
                </div>

                <div className="settings-btn">
                    <button className="speech">Speech</button>
                    <button className="text">Text</button>
                </div>

                <div className="settings-btn">
                    <button className="dark-mode">Dark</button>
                    <button className="light-mode">Light</button>
                </div>

                <div className="settings-btn">
                    <button className="font-display">16</button>
                    <button className="font-size-btn">Edit</button>
                </div>

                <button id="save-button">Save Changes</button>

            </div>
        </div>
        </div>
    );
}

export default Settings;
