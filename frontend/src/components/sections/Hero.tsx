import Image from "next/image";
import { OldPaperBg } from "../ui/OldPaperBg";
import { HeroSectionData } from "@/types/home";
import { CtaButton } from "../ui/CtaButton";

interface HeroProps {
  data: HeroSectionData;
}

export function HeroSection({ data }: HeroProps) {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <OldPaperBg aria-hidden="true" />

      {/* ── Deep atmospheric overlay — ensures text always readable ── */}
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

      {/* ── Secondary vignette — edge darkness ── */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 80% at 50% 50%, transparent 30%, rgba(10,5,2,0.55) 100%)",
        }}
      />

      {/* ── Manuscript ruled lines ── */}
      <div aria-hidden="true" className="absolute top-2 left-0 right-0 z-[2] h-px bg-amber-600/20 pointer-events-none" />
      <div aria-hidden="true" className="absolute bottom-10 left-0 right-0 z-[2] h-px bg-amber-600/20 pointer-events-none" />

      {/* ── Vertical ornament lines, flanking the content ── */}
      <div aria-hidden="true" className="absolute left-6 top-20 bottom-20 z-[2] w-px bg-gradient-to-b from-transparent via-amber-700/30 to-transparent pointer-events-none hidden lg:block" />
      <div aria-hidden="true" className="absolute right-6 top-20 bottom-20 z-[2] w-px bg-gradient-to-b from-transparent via-amber-700/30 to-transparent pointer-events-none hidden lg:block" />

      {/* ── Main content grid ── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-8 md:px-16 py-28 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-0 lg:gap-16 items-center">

          {/* ── LEFT: Text content ── */}
          <div>
            {/* Top banner */}
            <div className="absolute top-6 sm:top-8 left-1/2 -translate-x-1/2 z-20">
              <p className="font-cinzel text-xs sm:text-sm tracking-[0.35em] uppercase text-amber-200/75 border-t border-b border-amber-700/50 text-center sm:px-10 py-2">
                MAGO · MÚSICO
              </p>
            </div>

            {/* Name block */}
            <div className="mb-8">
              <p
                className="font-crimson italic text-amber-400/90 text-2xl md:text-3xl mb-1 md:ml-1"
                style={{ letterSpacing: "0.04em" }}
              >
                {data.pretitle}
              </p>

              <h1
                id="hero-heading"
                className="font-cinzel font-black leading-none select-none"
                style={{
                  fontSize: "clamp(3.2rem, 8.5vw, 7.5rem)",
                  letterSpacing: "-0.01em",
                  color: "#f5e6c8",
                  textShadow: "0 2px 30px rgba(180,100,20,0.35), 0 0 60px rgba(180,100,20,0.15)",
                }}
              >
                {data.title}
              </h1>
            </div>

            {/* Divider — purely decorative */}
            <div aria-hidden="true" className="flex items-center gap-3 mb-10 md:mb-12">
              <div className="h-px w-10 bg-amber-600/70" />
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                focusable="false"
                className="text-amber-500 flex-shrink-0"
              >
                <path
                  d="M7 0L8.5 5.5L14 7L8.5 8.5L7 14L5.5 8.5L0 7L5.5 5.5L7 0Z"
                  fill="currentColor"
                  opacity="0.9"
                />
              </svg>
              <div className="h-px flex-1 max-w-xs bg-amber-700/40" />
            </div>

            {/* Subtitle */}
            <p
              className="font-crimson leading-relaxed mb-3"
              style={{
                fontSize: "clamp(1.15rem, 2.2vw, 1.4rem)",
                maxWidth: "38ch",
                color: "#e8d5b0",
              }}
            >
              {data.subtitle}
            </p>
            <p
              className="font-crimson italic mb-12 md:mb-14"
              style={{
                fontSize: "clamp(1rem, 1.8vw, 1.2rem)",
                maxWidth: "42ch",
                color: "#dcb98a", // was #c9a96e99 (~2.9:1) — lightened + full opacity, now ~10.7:1
              }}
            >
              {data.subtitle2}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 items-start mb-14 md:mb-16 select-none">
              {data.cta.map((btn, index) => (
                <CtaButton
                  key={index}
                  data={btn}
                  type={index === 0 ? "primary" : "secondary"}
                />
              ))}
            </div>

            {/* Trust seals */}
            <div className="flex flex-wrap gap-x-8 gap-y-3">
              {data.trustSeals.map((obj, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 font-crimson text-sm"
                  style={{ color: "#dcb98a" }} // was #b8956a99 (~2.6:1), now ~10.7:1
                >
                  <span aria-hidden="true" className="text-amber-600/70 text-[10px]">◆</span>
                  <span>{obj.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT: Logo sigil — fully decorative, hide the whole block ── */}
          <div aria-hidden="true" className="hidden lg:flex flex-col items-center justify-center select-none">
            <div
              className="relative flex items-center justify-center"
              style={{
                filter: "drop-shadow(0 0 40px rgba(180,110,30,0.25))",
              }}
            >
              <div
                className="absolute rounded-full border border-amber-700/25"
                style={{ width: 320, height: 320 }}
              />
              <div
                className="absolute rounded-full border border-amber-600/15"
                style={{ width: 360, height: 360 }}
              />
              <div
                className="absolute rounded-full pointer-events-none"
                style={{
                  width: 280,
                  height: 280,
                  background:
                    "radial-gradient(circle, rgba(180,110,30,0.12) 0%, transparent 70%)",
                }}
              />

              {/* THE LOGO IS INVISIBLE — separate bug worth a look, unrelated to a11y */}
              <div
                className="relative invisible"
                style={{
                  width: 220,
                  height: 220,
                  filter:
                    "invert(1) sepia(1) saturate(1.4) hue-rotate(5deg) brightness(0.85)",
                  opacity: 0.88,
                }}
              >
                <Image
                  src="/marioLogo.jpg"
                  alt=""
                  fill
                  style={{ objectFit: "contain" }}
                  priority
                />
              </div>
            </div>

            <p
              className="font-crimson italic mt-3 tracking-[0.25em] text-xs uppercase"
              style={{ color: "#b8874f", letterSpacing: "0.3em" }} // was #9a7040 (~4.5:1, no margin), now ~6.3:1
            >
              Sigillum · MMXXVI
            </p>
          </div>

        </div>
      </div>

    </section>
  );
}
