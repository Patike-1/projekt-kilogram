// src/components/NavBar.tsx

"use client";
import PersonIcon from '@mui/icons-material/Person';
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
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import LoginIcon from '@mui/icons-material/Login';




import LogoutIcon from '@mui/icons-material/Logout';
import { signOut } from 'next-auth/react';

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


  const handleRegister = () => {
    router.push('/auth/registracia'); // Presmerovanie na registráciu
  };

  const handleLogin = () => {
    router.push('/auth/prihlasenie'); // Presmerovanie na prihlásenie
  };

  const handleLogout = () => {
      signOut(); // Odhlásenie používateľa
    };

  const handleProfile = () => {
    router.push('/profil'); // Presmerovanie na profil
  };

  return (
    <Box sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}>
      
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => handleNavigation(newValue)}
        sx={{
          display: "flex",
          position: "center",
           // Umožňuje rovnomerné rozmiestnenie tlačidiel
        }}
      > 
          {/* Tlačidlá dostupné pre všetkých */}
          <BottomNavigationAction label="Domov" icon={<HomeIcon />} />
          <BottomNavigationAction label="Príspevky" icon={<PostAddIcon />} />

          {!session ? (
            <BottomNavigationAction
          label="Registrácia"
          icon={<PersonAddIcon />}
          onClick={handleRegister} // Presmerovanie na registráciu
        />
          ) : (
                <BottomNavigationAction
              label="Profil"
              icon={<PersonIcon />}
              onClick={handleProfile} // Presmerovanie na profil
        />
          )}

          {!session ? (
            <BottomNavigationAction
            label="Prihlásenie"
            icon={<LoginIcon />}
            onClick={handleLogin} // Presmerovanie na prihlásenie
          />
          ) : (
                <BottomNavigationAction
              label="Odhlásiť"
              icon={<LogoutIcon />}
              onClick={handleLogout} // Odhlásenie
        />
          )}

        {/* Prepínač témy */}
        <BottomNavigationAction
          label={theme.palette.mode === "light" ? "Tmavý mód" : "Svetlý mód"}
          icon={theme.palette.mode === "light" ? <DarkModeIcon /> : <LightModeIcon />}
          onClick={toggleTheme} // Funkcia na prepnutie témy
          sx={{ marginLeft: "fixed" }} // Posunie prepínač témy na pravú stranu
        />
      </BottomNavigation>
    </Box>
    
  );
}


