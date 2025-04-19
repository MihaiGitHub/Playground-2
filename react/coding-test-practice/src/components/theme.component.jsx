import React, { useState } from "react";

// Define the themes
const themes = {
  light: {
    background: "#ffffff",
    color: "#000000",
  },
  dark: {
    background: "#000000",
    color: "#ffffff",
  },
};

function ThemeChangeApp() {
  const [themeName, setThemeName] = useState("light"); // Default theme is light
  const currentTheme = themes[themeName];

  const toggleTheme = () => {
    setThemeName((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div
      style={{
        padding: "20px",
        background: currentTheme.background,
        color: currentTheme.color,
        minHeight: "25vh",
      }}
    >
      <h1>Theme Change Feature - CSS Toggle</h1>
      <p>Click the button below to toggle the theme.</p>
      <button
        onClick={toggleTheme}
        style={{
          padding: "10px 20px",
          cursor: "pointer",
          background: currentTheme.color,
          color: currentTheme.background,
          border: "none",
          borderRadius: "5px",
        }}
      >
        Toggle Theme
      </button>
    </div>
  );
}

export default ThemeChangeApp;
