
// src/components/NonAuthView.tsx
import Typography from "@mui/material/Typography";

export const metadata = { title: "Domov | Kilogram" };

export default function NonAuthView() {
  return (
    <Typography variant="h4" gutterBottom>
      Vitajte , Prihláste sa alebo  zaregistrujte sa.
    </Typography>
  );
}