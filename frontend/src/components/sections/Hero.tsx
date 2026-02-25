import { OldPaperBg } from "../ui/OldPaperBg"
import { HeroSectionData } from '@/types/home';
import { CtaButton } from "../ui/CtaButton";

interface HeroProps {
  data: HeroSectionData;
}

export function HeroSection({ data }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

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
          <div className="h-px w-16 md:w-24 bg-gradient-to-r from-transparent via-amber-800 to-transparent"></div>
          <span className="text-amber-800 text-2xl">✦</span>
          <div className="h-px w-16 md:w-24 bg-gradient-to-r from-transparent via-amber-800 to-transparent"></div>
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
          {data.cta.map((btn, index) => (

            <CtaButton
              key={index}
              data={btn}
              type={index === 0 ? "primary" : "secondary"} />
          ))}
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

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="text-amber-800 text-2xl">↓</div>
      </div>
    </section>
  )
}
