import Link from "next/link"
import { OldPaperBg } from "../ui/OldPaperBg";
import { ServiceSectionData } from "./Services.types";
import { CornersDecoration } from "../ui/CornersDecoration";

interface ServiceProps {
  data: ServiceSectionData
}
export const ServiceSection = ({ data }: ServiceProps) =>
(
  <section className="relative py-24">
    {/* Textura de fondo para servicios */}
    <OldPaperBg></OldPaperBg>

    {/* Overlay muy sutil para diferenciar secciones */}
    <div className="absolute inset-0 bg-amber-900/5"></div>

    <div className="relative max-w-7xl mx-auto px-6">
      {/* Section title with medieval ornaments */}
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

      <div className="grid md:grid-cols-3 gap-8">
        {data.services.map((service, index) => (
          <div
            key={index}
            className="group relative bg-amber-50/70 backdrop-blur-sm rounded-none p-8 border-2 border-amber-800/30 hover:border-amber-800/60 transition-all duration-500 hover:shadow-2xl hover:shadow-amber-900/40"
          >
            {/* Medieval corner decorations */}
            <CornersDecoration size='small' />

            <div className="text-5xl mb-6 text-center">{service.icon}</div>
            <h3 className="text-2xl font-bold text-amber-950 mb-4 text-center font-cinzel" style={{ fontVariant: 'small-caps' }}>
              {service.title}
            </h3>
            <p className="text-amber-900/80 mb-6 text-center font-crimson leading-relaxed">
              {service.description}
            </p>
            <div className="text-center">
              <Link
                href={service.link}
                className="inline-flex items-center gap-2 text-amber-800 font-semibold hover:text-amber-900 transition-colors uppercase text-sm tracking-wider font-cinzel"
              >
                <span>Explorar</span>
                <span className="group-hover:translate-x-1 transition-transform text-2xl -translate-y-1 ">→</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
)
