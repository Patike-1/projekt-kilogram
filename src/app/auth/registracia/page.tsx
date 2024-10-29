// src/app/auth/registracia/page.tsx

"use client";

import { signIn } from "next-auth/react";
import Button from '@mui/material/Button';
import GoogleIcon from '@mui/icons-material/Google';
import Box from '@mui/material/Box';

export default function Registracia() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh', // Vycentruje tlačidlo vertikálne do stredu
      }}
    >
      <h1>Registrácia</h1>
      <Button
        variant="contained"
        startIcon={<GoogleIcon />}
        onClick={() => signIn("google", { callbackUrl: "/" })}
        sx={{ mt: 2 }}
      >
        Registrovať pomocou Googlu
      </Button>
    </Box>
  );
}
