
// src/components/NonAuthView.tsx
"use client";

import * as React from 'react';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import LoginIcon from '@mui/icons-material/Login';
import { useRouter } from 'next/navigation';

export default function NonAuthView() {
  const router = useRouter();

  const handleRegister = () => {
    router.push('/auth/registracia'); // Presmerovanie na registráciu
  };

  const handleLogin = () => {
    router.push('/auth/prihlasenie'); // Presmerovanie na prihlásenie
  };

  return (
    <>
      <BottomNavigationAction
        label="Registrácia"
        icon={<PersonAddIcon />}
        onClick={handleRegister} // Presmerovanie na registráciu
      />
      <BottomNavigationAction
        label="Prihlásenie"
        icon={<LoginIcon />}
        onClick={handleLogin} // Presmerovanie na prihlásenie
      />
    </>
  );
    }