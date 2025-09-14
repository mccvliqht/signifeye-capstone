function CameraSection() {
  return (
    <div className="camera-section" id="camera-section">
      <div className="camera-preview">
        <p>No camera detected</p>
      </div>
      <div className="camera-controls">
        <button id="start-camera" className="btn">
          Start Recognition
        </button>
        <button id="stop-camera" className="btn">
          Stop Recognition
        </button>
      </div>
    </div>
  );
}

export default CameraSection;
