

// src/components/AuthView.tsx
"use client";

import * as React from 'react';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';
import { useRouter } from 'next/navigation';
import { signOut } from 'next-auth/react';

export default function AuthView() {
  const router = useRouter();

  const handleProfile = () => {
    router.push('/profil'); // Presmerovanie na profil
  };

  const handleLogout = () => {
    signOut(); // Odhlásenie používateľa
  };

  return (
    <>
      <BottomNavigationAction
        label="Profil"
        icon={<PersonIcon />}
        onClick={handleProfile} // Presmerovanie na profil
      />
      <BottomNavigationAction
        label="Odhlásiť"
        icon={<LogoutIcon />}
        onClick={handleLogout} // Odhlásenie
      />
    </>
  );
}