import type { Metadata } from 'next';
import { cinzel, crimsonText } from './fonts';
import './globals.css';

export const metadata: Metadata = {
  title: 'El Mago de Madrid',
  description: 'Artes místicas y encantamientos en Madrid',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${cinzel.variable} ${crimsonText.variable} scroll-smooth`}>
      <body className={crimsonText.className}>
        {children}
      </body>
    </html>
  );
}
