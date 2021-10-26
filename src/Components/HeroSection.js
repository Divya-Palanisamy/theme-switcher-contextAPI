import React, { useContext } from "react";

import ThemeContext from "../Context/ThemeContext";
import ThemeColor from "../Colors";

const HeroSection = () => {
  const [theme, setThemeMode] = useContext(ThemeContext);
  const currentTheme = ThemeColor[theme];

  return (
    <div
      style={{
        padding: "1rem",
        backgroundColor: `${currentTheme.backgroundColor}`,
        color: `${currentTheme.textColor}`,
        textAlign: "center",
      }}
    >
      <h1>ContextAPI Theme Toggler</h1>
      <p>nice one... :)</p>
      <button
        style={{
          padding: "12px 16px",
          backgroundColor: "#35BDD0",
          border: "none",
          fontSize: "20px",
        }}
        onClick={() => {
          setThemeMode(theme === "light" ? "dark" : "light");
        }}
      >
        Switch Theme
      </button>
    </div>
  );
};

export default HeroSection;
