import "./App.css";
import ColorBox from "./components/ColorBox";
import SelectColors from "./components/SelectColors";
import { ColorProvider } from "./contexts/color";

function App() {
  return (
    <ColorProvider>
      <div>
        <SelectColors></SelectColors>
        <ColorBox></ColorBox>
      </div>
    </ColorProvider>
  );
}

export default App;
