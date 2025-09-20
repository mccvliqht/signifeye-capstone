import { useState } from "react";
import Header from "./components/header";
import CameraSection from "./components/cam-section";
import OutputSection from "./components/output-section";
import Settings from "./components/settings";
import "./styles.css";

function App() {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  const [selectedLang, setSelectedLang] = useState("FSL");
  const [selectedOutput, setSelectedOutput] = useState("Text");
  const [selectedTheme, setSelectedTheme] = useState("Light");

  return (
    <div>
      <Header onOpenSettings={() => setIsSettingsOpen(true)} />

      <main>
        <CameraSection />
        <OutputSection />
      </main>

      {isSettingsOpen && (
        <Settings 
          onClose={() => setIsSettingsOpen(false)}
          savedLang={selectedLang}
          savedOutput={selectedOutput}
          savedTheme={selectedTheme}
          onSave={(lang, output, theme) => {
            setSelectedLang(lang);
            setSelectedOutput(output);
            setSelectedTheme(theme);
            setIsSettingsOpen(false); 
          }}
        />
      )}
    </div>
  );
}

export default App;
