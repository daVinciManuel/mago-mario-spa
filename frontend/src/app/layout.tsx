import type { Metadata } from 'next';
import { cinzel, crimsonText } from './fonts';
import './globals.css';
import { SanityLive } from '@/lib/sanity';
import { draftMode } from 'next/headers';
import { VisualEditing } from 'next-sanity/visual-editing';

export const metadata: Metadata = {
  title: 'El Mago de Madrid',
  description: 'Artes místicas y encantamientos en Madrid',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isEnabled: isDraftMode } = await draftMode();

  return (
    <html lang="es" className={`${cinzel.variable} ${crimsonText.variable} scroll-smooth`}>
      <body className={crimsonText.className}>
        {children}

        {/* Live content stream — activates draft mode when token present */}
        <SanityLive />

        {/* Visual editing overlays — only rendered when Sanity Studio opens the iframe */}
        {isDraftMode && <VisualEditing />}
      </body>
    </html>
  );
}
