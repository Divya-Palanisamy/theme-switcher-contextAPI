import React, { useContext } from "react";
import ThemeContext from "../Context/ThemeContext";

const ThemeToggle = () => {
  const [themeMode, setThemeMode] = useContext(ThemeContext);

  return (
    <div
      onClick={() => {
        setThemeMode(themeMode === "light" ? "dark" : "light");
      }}
    >
      <span>{themeMode === "light" ? "Turn Off" : "Lights On"}</span>
    </div>
  );
};

export default ThemeToggle;
