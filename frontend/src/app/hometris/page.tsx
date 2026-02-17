import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { OldPaperBg } from '@/components/ui/OldPaperBg';

export const metadata: Metadata = {
  title: 'El Mago de Madrid | Artes Místicas y Encantamientos',
  description: 'Descubre los antiguos secretos de la magia en el corazón de Madrid. Espectáculos, consultas y ceremonias místicas.',
};

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section - Medieval Style */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

        {/* SOLO Textura de papel viejo como fondo */}
        <OldPaperBg></OldPaperBg>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 text-center">
          {/* Medieval ornament top */}
          <div className="mb-6">
            <div className="inline-flex items-center gap-4">
              <span className="text-amber-800 text-3xl">⚜️</span>
              <span className="text-amber-900/80 text-sm font-crimson tracking-[0.3em] uppercase border-t border-b border-amber-800/50 px-6 py-2 bg-amber-50/30 backdrop-blur-sm">
                Madrid · Anno Domini MMXXVI
              </span>
              <span className="text-amber-800 text-3xl">⚜️</span>
            </div>
          </div>

          {/* Main title with medieval font style */}
          <h1 className="text-5xl md:text-8xl font-bold mb-8 text-amber-950 drop-shadow-lg font-cinzel tracking-wider">
            {/* pre titulo  */}
            <span className="block text-5xl md:text-6xl text-amber-800 mb-4" style={{ fontVariant: 'small-caps' }}>
              El Gran
            </span>
            {/* titulo  */}
            <span className="block">
              Mario Wenceslao
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
            Guardián de los antiguos secretos arcanos y maestro de las artes místicas.
            {/* subtitulo 2 */}
            <span className="block mt-2 text-lg text-amber-900/80 italic">
              &quot;Donde la sabiduría milenaria cobra vida en la modernidad&quot;
            </span>
          </p>

          {/* Medieval-style CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 pointer-events-none">
            <Link
              href="/contact"
              className="group relative px-10 py-5 bg-gradient-to-b from-amber-700 via-amber-800 to-amber-900 text-amber-50 font-bold rounded-sm overflow-hidden transition-all duration-300 hover:scale-105 shadow-2xl shadow-amber-900/50 border-2 border-amber-600/50 font-cinzel tracking-widest"
            >
              {/* contact btn text */}
              <span className="relative z-10 flex items-center gap-3 uppercase text-sm">
                {/* contact btn emoji 1 */}
                <span className="text-lg">🗡️</span>
                Reservar evento
                {/* contact btn emoji 2 */}
                <span className="text-lg">🗡️</span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-t from-amber-600/0 via-amber-500/20 to-amber-400/40 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </Link>

            <Link
              href="/services"
              className="px-10 py-5 bg-amber-100/80 text-amber-900 font-semibold rounded-sm border-2 border-amber-800/50 backdrop-blur-sm hover:bg-amber-50 hover:border-amber-800 transition-all duration-300 shadow-xl uppercase text-sm font-cinzel tracking-widest"
            >
              {/* services btn text */}
              <span className='flex items-center gap-2'>
                {/* services btn emoji 1 */}
                <span className="text-lg"></span>
                consultar servicios
                {/* services btn emoji 2 */}
                <span className="text-lg"></span>
              </span>
            </Link>
          </div>

          {/* Medieval trust seals */}
          <div className="flex flex-wrap justify-center gap-8 text-sm text-amber-900 font-crimson">
            <div className="flex items-center gap-2 border border-amber-800/40 px-4 py-2 rounded-sm bg-amber-50/40 backdrop-blur-sm">
              <span className="text-amber-800 text-xl">⚔️</span>
              <span>+100 Espect&aacute;culos</span>
            </div>
            <div className="flex items-center gap-2 border border-amber-800/40 px-4 py-2 rounded-sm bg-amber-50/40 backdrop-blur-sm">
              <span className="text-amber-800 text-xl">📜</span>
              <span>20 Años de Magia</span>
            </div>
            <div className="flex items-center gap-2 border border-amber-800/40 px-4 py-2 rounded-sm bg-amber-50/40 backdrop-blur-sm">
              <span className="text-amber-800 text-xl">🏰</span>
              <span>Comunidad de Madrid</span>
            </div>
          </div>
        </div>

        {/* Scroll indicator - Medieval style */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="text-amber-800 text-2xl">↓</div>
          <div className="text-amber-900/70 text-xs font-crimson uppercase tracking-widest mt-2">Descender</div>
        </div>
      </section>

      {/* Services - Medieval Scroll Style */}
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
                Artes & Servicios
              </h2>
              <span className="text-amber-800 text-3xl">✦</span>
            </div>
            <p className="text-xl text-amber-900/80 max-w-2xl mx-auto font-crimson italic">
              Del Grimorio de Conocimientos Ancestrales
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative bg-amber-50/70 backdrop-blur-sm rounded-none p-8 border-2 border-amber-800/30 hover:border-amber-800/60 transition-all duration-500 hover:shadow-2xl hover:shadow-amber-900/40"
              >
                {/* Medieval corner decorations */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-amber-700/70"></div>
                <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-amber-700/70"></div>
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-amber-700/70"></div>
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-amber-700/70"></div>

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
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main CTA Section - Parchment Scroll Style */}
      <section className="relative py-32 overflow-hidden">
        {/* Textura de pergamino en CTA */}
        <OldPaperBg></OldPaperBg>

        {/* Overlay para diferenciación sutil */}
        <div className="absolute inset-0 bg-gradient-to-b from-amber-900/10 via-transparent to-amber-900/10"></div>

        <div className="relative z-10 max-w-5xl mx-auto px-6">
          {/* Scroll-like container */}
          <div className="relative bg-amber-100/60 backdrop-blur-md border-4 border-amber-800/50 shadow-2xl p-12 md:p-16">
            {/* Decorative corners */}
            <div className="absolute -top-1 -left-1 w-8 h-8 border-t-4 border-l-4 border-amber-700"></div>
            <div className="absolute -top-1 -right-1 w-8 h-8 border-t-4 border-r-4 border-amber-700"></div>
            <div className="absolute -bottom-1 -left-1 w-8 h-8 border-b-4 border-l-4 border-amber-700"></div>
            <div className="absolute -bottom-1 -right-1 w-8 h-8 border-b-4 border-r-4 border-amber-700"></div>

            <div className="text-center">
              {/* Medieval seal */}
              <div className="mb-8 inline-block">
                <div className="relative w-24 h-24 mx-auto">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-b from-amber-700 to-amber-900"></div>
                  <div className="absolute inset-2 rounded-full bg-amber-100 flex items-center justify-center">
                    <span className="text-4xl">🔮</span>
                  </div>
                </div>
              </div>

              <h2 className="text-4xl md:text-6xl font-bold text-amber-950 mb-6 font-cinzel">
                <span className="block text-2xl md:text-3xl text-amber-800 mb-3 tracking-[0.2em]" style={{ fontVariant: 'small-caps' }}>
                  Convocatoria Real
                </span>
                <span className="block">¿Quieres Magia</span>
                <span className="block text-amber-900">
                  para tu d&iacute;a especial?
                </span>
              </h2>

              {/* Medieval decorative divider */}
              <div className="flex items-center justify-center gap-4 my-8">
                <div className="h-px w-16 bg-gradient-to-r from-transparent via-amber-800 to-transparent"></div>
                <span className="text-amber-800">⚜️</span>
                <div className="h-px w-16 bg-gradient-to-r from-transparent via-amber-800 to-transparent"></div>
              </div>

              <p className="text-xl md:text-2xl text-amber-950/90 mb-12 max-w-3xl mx-auto font-crimson leading-relaxed">
                Sea para ceremonias corporativas, celebraciones privadas, o grupos de turistas,
                <span className="block mt-4 italic text-amber-900/90">
                  te aguarda una experiencia que quedará grabada en los anales del tiempo.
                </span>
              </p>

              {/* Medieval action buttons */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
                <Link
                  href="/contact"
                  className="group relative px-12 py-6 bg-gradient-to-b from-amber-700 via-amber-800 to-amber-900 text-amber-50 text-lg font-bold rounded-sm overflow-hidden transition-all duration-300 hover:scale-105 shadow-2xl shadow-amber-900/50 border-2 border-amber-600 font-cinzel tracking-[0.15em]"
                >
                  <span className="relative z-10 flex items-center gap-4 uppercase">
                    <span>📜</span>
                    Consulta
                    <span>📜</span>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-t from-transparent via-amber-500/20 to-amber-400/40 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </Link>

                <Link
                  href="tel:+34123456789"
                  className="px-12 py-6 bg-amber-100/80 text-amber-900 text-lg font-bold rounded-sm border-2 border-amber-800/50 backdrop-blur-sm hover:bg-amber-50 hover:border-amber-800 transition-all duration-300 uppercase shadow-xl flex items-center gap-4 font-cinzel tracking-[0.15em]"
                >
                  <span>🕯️</span>
                  Inv&oacute;cale
                  <span>🕯️</span>
                </Link>
              </div>

              {/* Medieval seal of guarantee */}
              <div className="mt-12 pt-8 border-t border-amber-800/40">
                <p className="text-amber-900/80 text-sm font-crimson italic flex items-center justify-center gap-3">
                  <span>⚔️</span>
                  <span>Respuesta en menos de XXIV horas · Primera consulta sin coste</span>
                  <span>⚔️</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Medieval footer decoration */}
      <div className="relative h-2">
        <div className="absolute inset-0">
          <Image
            src="/textures/bgOldPaper.webp"
            alt=""
            fill
            quality={60}
            style={{
              objectFit: 'cover',
            }}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-800/50 to-transparent"></div>
      </div>
    </main>
  );
}

const services = [
  {
    icon: '⚔️',
    title: 'Cuentacuentos',
    description: 'Descubre mundos mágicos. Historias que cautivan a niños y adultos. ¡Magia para toda la familia!',
    link: '/services/cuentacuentos',
  },
  {
    icon: '🔮',
    title: 'Magia de salón',
    description: 'Ilusiones que desafían la realidad. Cartas, cuerdas y asombro en cada truco. ¡Magia en vivo increíble!',
    link: '/services/magia',
  },
  {
    icon: '📜',
    title: '12 Encantamientos',
    description: '12 melodías que acarician el alma. Ritmos suaves con esencia bossa nova. Relájate y déjate envolver.',
    link: '/services/workshops',
  },
];
