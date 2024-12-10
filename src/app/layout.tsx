import { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/NavBar";
import AuthProvider from "../components/AuthProvider";
import { ThemeProvider } from "../components/ThemeContext";

export const metadata: Metadata = {
  title: "Kilogram",
  description: "toto som urobil ja Pato",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sk">
      <ThemeProvider> {/* Téma je obalená celou aplikáciou */}
        <body>
          <AuthProvider>
            <div
              style={{
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <main style={{ flexGrow: 1 }}>{children}</main> {/* Hlavný obsah */}
            </div>
            <Navbar /> {/* Navigačný panel */}
          </AuthProvider>
        </body>
      </ThemeProvider>
    </html>
  );
}
