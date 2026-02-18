import { OldPaperBg } from "../ui/OldPaperBg"
import { CornersDecoration } from "../ui/CornersDecoration"
import { CtaSectionData } from "./CtaSection.types"
import { CtaButton } from "../ui/CtaButton"
interface CtaProps {
  data: CtaSectionData;
}
export const CtaSection = ({ data }: CtaProps) =>
(
  <section className="relative py-32 overflow-hidden">
    {/* Textura de pergamino en CTA */}
    <OldPaperBg></OldPaperBg>

    {/* Overlay para diferenciación sutil */}
    <div className="absolute inset-0 bg-gradient-to-b from-amber-900/10 via-transparent to-amber-900/10"></div>

    <div className="relative z-10 max-w-5xl mx-auto px-6">
      {/* Scroll-like container */}
      <div className="relative bg-amber-100/60 backdrop-blur-md border-4 border-amber-800/50 shadow-2xl p-12 md:p-16">
        {/* Decorative corners */}
        <CornersDecoration size='big' />

        <div className="text-center">
          {/* Medieval icon */}
          <div className="mb-8 inline-block">
            <div className="relative w-24 h-24 mx-auto">
              <div className="absolute inset-0 rounded-full bg-gradient-to-b from-amber-700 to-amber-900"></div>
              <div className="absolute inset-2 rounded-full bg-amber-100 flex items-center justify-center">
                <span className="text-4xl">{data.icon}</span>
              </div>
            </div>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-amber-950 mb-6 font-cinzel">
            <span className="block text-2xl md:text-3xl text-amber-800 mb-3 tracking-[0.2em]" style={{ fontVariant: 'small-caps' }}>
              {data.subtitle}
            </span>
            <span className="block">{data.title1}</span>
            <span className="block text-amber-900">
              {data.title2}
            </span>
          </h2>

          {/* Medieval decorative divider */}
          <div className="flex items-center justify-center gap-4 my-8">
            <div className="h-px w-16 md:w-24 bg-gradient-to-r from-transparent via-amber-800 to-transparent"></div>
            <span className="text-amber-800 md:text-2xl">⚜️</span>
            <div className="h-px w-16 md:w-24 bg-gradient-to-r from-transparent via-amber-800 to-transparent"></div>
          </div>

          <p className="text-xl md:text-2xl text-amber-950/90 mb-12 max-w-3xl mx-auto font-crimson leading-relaxed">
            {data.description1}
            <span className="block mt-4 italic text-amber-900/90">
              {data.description2}
            </span>
          </p>

          {/* Medieval action buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
            <CtaButton data={data.cta[0]} type="primary" />
            <CtaButton data={data.cta[1]} type="secondary" />
          </div>

          {/* Medieval seal of guarantee */}
          <div className="mt-12 pt-8 border-t border-amber-800/40">
            <p className="text-amber-900/80 text-sm font-crimson italic flex items-center justify-center gap-3">
              <span>{data.microscopy.emoji}</span>
              <span>{data.microscopy.text}</span>
              <span>{data.microscopy.emoji}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
)
