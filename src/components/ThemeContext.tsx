"use client";  // Táto direktíva zabezpečí, že tento súbor bude klientský komponent.

import React, { createContext, useState, useContext, useEffect } from "react";
import { lightTheme, darkTheme } from "../styles/theme";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";

// Definícia ThemeContext
const ThemeContext = createContext({
  theme: lightTheme, // Predvolená téma je svetlá
  toggleTheme: () => {}, // Funkcia na prepínanie témy
});

// ThemeProvider komponenta
export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState(lightTheme); // Predvolený stav témy je svetlý
  const [isHydrated, setIsHydrated] = useState(false); // Stav, ktorý zabezpečuje, že komponent je hydrated

  // Tento useEffect zabezpečí, že tému načítame až po vykreslení na klientovi
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setTheme(darkTheme);
    } else {
      setTheme(lightTheme);
    }
    setIsHydrated(true); // Nastavíme hydrated stav na true po načítaní
  }, []);

  // Funkcia na prepínanie témy
  const toggleTheme = () => {
    const newTheme = theme === lightTheme ? darkTheme : lightTheme;
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme === lightTheme ? "light" : "dark");
  };

  // Nezobrazujeme nič predtým, než je komponent hydrated
  if (!isHydrated) {
    return null; // Zabezpečí, že sa nič nezobrazí počas inicializácie
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
    </ThemeContext.Provider>
  );
};

// Hook na získanie aktuálnej témy a funkcie na prepínanie
export const useTheme = () => useContext(ThemeContext);
