import { Metadata } from 'next';
import { HeroSection } from '@/components/sections/Hero'
import { ServiceSection } from '@/components/sections/Services';
import { CtaSection } from '@/components/sections/CtaSection';
import { HOME_MOCK } from '@/constants/mocks/home';
import { getHomePageData } from '@/services/home-page';


export const metadata: Metadata = {
  title: 'El Mago de Madrid | Artes Místicas y Encantamientos',
  description: 'Descubre los antiguos secretos de la magia en el corazón de Madrid. Espectáculos, consultas y ceremonias místicas.',
};


export default async function HomePage() {
  let data;
  try {
    data = await getHomePageData();
    if (!data) {
      console.warn("Empty res from Strapi. Using Mock");
      data = HOME_MOCK;
    }
  } catch (error) {
    data = HOME_MOCK;
    console.warn(error);
  }
  return (
    <main className="min-h-screen">
      <HeroSection data={data.hero_section} />

      <ServiceSection data={data.services_section} />

      <CtaSection data={data.cta_section} />
    </main>
  );
}

