import React, { useState } from "react";
import HeroSection from "./Components/HeroSection";
import Toggler from "./Components/Toggler";
import ThemeContext from "./Context/ThemeContext";

const App = () => {
  const themeMode = useState("light");

  return (
    <ThemeContext.Provider value={themeMode}>
      <div>
        <Toggler />
        <HeroSection />
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
