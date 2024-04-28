import React from "react";
import Home from "./pages/home/Home";
import { ThemeProvider } from "./context/themeContext";

function App() {
  return (
    <div>
      <ThemeProvider>
        <Home />
      </ThemeProvider>
    </div>
  );
}

export default App;
