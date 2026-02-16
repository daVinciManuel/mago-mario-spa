import type { Metadata } from "next";
import "./globals.css";

// 1. Definimos las variables de estilo para que las cambies cuando quieras
const THEME = {
  bgColor: "#d5c6b3",
  textureUrl: "https://www.transparenttextures.com/patterns/natural-paper.png",
  mainFont: "serif", // Usaremos la fuente serif del sistema para el toque antiguo
};

export const metadata: Metadata = {
  title: "Mario Wenceslao | Magia",
  description: "Magia y artes escenicas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className="antialiased"
        style={{
          backgroundColor: THEME.bgColor,
          fontFamily: THEME.mainFont
        }}
      >
        {/* Capa de textura global */}
        <div
          className="fixed inset-0 z-0 pointer-events-none opacity-40"
          style={{
            backgroundImage: `url(${THEME.textureUrl})`,
            backgroundAttachment: 'fixed'
          }}
        />

        {/* Contenedor del contenido */}
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}
