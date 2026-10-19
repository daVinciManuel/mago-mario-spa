import { Metadata } from 'next';
import Link from 'next/link';
import { OldPaperBg } from '@/components/ui/OldPaperBg';

export const metadata: Metadata = {
  title: 'Política de Privacidad | Mario Wenceslao',
  description: 'Política de privacidad y protección de datos de Mario Wenceslao. Información sobre el tratamiento de datos personales conforme al RGPD.',
};

export default function PrivacidadPage() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <OldPaperBg />
      <div className="absolute inset-0 bg-gradient-to-b from-amber-900/10 via-transparent to-amber-900/10 pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto px-5 sm:px-6 py-12 md:py-20">
        <Link
          href="/"
          className="inline-flex items-center gap-3 bg-amber-900 hover:bg-amber-800 text-amber-50 font-cinzel font-bold text-xs uppercase tracking-widest px-5 py-3 transition-colors shadow-md mb-10"
        >
          <span>←</span>
          <span>Volver al inicio</span>
        </Link>

        <header className="text-center mb-12">
          <p className="font-cinzel text-amber-900/70 text-xs tracking-[0.3em] uppercase mb-4">
            Protección de datos
          </p>
          <h1
            className="font-cinzel text-3xl md:text-5xl font-bold text-amber-950 mb-6"
            style={{ fontVariant: 'small-caps' }}
          >
            Política de Privacidad
          </h1>
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-amber-800 to-transparent" />
            <span className="text-amber-800">✦</span>
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-amber-800 to-transparent" />
          </div>
        </header>

        <article className="bg-amber-50/70 border border-amber-800/30 backdrop-blur-sm p-6 md:p-10 shadow-xl space-y-10 font-crimson text-amber-950/90 leading-relaxed">
          <section>
            <h2 className="font-cinzel text-lg font-bold text-amber-950 uppercase tracking-wider mb-4">
              1. Responsable del tratamiento
            </h2>
            <ul className="space-y-2 list-none">
              <li>
                <strong className="font-cinzel text-sm tracking-wide">Identidad:</strong>{' '}
                [NOMBRE COMPLETO DEL TITULAR]
              </li>
              <li>
                <strong className="font-cinzel text-sm tracking-wide">NIF:</strong> [NIF/NIE]
              </li>
              <li>
                <strong className="font-cinzel text-sm tracking-wide">Dirección:</strong>{' '}
                [DIRECCIÓN FISCAL]
              </li>
              <li>
                <strong className="font-cinzel text-sm tracking-wide">Email:</strong>{' '}
                [EMAIL PROFESIONAL]
              </li>
            </ul>
            <p className="mt-4 text-sm text-amber-900/70 italic">
              Sustituye los textos entre corchetes por los datos reales de Mario antes de publicar.
            </p>
          </section>

          <section>
            <h2 className="font-cinzel text-lg font-bold text-amber-950 uppercase tracking-wider mb-4">
              2. Finalidad del tratamiento
            </h2>
            <p className="mb-3">
              Los datos personales que nos facilites a través del formulario de contacto se
              tratarán con las siguientes finalidades:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                <strong>Gestionar y responder</strong> a tu consulta o solicitud de presupuesto
                sobre espectáculos, magia de salón u otros servicios.
              </li>
              <li>
                <strong>Comunicarnos contigo</strong> por email o teléfono en relación con esa
                solicitud.
              </li>
            </ul>
            <p className="mt-3">
              No utilizamos tus datos para enviar comunicaciones comerciales no solicitadas.
              Si en el futuro se ofreciera esa posibilidad, se solicitaría un consentimiento
              específico y separado.
            </p>
          </section>

          <section>
            <h2 className="font-cinzel text-lg font-bold text-amber-950 uppercase tracking-wider mb-4">
              3. Base jurídica
            </h2>
            <p>
              La base legal para el tratamiento es el <strong>consentimiento</strong> del
              interesado (art. 6.1.a del RGPD), que otorgas al marcar la casilla de aceptación
              en el formulario de contacto y enviar tu mensaje. También puede aplicarse el
              interés legítimo de responder a las solicitudes que nos diriges voluntariamente.
            </p>
          </section>

          <section>
            <h2 className="font-cinzel text-lg font-bold text-amber-950 uppercase tracking-wider mb-4">
              4. Datos que recogemos
            </h2>
            <p className="mb-3">A través del formulario de contacto podemos recoger:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Nombre</li>
              <li>Email</li>
              <li>Teléfono (opcional)</li>
              <li>Tipo de servicio solicitado</li>
              <li>Fecha y localidad del evento (opcionales)</li>
              <li>Mensaje / descripción de la consulta</li>
            </ul>
            <p className="mt-3">
              Estos datos se envían por correo electrónico al responsable del tratamiento.
              <strong> No se almacenan en una base de datos propia</strong> de este sitio web.
            </p>
          </section>

          <section>
            <h2 className="font-cinzel text-lg font-bold text-amber-950 uppercase tracking-wider mb-4">
              5. Conservación de los datos
            </h2>
            <p>
              Los datos se conservarán el tiempo necesario para atender la consulta y, en su
              caso, formalizar la relación comercial. Después se eliminarán o anonimizarán,
              salvo que exista una obligación legal de conservarlos durante un plazo superior.
            </p>
          </section>

          <section>
            <h2 className="font-cinzel text-lg font-bold text-amber-950 uppercase tracking-wider mb-4">
              6. Destinatarios
            </h2>
            <p>
              No se cederán datos a terceros, salvo obligación legal. El formulario de contacto
              utiliza el servicio <strong>Formspree</strong> para el envío de los mensajes al
              correo del responsable. Formspree actúa como encargado del tratamiento conforme
              a sus propias condiciones y política de privacidad.
            </p>
          </section>

          <section>
            <h2 className="font-cinzel text-lg font-bold text-amber-950 uppercase tracking-wider mb-4">
              7. Derechos de las personas interesadas
            </h2>
            <p className="mb-3">
              Puedes ejercer en cualquier momento los derechos de acceso, rectificación,
              supresión, oposición, limitación del tratamiento y portabilidad, así como retirar
              el consentimiento, enviando un email a{' '}
              <strong>[EMAIL PROFESIONAL]</strong> con el asunto «Protección de datos» e
              identificándote de forma adecuada.
            </p>
            <p>
              También tienes derecho a presentar una reclamación ante la Agencia Española de
              Protección de Datos (
              <a
                href="https://www.aepd.es"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 hover:text-amber-800"
              >
                www.aepd.es
              </a>
              ).
            </p>
          </section>

          <section>
            <h2 className="font-cinzel text-lg font-bold text-amber-950 uppercase tracking-wider mb-4">
              8. Cookies
            </h2>
            <p>
              Este sitio web <strong>no utiliza cookies de seguimiento ni de análisis</strong>.
              No se emplean cookies publicitarias ni de terceros con fines de perfilado.
            </p>
            <p className="mt-3">
              Pueden existir cookies técnicas imprescindibles generadas por la propia
              infraestructura de alojamiento (Netlify) o por el navegador para el correcto
              funcionamiento de la web. Estas cookies no requieren consentimiento según la
              normativa vigente.
            </p>
          </section>

          <section>
            <h2 className="font-cinzel text-lg font-bold text-amber-950 uppercase tracking-wider mb-4">
              9. Seguridad
            </h2>
            <p>
              Se adoptan las medidas técnicas y organizativas razonables para proteger los datos
              personales frente a accesos no autorizados, pérdida o alteración. El sitio se
              sirve bajo protocolo HTTPS.
            </p>
          </section>

          <section>
            <h2 className="font-cinzel text-lg font-bold text-amber-950 uppercase tracking-wider mb-4">
              10. Modificaciones
            </h2>
            <p>
              El responsable se reserva el derecho de modificar esta política para adaptarla a
              novedades legislativas o a cambios en el tratamiento de datos. Se recomienda
              revisarla periódicamente.
            </p>
          </section>

          <p className="text-sm text-amber-900/60 pt-4 border-t border-amber-800/20">
            Última actualización: octubre 2026
          </p>
        </article>

        <div className="mt-10 text-center">
          <Link
            href="/aviso-legal"
            className="font-cinzel text-xs uppercase tracking-[0.2em] text-amber-900/70 hover:text-amber-950 underline underline-offset-4"
          >
            ← Ver Aviso Legal
          </Link>
        </div>
      </div>
    </main>
  );
}
