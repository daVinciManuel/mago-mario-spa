import Image from "next/image"
import Link from "next/link"
import { ServiceSectionData } from "@/types/home";

interface ServiceProps {
  data: ServiceSectionData
}

export const ServiceSection = ({ data }: ServiceProps) => (
  <section id="servicios" className="relative">

    {/* Section header */}
    <div className="relative bg-amber-50/90 text-center py-14 px-6 border-b border-amber-800/20">
      <div className="flex items-center justify-center gap-6 mb-3">
        <div className="h-px flex-1 max-w-24 bg-amber-800/40"></div>
        <h2
          className="text-3xl md:text-5xl font-bold text-amber-950 font-cinzel tracking-wide"
          style={{ fontVariant: 'small-caps' }}
        >
          {data.title}
        </h2>
        <div className="h-px flex-1 max-w-24 bg-amber-800/40"></div>
      </div>
      <p className="text-lg text-amber-900/70 font-crimson italic">
        {data.subtitle}
      </p>
    </div>

    {/* Cards — full width, stacked, one per screen */}
    <div className="flex flex-col">
      {data.services.map((service, index) => (
        <div
          key={index}
          className="group relative h-[80vh] overflow-hidden"
        >
          {/* Background photo */}
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            style={{ objectPosition: service.objectPosition ?? 'center center' }}
            sizes="100vw"
          />

          {/* Dark overlay — stronger at bottom where text lives */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />

          {/* Content pinned to bottom */}
          <div className="absolute inset-0 flex flex-col justify-end px-8 pb-12 md:px-16 md:pb-16 lg:px-24">

            {/* Thin rule */}
            <div className="w-10 h-px bg-amber-400/80 mb-5"></div>

            <h3
              className="font-cinzel font-bold text-amber-50 mb-4 leading-tight drop-shadow-lg"
              style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontVariant: 'small-caps' }}
            >
              {service.title}
            </h3>

            <p
              className="font-crimson text-amber-100/90 leading-relaxed max-w-lg mb-8 drop-shadow"
              style={{ fontSize: 'clamp(1rem, 2vw, 1.2rem)' }}
            >
              {service.description}
            </p>

            <Link
              href={service.link}
              className="self-start inline-flex items-center gap-3 font-cinzel text-xs uppercase tracking-widest text-amber-50 border border-amber-400/60 px-6 py-3 hover:bg-amber-400/20 hover:border-amber-300 transition-all duration-300"
            >
              <span>Consultar</span>
              <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
            </Link>
          </div>
        </div>
      ))}
    </div>

  </section>
)
