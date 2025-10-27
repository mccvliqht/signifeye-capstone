import { useState } from "react";
import useDevice from "./useDevice";
import Header from "./components/header";
import CameraSection from "./components/cam-section";
import OutputSection from "./components/output-section";
import Settings from "./components/settings";
import MobileLayout from "./components/mobile-layout";
import "./styles.css";

function App() {
  const isMobile = useDevice(); 
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  // SAVED SETTINGS
  const [selectedLang, setSelectedLang] = useState("FSL");
  const [selectedOutput, setSelectedOutput] = useState("Text");
  const [selectedTheme, setSelectedTheme] = useState("Light");
  const [fontSize, setFontSize] = useState(16);

  // MOBILE LAYOUT
  if (isMobile) {
    return (
      <div
        className={`app mobile ${
          selectedTheme === "Dark" ? "dark-mode" : "light-mode"
        }`}
      >
        <main className="main-content">
          <MobileLayout/>
        </main>
      </div>
    );
  }

  // DESKTOP DEFAULT UI
  return (
    <div
      className={`app ${selectedTheme === "Dark" ? "dark-mode" : "light-mode"}`}
    >
      <Header onOpenSettings={() => setIsSettingsOpen(true)} />

      <main className="main-content">
        <CameraSection />
        <OutputSection
          lang={selectedLang}
          output={selectedOutput}
          fontSize={fontSize}
        />
      </main>

      {isSettingsOpen && (
        <Settings
          onClose={() => setIsSettingsOpen(false)}
          savedLang={selectedLang}
          savedOutput={selectedOutput}
          savedTheme={selectedTheme}
          savedFontSize={fontSize}
          onSave={(lang, output, theme, font) => {
            setSelectedLang(lang);
            setSelectedOutput(output);
            setSelectedTheme(theme);
            setFontSize(font);
            setIsSettingsOpen(false);
          }}
        />
      )}
    </div>
  );
}

export default App;
