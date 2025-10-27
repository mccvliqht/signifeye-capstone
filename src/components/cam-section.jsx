import { useRef, useState } from "react";

function CameraSection() {
  const videoRef = useRef(null);
  const [hasCamera, setHasCamera] = useState(false);
  const [stream, setStream] = useState(null);

  const startCamera = async () => {
    try {
      const newStream = await navigator.mediaDevices.getUserMedia({ // browser call to access web camera
        video: { facingMode: "user" } // request camera access with front camera. "enviroment" for back camera.
      });
      if (videoRef.current) {
        videoRef.current.srcObject = newStream;
        setStream(newStream);
        setHasCamera(true); 
      }
    } catch (err) {
      console.error("Camera access denied:", err);
      setHasCamera(false);
    }
  };

  const stopCamera = () => {
    if (stream) {
      stream.getTracks().forEach((track) => track.stop());
      if (videoRef.current) {
        videoRef.current.srcObject = null;
      }
      setStream(null);
      setHasCamera(false);
    }
  };

  return (
    <div className="camera-section" id="camera-section">
      <div className={`camera-preview ${hasCamera ? "active" : ""}`}>
        <video
          ref={videoRef}
          autoPlay
          playsInline
          className="camera-feed"
          style={{ display: hasCamera ? "block" : "none" }}
        />
        {!hasCamera && 
        <><span class="material-symbols-outlined">videocam_off</span>
        <p>The camera is not available</p></>
        }
      </div>
      <div className="camera-controls">
        <button onClick={startCamera} id="start-camera" className="btn">
          Start Recognition
        </button>
        <button onClick={stopCamera} id="stop-camera" className="btn">
          Stop Recognition
        </button>
      </div>
    </div>
  );
}

export default CameraSection;