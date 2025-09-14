import Header from "./components/header";
import CameraSection from "./components/cam-section";
import OutputSection from "./components/output-section";
import "./styles.css"; 

function App() {
  return (
    <div>
      <Header />
      <main>
        <CameraSection />
        <OutputSection />
      </main>
    </div>
  );
}

export default App;
