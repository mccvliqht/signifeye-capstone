import { useState } from "react";
import Header from "./components/header";
import CameraSection from "./components/cam-section";
import OutputSection from "./components/output-section";
import Settings from "./components/settings";
import "./styles.css";

function App() {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  return (
    <div>
      <Header onOpenSettings={() => setIsSettingsOpen(true)} />

      <main>
        <CameraSection />
        <OutputSection />
      </main>

      {isSettingsOpen && (
        <Settings onClose={() => setIsSettingsOpen(false)} />
      )}
    </div>
  );
}

export default App;
