import React from "react";
import Home from "./pages/home/Home";
import { ThemeProvider } from "./context/themeContext";
import Fallback from "./components/fallback/Fallback";

function App() {
  return (
    <div>
      <ThemeProvider fallback={<Fallback />}>
        <Home />
      </ThemeProvider>
    </div>
  );
}

export default App;
