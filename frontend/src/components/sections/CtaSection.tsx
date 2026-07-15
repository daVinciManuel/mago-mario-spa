// src/components/sections/CtaSection.tsx
import { OldPaperBg } from '../ui/OldPaperBg';
import { CtaButton } from "../ui/CtaButton"
import { CtaSectionData } from "@/types/home"
interface CtaProps {
  data: CtaSectionData;
}
export function CtaSection({ data }: CtaProps) {
  return (
    <section
      aria-labelledby="cta-heading"
      className="relative py-24 md:py-32 bg-[#1a1208] overflow-hidden"
    >
      <OldPaperBg />
      <div
        aria-hidden="true"
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background: `
            linear-gradient(
              105deg,
              rgba(15, 8, 2, 0.82) 0%,
              rgba(20, 10, 3, 0.75) 38%,
              rgba(25, 12, 4, 0.45) 60%,
              rgba(15, 8, 2, 0.65) 100%
            )
          `,
        }}
      />
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Outer frame: gilt-toned gradient border, sharp-ish corners like a document, not a UI card */}
        <div className="relative p-[5px] rounded-sm bg-gradient-to-br from-amber-700/50 via-amber-500/25 to-amber-900/50 shadow-2xl shadow-black/50">
          <div className="relative bg-[#f8f1e3] rounded-[2px] p-12 md:p-16 ring-1 ring-inset ring-amber-950/20">
            <OldPaperBg aria-hidden="true" className="absolute inset-0 z-0 opacity-90 rounded-[2px]" />
            <div
              aria-hidden="true"
              className="absolute inset-3 md:inset-4 border border-amber-800/25 pointer-events-none z-[1]"
            />
            <div className="relative z-10 text-center">
              <p
                className="font-cinzel uppercase tracking-[4px] text-amber-950 text-sm mb-3"
                style={{ textShadow: '0 0 4px rgba(248,241,227,0.95), 0 0 9px rgba(248,241,227,0.7)' }}
              >
                {data.subtitle}
              </p>
              <h2
                id="cta-heading"
                className="font-cinzel text-4xl md:text-5xl leading-none text-amber-950 mb-8"
                style={{ textShadow: '0 0 6px rgba(248,241,227,0.6)' }}
              >
                {data.title1}<br />{data.title2}
              </h2>
              <p
                className="max-w-2xl mx-auto text-amber-950/90 text-lg leading-relaxed mb-10"
                style={{ textShadow: '0 0 5px rgba(248,241,227,0.75)' }}
              >
                {data.description1} {data.description2}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                {data.cta.map((btn, i) => (
                  <CtaButton key={i} data={btn} type={i === 0 ? "primary" : "secondary"} />
                ))}
              </div>
              {data.microscopy && (
                <p
                  className="mt-10 text-amber-950 text-sm font-crimson"
                  style={{ textShadow: '0 0 4px rgba(248,241,227,0.95), 0 0 9px rgba(248,241,227,0.7)' }}
                >
                  {data.microscopy.text}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
