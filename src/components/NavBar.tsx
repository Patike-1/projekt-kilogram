

"use client";

import * as React from 'react';
import { useRouter } from 'next/navigation';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import PostAddIcon from '@mui/icons-material/PostAdd';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import LoginIcon from '@mui/icons-material/Login';

export default function NavBar() {
  const [value, setValue] = React.useState(0);
  const router = useRouter(); // Inicializácia routera

  const handleNavigation = (newValue: number) => {
    setValue(newValue);
    switch (newValue) {
      case 0:
        router.push('/'); // Domov
        break;
      case 1:
        router.push('/prispevok'); // Príspevky
        break;
      case 2:
        router.push('/auth/registracia'); // Registrácia
        break;
      case 3:
        router.push('/auth/prihlasenie'); // Prihlásenie
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
        onChange={(event, newValue) => handleNavigation(newValue)} // Zavoláme handleNavigation
      >
        <BottomNavigationAction label="Domov" icon={<HomeIcon />} />
        <BottomNavigationAction label="Príspevky" icon={<PostAddIcon />} />
        <BottomNavigationAction label="Registrácia" icon={<PersonAddIcon />} />
        <BottomNavigationAction label="Prihlásenie" icon={<LoginIcon />} />
      </BottomNavigation>
    </Box>
  );
}
