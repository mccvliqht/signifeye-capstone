function Settings ({onClose}) {
    return (
        <div className="settings-overlay">
        <div className="settings">
            <div className="settings-title">
                <h2>Settings</h2>
                <span className="material-symbols-outlined" onClick={onClose}>close</span>
            </div>

            <div className="settings-control">

                <div className="lang">
                    <button className="asl">ASL</button>
                    <button className="fsl">FSL</button>
                </div>

                <div className="output">
                    <button className="speech">Speech</button>
                    <button className="text">Text</button>
                </div>

                <div className="theme">
                    <button className="dark-mode">Dark</button>
                    <button className="light-mode">Light</button>
                </div>

                <div className="font-size">
                    <input type="number" placeholder="Type here..."/>
                    <button id="font-size-btn">Edit</button>
                </div>

                <button id="save-button">Save Changes</button>

            </div>
        </div>
        </div>
    );
}

export default Settings;
