"use client";
import React, { createContext, useState, useContext, useEffect } from "react";
import { lightTheme, darkTheme } from "../styles/theme";
import { ThemeProvider as MuiThemeProvider, CssBaseline } from "@mui/material";

const ThemeContext = createContext({
  theme: lightTheme,
  toggleTheme: () => {},
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState(lightTheme);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setTheme(darkTheme);
    } else {
      setTheme(lightTheme);
    }
    setIsHydrated(true);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === lightTheme ? darkTheme : lightTheme;
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme === lightTheme ? "light" : "dark");
  };

  if (!isHydrated) {
    return null;
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
