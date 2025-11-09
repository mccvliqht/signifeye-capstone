import { useRef, useState, useEffect } from "react";
import * as tf from "@tensorflow/tfjs";

function CameraSection( {onPrediction}) {
  const videoRef = useRef(null);
  const [hasCamera, setHasCamera] = useState(false);
  const [stream, setStream] = useState(null);
  const [model, setModel] = useState(null);
  const [prediction, setPrediction] = useState("");

  // Load the ASL model when component mounts
  useEffect(() => {
    const loadModel = async () => {
      try {
        console.log("Loading ASL model...");
        const loadedModel = await tf.loadLayersModel("/model/model_tfjs/model.json");
        setModel(loadedModel);
        console.log("Model loaded successfully!");
      } catch (err) {
        console.error("Failed to load model:", err);
      }
    };
    loadModel();
  }, []);

  // Start camera
  const startCamera = async () => {
    try {
      const newStream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "user" },
      });
      if (videoRef.current) {
        videoRef.current.srcObject = newStream;
        setStream(newStream);
        setHasCamera(true);

        // Start recognition loop if model is ready
        if (model) {
          startPredictionLoop();
        } else {
          console.warn("Model not loaded yet!");
        }
      }
    } catch (err) {
      console.error("Camera access denied:", err);
      setHasCamera(false);
    }
  };

  // Stop camera
  const stopCamera = () => {
    if (stream) {
      stream.getTracks().forEach((track) => track.stop());
      if (videoRef.current) videoRef.current.srcObject = null;
      setStream(null);
      setHasCamera(false);
    }
  };

  // Prediction loop
  const startPredictionLoop = () => {
    const predictFrame = async () => {
      if (!videoRef.current || !model) return;

      const video = videoRef.current;
      const tensor = tf.browser
        .fromPixels(video)
        .resizeNearestNeighbor([64, 64]) // match your training size
        .toFloat()
        .div(tf.scalar(255.0))
        .expandDims();

      const predictionTensor = model.predict(tensor);
      const predictionData = await predictionTensor.data();
      const predictedIndex = predictionData.indexOf(Math.max(...predictionData));

      // You can adjust this mapping based on your ASL labels
      const labels = [
        "A", "B", "C", "D", "E", "F", "G", "H",
        "I", "J", "K", "L", "M", "N", "O", "P",
        "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
      ];

      const predictedLetter = labels[predictedIndex];
      setPrediction(predictedLetter);
      onPrediction(predictedLetter); // send up to App

      tf.dispose([tensor, predictionTensor]);
    };

    const interval = setInterval(predictFrame, 1000); // every 1 second
    return () => clearInterval(interval);
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
        {!hasCamera && (
          <>
            <span className="material-symbols-outlined">videocam_off</span>
            <p>The camera is not available</p>
          </>
        )}
      </div>

      <div className="camera-controls">
        <button onClick={startCamera} className="btn">
          Start Recognition
        </button>
        <button onClick={stopCamera} className="btn">
          Stop Recognition
        </button>
      </div>

    </div>
  );
}

export default CameraSection;
