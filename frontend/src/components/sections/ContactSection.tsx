'use client'

import Link from 'next/link'
import { useForm, ValidationError } from '@formspree/react'
import { OldPaperBg } from '../ui/OldPaperBg'
import { CornersDecoration } from '../ui/CornersDecoration'
import { ContactPageData } from '@/types/contact'

interface ContactProps {
  data: ContactPageData;
}

export const ContactSection = ({ data }: ContactProps) => {
  const [state, handleSubmit] = useForm('meedonda')
  // data
  const SERVICES = data.services;
  const TRUSTS_SEALS = data.trustSeals;

  return (
    <section id="contacto" className="relative pt-8 pb-24 overflow-hidden">
      <OldPaperBg />
      <div className="absolute inset-0 bg-gradient-to-b from-amber-900/10 via-transparent to-amber-900/10"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6">

        {/* Back to home */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-3 bg-amber-900 hover:bg-amber-800 active:bg-amber-950 text-amber-50 font-cinzel font-bold text-xs uppercase tracking-widest px-5 py-3 transition-colors duration-200 shadow-md"
          >
            <span className="text-base leading-none">←</span>
            <span>Volver al inicio</span>
          </Link>
        </div>

        {/* Section header */}
        <div className="text-center mb-10 md:mb-16">
          <div className="inline-flex items-center gap-4 mb-6">
            <span className="text-amber-800 text-3xl">⚜️</span>
            <span className="text-amber-900/80 text-sm font-crimson tracking-[0.3em] uppercase border-t border-b border-amber-800/50 px-6 py-2 bg-amber-50/30 backdrop-blur-sm">
              Convocatoria Real
            </span>
            <span className="text-amber-800 text-3xl">⚜️</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-amber-950 font-cinzel mb-6" style={{ fontVariant: 'small-caps' }}>
            Contacta al Mago
          </h1>

          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-16 md:w-24 bg-gradient-to-r from-transparent via-amber-800 to-transparent"></div>
            <span className="text-amber-800 text-xl">✦</span>
            <div className="h-px w-16 md:w-24 bg-gradient-to-r from-transparent via-amber-800 to-transparent"></div>
          </div>

          <p className="text-xl text-amber-900/80 max-w-2xl mx-auto font-crimson italic">
            Describe tu evento y recibirás respuesta en menos de 24 horas.
            La primera consulta es siempre sin coste.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8 items-start">

          {/* Contact info sidebar — shown below form on mobile, left on desktop */}
          <div className="space-y-3 md:space-y-4 order-2 md:order-1">
            {TRUSTS_SEALS.map((item, i) => (
              <div key={i} className="relative bg-amber-50/60 border border-amber-800/30 p-5">
                <div className="text-2xl mb-2">{item.emoji}</div>
                <p className="font-cinzel text-xs font-bold text-amber-950 mb-1 uppercase tracking-wider">{item.title}</p>
                {item.link ? (
                  <a href={item.link} className="font-crimson text-amber-800 hover:text-amber-900 text-sm underline underline-offset-2">
                    {item.text}
                  </a>
                ) : (
                  <p className="font-crimson text-amber-900/80 text-sm leading-relaxed">{item.text}</p>
                )}
              </div>
            ))}
          </div>

          {/* Form */}
          <div className="md:col-span-2 order-1 md:order-2">
            <div className="relative bg-amber-100/60 backdrop-blur-md border-4 border-amber-800/50 shadow-2xl p-6 md:p-10">
              <CornersDecoration size='big' />

              {state.succeeded ? (
                <div className="text-center py-12">
                  <div className="text-6xl mb-6">✨</div>
                  <h3 className="font-cinzel text-2xl font-bold text-amber-950 mb-4" style={{ fontVariant: 'small-caps' }}>
                    ¡Mensaje enviado!
                  </h3>
                  <p className="font-crimson text-amber-900/80 text-lg leading-relaxed">
                    El Gran Mario Wenceslao ha recibido tu convocatoria.
                    Recibirás respuesta antes de 24 horas.
                  </p>
                  <Link
                    href="/"
                    className="inline-block mt-8 font-cinzel text-xs uppercase tracking-widest text-amber-800 border border-amber-800/40 px-6 py-2 hover:bg-amber-800/10 transition-colors"
                  >
                    ← Volver al inicio
                  </Link>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">

                  {/* Name + phone */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-cinzel text-xs uppercase tracking-widest text-amber-900 mb-2">
                        Nombre <span className="text-amber-700">*</span>
                      </label>
                      <input
                        type="text"
                        name="nombre"
                        required
                        placeholder="Tu nombre"
                        className="w-full bg-amber-50/80 border border-amber-800/40 px-4 py-3 font-crimson text-amber-950 placeholder:text-amber-900/40 focus:outline-none focus:border-amber-800 transition-colors"
                      />
                      <ValidationError field="nombre" errors={state.errors} className="font-crimson text-xs text-red-700 mt-1" />
                    </div>
                    <div>
                      <label className="block font-cinzel text-xs uppercase tracking-widest text-amber-900 mb-2">
                        Teléfono
                      </label>
                      <input
                        type="tel"
                        name="telefono"
                        placeholder="+34 600 000 000"
                        className="w-full bg-amber-50/80 border border-amber-800/40 px-4 py-3 font-crimson text-amber-950 placeholder:text-amber-900/40 focus:outline-none focus:border-amber-800 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block font-cinzel text-xs uppercase tracking-widest text-amber-900 mb-2">
                      Email <span className="text-amber-700">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="tu@email.com"
                      className="w-full bg-amber-50/80 border border-amber-800/40 px-4 py-3 font-crimson text-amber-950 placeholder:text-amber-900/40 focus:outline-none focus:border-amber-800 transition-colors"
                    />
                    <ValidationError field="email" errors={state.errors} className="font-crimson text-xs text-red-700 mt-1" />
                  </div>

                  {/* Service */}
                  <div>
                    <label className="block font-cinzel text-xs uppercase tracking-widest text-amber-900 mb-2">
                      Tipo de servicio <span className="text-amber-700">*</span>
                    </label>
                    <select
                      name="servicio"
                      required
                      defaultValue=""
                      className="w-full bg-amber-50/80 border border-amber-800/40 px-4 py-3 font-crimson text-amber-950 focus:outline-none focus:border-amber-800 transition-colors appearance-none cursor-pointer"
                    >
                      <option value="" disabled>Selecciona un servicio...</option>
                      {SERVICES.map(s => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                    <ValidationError field="servicio" errors={state.errors} className="font-crimson text-xs text-red-700 mt-1" />
                  </div>

                  {/* Date + location */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-cinzel text-xs uppercase tracking-widest text-amber-900 mb-2">
                        Fecha del evento
                      </label>
                      <input
                        type="date"
                        name="fecha"
                        className="w-full bg-amber-50/80 border border-amber-800/40 px-4 py-3 font-crimson text-amber-950 focus:outline-none focus:border-amber-800 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block font-cinzel text-xs uppercase tracking-widest text-amber-900 mb-2">
                        Localidad
                      </label>
                      <input
                        type="text"
                        name="localidad"
                        placeholder="Madrid, Ávila..."
                        className="w-full bg-amber-50/80 border border-amber-800/40 px-4 py-3 font-crimson text-amber-950 placeholder:text-amber-900/40 focus:outline-none focus:border-amber-800 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block font-cinzel text-xs uppercase tracking-widest text-amber-900 mb-2">
                      Cuéntanos tu evento <span className="text-amber-700">*</span>
                    </label>
                    <textarea
                      name="mensaje"
                      required
                      rows={4}
                      placeholder="¿Cuántas personas? ¿Qué tipo de celebración? ¿Algún detalle especial?"
                      className="w-full bg-amber-50/80 border border-amber-800/40 px-4 py-3 font-crimson text-amber-950 placeholder:text-amber-900/40 focus:outline-none focus:border-amber-800 transition-colors resize-none"
                    />
                    <ValidationError field="mensaje" errors={state.errors} className="font-crimson text-xs text-red-700 mt-1" />
                  </div>

                  {/* Form-level errors */}
                  <ValidationError errors={state.errors} className="font-crimson text-sm text-red-700 italic" />

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={state.submitting}
                    className="w-full bg-amber-900 hover:bg-amber-800 disabled:opacity-60 text-amber-50 font-cinzel font-bold uppercase tracking-widest py-4 px-8 transition-colors duration-300 text-sm cursor-pointer"
                  >
                    {state.submitting ? '✦ Enviando...' : '📜 Enviar convocatoria'}
                  </button>

                  <p className="text-center font-crimson text-xs text-amber-900/60 italic">
                    ⚔️ Primera consulta sin coste · Respuesta en menos de 24 horas ⚔️
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
