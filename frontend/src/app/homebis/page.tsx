import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'El Mago de Madrid | Servicios Místicos y Entretenimiento',
  description: 'Descubre la magia auténtica en el corazón de Madrid. Espectáculos, consultas y experiencias místicas inolvidables.',
};

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section with Primary CTA */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-950 via-purple-900 to-slate-900">
        {/* Animated background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-pulse"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 text-center">
          <div className="mb-8 inline-block">
            <span className="text-amber-400 text-sm font-semibold tracking-widest uppercase border border-amber-400/30 px-4 py-2 rounded-full bg-amber-400/10 backdrop-blur-sm">
              ✨ Madrid · España
            </span>
          </div>

          {/* Big Title */}
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-amber-200 via-purple-200 to-indigo-200 bg-clip-text text-transparent">
            El Mago de Madrid
          </h1>

          {/* subtitle  */}
          <p className="text-xl md:text-2xl text-purple-100 mb-12 max-w-3xl mx-auto leading-relaxed">
            Donde la tradición milenaria se encuentra con la modernidad.
            Experimenta la verdadera magia en el corazón de la capital española.
          </p>

          {/* Primary CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Link
              href="/contact"
              className="group relative px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-slate-900 font-bold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/50"
            >
              <span className="relative z-10 flex items-center gap-2">
                Reserva tu Consulta
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </Link>

            <Link
              href="/services"
              className="px-8 py-4 bg-transparent text-purple-100 font-semibold rounded-full border-2 border-purple-400/50 backdrop-blur-sm hover:bg-purple-500/20 hover:border-purple-400 transition-all duration-300"
            >
              Ver Servicios
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-8 text-sm text-purple-300">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span>+500 Clientes Satisfechos</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>15 Años de Experiencia</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>Comunidad de Madrid</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Servicios Místicos
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Desde espectáculos inolvidables hasta consultas personales profundas
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-slate-600 mb-6">
                  {service.description}
                </p>
                <Link
                  href={service.link}
                  className="text-purple-600 font-semibold hover:text-purple-700 flex items-center gap-2 group-hover:gap-3 transition-all"
                >
                  Descubrir más
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main CTA Section - The Highlight! */}
      <section className="relative py-24 overflow-hidden bg-gradient-to-br from-purple-900 via-indigo-900 to-slate-900">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <div className="mb-6">
            <span className="text-amber-400 text-6xl">🔮</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            ¿Listo para una Experiencia
            <span className="block bg-gradient-to-r from-amber-400 to-amber-200 bg-clip-text text-transparent">
              Verdaderamente Mágica?
            </span>
          </h2>

          <p className="text-xl text-purple-100 mb-12 max-w-3xl mx-auto">
            Ya sea para un evento corporativo, una celebración privada, o una consulta personal,
            te ofrezco una experiencia única que tus invitados nunca olvidarán.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link
              href="/contact"
              className="group px-10 py-5 bg-gradient-to-r from-amber-500 to-amber-600 text-slate-900 text-lg font-bold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/50"
            >
              <span className="flex items-center gap-3">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Reservar Ahora
              </span>
            </Link>

            <Link
              href="tel:+34123456789"
              className="px-10 py-5 bg-transparent text-white text-lg font-semibold rounded-full border-2 border-white/50 backdrop-blur-sm hover:bg-white/10 hover:border-white transition-all duration-300 flex items-center gap-3"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Llamar Ahora
            </Link>
          </div>

          <p className="mt-8 text-purple-300 text-sm">
            ⚡ Respuesta en menos de 24 horas · Consulta inicial gratuita
          </p>
        </div>
      </section>
    </main>
  );
}

const services = [
  {
    icon: '🎩',
    title: 'Espectáculos',
    description: 'Magia de cerca, mentalismo y ilusionismo para eventos corporativos y celebraciones privadas.',
    link: '/services/shows',
  },
  {
    icon: '🔮',
    title: 'Consultas Místicas',
    description: 'Sesiones personales de tarot, lectura energética y orientación espiritual en Madrid.',
    link: '/services/consultations',
  },
  {
    icon: '✨',
    title: 'Talleres',
    description: 'Aprende los secretos de la magia y el desarrollo personal en nuestros exclusivos talleres.',
    link: '/services/workshops',
  },
];
