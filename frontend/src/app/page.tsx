import { Metadata } from 'next';
import { HeroSection } from '@/components/sections/Hero'
import { ServiceSection } from '@/components/sections/Services';
import { CtaSection } from '@/components/sections/CtaSection';
import { heroSectionData } from '@/components/sections/Hero.data';
import { serviceSectionData } from '@/components/sections/Service.data';
import { ctaSectionData } from '@/components/sections/CtaSection.data';


export const metadata: Metadata = {
  title: 'El Mago de Madrid | Artes Místicas y Encantamientos',
  description: 'Descubre los antiguos secretos de la magia en el corazón de Madrid. Espectáculos, consultas y ceremonias místicas.',
};


export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroSection data={heroSectionData} />

      <ServiceSection data={serviceSectionData} />

      <CtaSection data={ctaSectionData} />
    </main>
  );
}

