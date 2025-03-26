import React from "react";
import { useTheme } from "../context/ThemeContext";

const ThemeToggle: React.FC = () => {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <div className="theme-toggle">
      <input
        type="checkbox"
        id="theme-switch"
        checked={darkMode === true}
        onChange={toggleTheme}
      />
      <label htmlFor="theme-switch" className="theme-toggle__slider">
        <span className="theme-toggle__icon sun">☀️</span>
        <span className="theme-toggle__icon moon">🌙</span>
      </label>
    </div>
  );
};

export default ThemeToggle;
