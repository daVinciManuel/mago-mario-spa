import Link from "next/link"
import { OldPaperBg } from "../ui/OldPaperBg";
import { ServiceSectionData } from "@/types/home";
import { CornersDecoration } from "../ui/CornersDecoration";

interface ServiceProps {
  data: ServiceSectionData
}

export const ServiceSection = ({ data }: ServiceProps) => (
  <section id="servicios" className="relative py-24">
    <OldPaperBg />

    <div className="absolute inset-0 bg-amber-900/5"></div>

    <div className="relative max-w-7xl mx-auto px-6">
      {/* Section header */}
      <div className="text-center mb-16">
        <div className="flex items-center justify-center gap-4 mb-6">
          <span className="text-amber-800 text-3xl">✦</span>
          <h2 className="text-4xl md:text-6xl font-bold text-amber-950 font-cinzel" style={{ fontVariant: 'small-caps' }}>
            {data.title}
          </h2>
          <span className="text-amber-800 text-3xl">✦</span>
        </div>
        <p className="text-xl text-amber-900/80 max-w-2xl mx-auto font-crimson italic">
          {data.subtitle}
        </p>
      </div>

      {/* 4-column grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {data.services.map((service, index) => (
          <div
            key={index}
            className="group relative bg-amber-50/70 backdrop-blur-sm p-8 border-2 border-amber-800/30 hover:border-amber-800/60 transition-all duration-500 hover:shadow-2xl hover:shadow-amber-900/40 flex flex-col"
          >
            <CornersDecoration size='small' />

            {/* Icon */}
            <div className="text-5xl mb-5 text-center">{service.icon}</div>

            {/* Title */}
            <h3 className="text-xl font-bold text-amber-950 mb-4 text-center font-cinzel" style={{ fontVariant: 'small-caps' }}>
              {service.title}
            </h3>

            {/* Divider */}
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="h-px w-8 bg-amber-800/40"></div>
              <span className="text-amber-800/60 text-xs">✦</span>
              <div className="h-px w-8 bg-amber-800/40"></div>
            </div>

            {/* Description */}
            <p className="text-amber-900/80 text-center font-crimson leading-relaxed text-sm flex-grow">
              {service.description}
            </p>

            {/* CTA */}
            <div className="text-center mt-6">
              <Link
                href={service.link}
                className="inline-flex items-center gap-2 text-amber-800 font-semibold hover:text-amber-900 transition-colors uppercase text-xs tracking-widest font-cinzel border border-amber-800/40 px-4 py-2 hover:border-amber-800 hover:bg-amber-800/5"
              >
                <span>Consultar</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
)
