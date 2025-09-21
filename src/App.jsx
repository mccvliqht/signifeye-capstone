import { useState } from "react";
import Header from "./components/header";
import CameraSection from "./components/cam-section";
import OutputSection from "./components/output-section";
import Settings from "./components/settings";
import "./styles.css";

function App() {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  // SAVED (applied only when the user clicks Save Changes)
  const [selectedLang, setSelectedLang] = useState("FSL");
  const [selectedOutput, setSelectedOutput] = useState("Text");
  const [selectedTheme, setSelectedTheme] = useState("Light");
  const [fontSize, setFontSize] = useState(16);

  return (
    // root container with theme class -> CSS variables will style the whole page
    <div className={`app ${selectedTheme === "Dark" ? "dark-mode" : "light-mode"}`}>
      <Header onOpenSettings={() => setIsSettingsOpen(true)} />

      <main className="main-content">
        <CameraSection />
        <OutputSection lang={selectedLang} output={selectedOutput} fontSize={fontSize} />
      </main>

      {isSettingsOpen && (
        <Settings
          onClose={() => setIsSettingsOpen(false)}
          savedLang={selectedLang}
          savedOutput={selectedOutput}
          savedTheme={selectedTheme}
          savedFontSize={fontSize}
          onSave={(lang, output, theme, font) => {
            // apply all at once only when Save Changes pressed
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
