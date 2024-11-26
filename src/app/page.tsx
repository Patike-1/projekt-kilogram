// src/app/page.tsx


"use client"; // Tento riadok zabezpečuje, že komponenta je klientská

import { useSession } from "next-auth/react";
import Typography from "@mui/material/Typography";

import Container from "@mui/material/Container";

export default function HomePageNeprihlaseny() {
  const { data: session } = useSession(); // Získanie informácie o prihlásení

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Vitajte, 
        {session ? (
          // Ak je používateľ prihlásený
          <span> {session.user?.name || "užívateľ"}, ste prihlásený.</span>
        ) : (
          // Ak nie je prihlásený
          <span>
            Prihláste sa alebo registrujte sa
            
          </span>
        )}
      </Typography>
    </Container>
  );
}
