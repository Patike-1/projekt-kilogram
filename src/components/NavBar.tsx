

"use client";

import * as React from 'react';
import { useRouter } from 'next/navigation';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import PostAddIcon from '@mui/icons-material/PostAdd';
import { useSession } from 'next-auth/react';
import AuthView from '@/sections/AuthView';
import NonAuthView from '@/sections/NonAuthView';

export default function NavBar() {
  const [value, setValue] = React.useState(0);
  const router = useRouter();
  const { data: session } = useSession();

  const handleNavigation = (newValue: number) => {
    setValue(newValue);
    switch (newValue) {
      case 0:
        router.push('/'); // Domov
        break;
      case 1:
        router.push('/prispevok'); // Príspevky
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
      >
        {/* Tlačidlá dostupné pre všetkých */}
        <BottomNavigationAction label="Domov" icon={<HomeIcon />} />
        <BottomNavigationAction label="Príspevky" icon={<PostAddIcon />} />

        {/* Dynamické tlačidlá na základe autentifikácie */}
        {session ? <AuthView /> : <NonAuthView />}
      </BottomNavigation>
    </Box>
  );
}