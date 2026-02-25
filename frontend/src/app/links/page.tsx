import { Metadata } from 'next';
import Image from 'next/image';
import { OldPaperBg } from "@/components/ui/OldPaperBg";
import { LINKS_PAGE_MOCK } from '@/constants/mocks/links';
import { getLinksPageData } from '@/services/links-page';
import { LinksSection } from '@/components/sections/LinksSection';

export const metadata: Metadata = {
  title: 'Mario Wenceslao | Enlaces y Redes',
  description: 'Conecta con el Mago de Madrid en sus redes sociales, canal de YouTube y proyectos de Esperanto.',
};

export default async function LinksPage() {
  let data;
  try {
    data = await getLinksPageData();
    if (!data) data = LINKS_PAGE_MOCK;
  } catch (error) {
    data = LINKS_PAGE_MOCK;
    console.warn(error)
  }

  return (
    <main className="relative min-h-screen flex flex-col items-center py-16 px-6 overflow-hidden">
      <OldPaperBg />

      <div className="relative z-10 w-full max-w-md flex flex-col items-center">
        <div className="relative w-28 h-28 mb-6 rounded-full border-4 border-amber-900/20 p-1 bg-amber-50 shadow-2xl">
          <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-amber-800">
            <Image
              src={data.avatarUrl || "/image/icon/mago.png"}
              alt={data.title}
              fill
              className="object-cover"
            />
          </div>
        </div>

        <h1 className="font-cinzel text-3xl text-amber-950 font-bold mb-2 text-center tracking-tight">
          {data.title}
        </h1>
        <p className="font-crimson text-amber-900/80 italic mb-10 text-center text-lg">
          {data.description}
        </p>

        <div className="w-full flex flex-col gap-4">
          <LinksSection links={data.links}></LinksSection>
        </div>

        {/* Footer con el toque de profesor de esperanto */}
        <footer className="mt-16 flex flex-col items-center gap-2 opacity-40">
          <div className="h-px w-12 bg-amber-900"></div>
          <p className="font-crimson text-xs text-amber-950 tracking-[0.2em] uppercase">
            Madrido · MMXXVI
          </p>
        </footer>
      </div>
    </main>
  );
}
