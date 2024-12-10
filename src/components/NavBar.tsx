// src/components/NavBar.tsx

"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeIcon from "@mui/icons-material/Home";
import PostAddIcon from "@mui/icons-material/PostAdd";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { useSession } from "next-auth/react";
import AuthView from "@/sections/AuthView";
import NonAuthView from "@/sections/NonAuthView";
import { useTheme } from "../components/ThemeContext";

export default function NavBar() {
  const [value, setValue] = React.useState(0);
  const router = useRouter();
  const { data: session } = useSession();
  const { theme, toggleTheme } = useTheme(); // Získanie témy a funkcie na jej prepínanie

  const handleNavigation = (newValue: number) => {
    setValue(newValue);
    switch (newValue) {
      case 0:
        router.push("/"); // Domov
        break;
      case 1:
        router.push("/prispevok"); // Príspevky
        break;
      default:
        break;
    }
  };

  return (
    <Box sx={{ position: "fixed", width: "100%", left: 0, right: 0, bottom: 0 }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => handleNavigation(newValue)}
        sx={{
          display: "flex",
          justifyContent: "space-between", // Umožňuje rovnomerné rozmiestnenie tlačidiel
        }}
      >
        {/* Tlačidlá dostupné pre všetkých */}
        <BottomNavigationAction label="Domov" icon={<HomeIcon />} />
        <BottomNavigationAction label="Príspevky" icon={<PostAddIcon />} />

        {/* Dynamické tlačidlá na základe autentifikácie */}
        {session ? <AuthView /> : <NonAuthView />}

        {/* Prepínač témy */}
        <BottomNavigationAction
          label={theme.palette.mode === "light" ? "Tmavý mód" : "Svetlý mód"}
          icon={theme.palette.mode === "light" ? <DarkModeIcon /> : <LightModeIcon />}
          onClick={toggleTheme} // Funkcia na prepnutie témy
          sx={{ marginLeft: "auto" }} // Posunie prepínač témy na pravú stranu
        />
      </BottomNavigation>
    </Box>
  );
}
