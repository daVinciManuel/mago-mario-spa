import Link from "next/link"
import { OldPaperBg } from "../ui/OldPaperBg"
import { HeroSectionData } from "./Hero.types";

interface HeroProps {
  data: HeroSectionData;
}

export const HeroSection = ({ data }: HeroProps) =>
(
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

    {/* SOLO Textura de papel viejo como fondo */}
    <OldPaperBg></OldPaperBg>

    {/* Content */}
    <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 text-center">
      {/* Medieval ornament top */}
      <div className="mb-6 select-none">
        <div className="inline-flex items-center gap-4">
          <span className="text-amber-800 text-3xl">⚜️</span>
          <span className="text-amber-900/80 text-sm font-crimson tracking-[0.3em] uppercase border-t border-b border-amber-800/50 px-6 py-2 bg-amber-50/30 backdrop-blur-sm">
            Madrid · Anno Domini MMXXVI
          </span>
          <span className="text-amber-800 text-3xl">⚜️</span>
        </div>
      </div>

      {/* Main title with medieval font style */}
      <h1 className="text-5xl md:text-8xl font-bold mb-8 text-amber-950 drop-shadow-lg font-cinzel tracking-wider select-none">
        {/* pre title  */}
        <span className="block text-5xl md:text-6xl text-amber-800 mb-4" style={{ fontVariant: 'small-caps' }}>
          {data.pretitle}
        </span>
        {/* title  */}
        <span className="block">
          {data.title}
        </span>
      </h1>

      {/* Medieval decorative line */}
      <div className="flex items-center justify-center gap-4 mb-8">
        <div className="h-px w-24 bg-gradient-to-r from-transparent via-amber-800 to-transparent"></div>
        <span className="text-amber-800 text-2xl">✦</span>
        <div className="h-px w-24 bg-gradient-to-r from-transparent via-amber-800 to-transparent"></div>
      </div>

      {/* subtitulo 1 */}
      <p className="text-xl md:text-2xl text-amber-950/90 mb-12 max-w-3xl mx-auto leading-relaxed font-crimson">
        {data.subtitle}
        {/* subtitulo 2 */}
        <span className="block mt-2 text-lg text-amber-900/80 italic">
          {data.subtitle2}
        </span>
      </p>

      {/* Medieval-style CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 select-none">
        <Link
          href={data.cta[0].link}
          className="group relative px-10 py-5 bg-gradient-to-b from-amber-700 via-amber-800 to-amber-900 text-amber-50 font-bold rounded-sm overflow-hidden transition-all duration-300 hover:scale-105 shadow-2xl shadow-amber-900/50 border-2 border-amber-600/50 font-cinzel tracking-widest"
        >
          <span className="relative z-10 flex items-center gap-3 uppercase text-sm">
            <span className="text-lg">{data.cta[0].emoji}</span>
            {data.cta[0].text}
            <span className="text-lg">{data.cta[0].emoji}</span>
          </span>
          <div className="absolute inset-0 bg-gradient-to-t from-amber-600/0 via-amber-500/20 to-amber-400/40 opacity-0 group-hover:opacity-100 transition-opacity"></div>
        </Link>

        <Link
          href={data.cta[1].link}
          className="px-10 py-5 bg-amber-100/80 text-amber-900 font-semibold rounded-sm border-2 border-amber-800/50 backdrop-blur-sm hover:bg-amber-50 hover:border-amber-800 transition-all duration-300 shadow-xl uppercase text-sm font-cinzel tracking-widest"
        >
          <span className='flex items-center gap-2'>
            <span className="text-lg">{data.cta[1].emoji}</span>
            {data.cta[1].text}
            <span className="text-lg">{data.cta[1].emoji}</span>
          </span>
        </Link>
      </div>

      {/* Medieval trust seals */}

      <div className="flex flex-wrap justify-center gap-8 text-sm text-amber-900 font-crimson select-none">
        {data.trustSeals.map((obj, index) => (
          <div key={index} className="flex items-center gap-2 border border-amber-800/40 px-4 py-2 rounded-sm bg-amber-50/40 backdrop-blur-sm">
            <span className="text-amber-800 text-xl">{obj.emoji}</span>
            <span>{obj.text}</span>
          </div>
        ))
        }
      </div>

    </div>

    {/* Scroll indicator - Medieval style */}
    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
      <div className="text-amber-800 text-2xl">↓</div>
    </div>
  </section>
)
