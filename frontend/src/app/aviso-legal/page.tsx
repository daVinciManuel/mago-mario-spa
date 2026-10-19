import { Metadata } from 'next';
import Link from 'next/link';
import { OldPaperBg } from '@/components/ui/OldPaperBg';

export const metadata: Metadata = {
  title: 'Aviso Legal | Mario Wenceslao',
  description: 'Aviso legal del sitio web de Mario Wenceslao, mago y músico en Madrid.',
};

export default function AvisoLegalPage() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <OldPaperBg />
      <div className="absolute inset-0 bg-gradient-to-b from-amber-900/10 via-transparent to-amber-900/10 pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto px-5 sm:px-6 py-12 md:py-20">
        {/* Back */}
        <Link
          href="/"
          className="inline-flex items-center gap-3 bg-amber-900 hover:bg-amber-800 text-amber-50 font-cinzel font-bold text-xs uppercase tracking-widest px-5 py-3 transition-colors shadow-md mb-10"
        >
          <span>←</span>
          <span>Volver al inicio</span>
        </Link>

        {/* Header */}
        <header className="text-center mb-12">
          <p className="font-cinzel text-amber-900/70 text-xs tracking-[0.3em] uppercase mb-4">
            Información legal
          </p>
          <h1
            className="font-cinzel text-3xl md:text-5xl font-bold text-amber-950 mb-6"
            style={{ fontVariant: 'small-caps' }}
          >
            Aviso Legal
          </h1>
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-amber-800 to-transparent" />
            <span className="text-amber-800">✦</span>
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-amber-800 to-transparent" />
          </div>
        </header>

        {/* Content card */}
        <article className="bg-amber-50/70 border border-amber-800/30 backdrop-blur-sm p-6 md:p-10 shadow-xl space-y-10 font-crimson text-amber-950/90 leading-relaxed">
          <section>
            <h2 className="font-cinzel text-lg font-bold text-amber-950 uppercase tracking-wider mb-4">
              1. Datos identificativos
            </h2>
            <p className="mb-3">
              En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la
              Sociedad de la Información y de Comercio Electrónico (LSSI-CE), se informa de los
              siguientes datos:
            </p>
            <ul className="space-y-2 list-none">
              <li>
                <strong className="font-cinzel text-sm tracking-wide">Titular:</strong>{' '}
                [NOMBRE COMPLETO DEL TITULAR]
              </li>
              <li>
                <strong className="font-cinzel text-sm tracking-wide">NIF:</strong>{' '}
                [NIF/NIE]
              </li>
              <li>
                <strong className="font-cinzel text-sm tracking-wide">Domicilio:</strong>{' '}
                [DIRECCIÓN FISCAL]
              </li>
              <li>
                <strong className="font-cinzel text-sm tracking-wide">Email de contacto:</strong>{' '}
                [EMAIL PROFESIONAL]
              </li>
              <li>
                <strong className="font-cinzel text-sm tracking-wide">Sitio web:</strong>{' '}
                <a href="https://mariowenceslao.es" className="underline underline-offset-2 hover:text-amber-800">
                  https://mariowenceslao.es
                </a>
              </li>
            </ul>
            <p className="mt-4 text-sm text-amber-900/70 italic">
              Sustituye los textos entre corchetes por los datos reales de Mario antes de publicar.
            </p>
          </section>

          <section>
            <h2 className="font-cinzel text-lg font-bold text-amber-950 uppercase tracking-wider mb-4">
              2. Objeto
            </h2>
            <p>
              El presente aviso legal regula el uso del sitio web <strong>mariowenceslao.es</strong>,
              propiedad del titular arriba indicado. La navegación por este sitio web atribuye la
              condición de usuario e implica la aceptación plena de las disposiciones incluidas en
              este Aviso Legal.
            </p>
          </section>

          <section>
            <h2 className="font-cinzel text-lg font-bold text-amber-950 uppercase tracking-wider mb-4">
              3. Condiciones de uso
            </h2>
            <p className="mb-3">
              El usuario se compromete a hacer un uso adecuado de los contenidos y servicios del
              sitio web, de conformidad con la ley, la buena fe y el orden público. Queda prohibido:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Utilizar el sitio con fines ilícitos o lesivos de derechos de terceros.</li>
              <li>Difundir contenidos de carácter racista, xenófobo, pornográfico, de apología del terrorismo o atentatorios contra los derechos humanos.</li>
              <li>Provocar daños en los sistemas físicos o lógicos del titular o de terceros.</li>
              <li>Intentar acceder a cuentas de correo o áreas restringidas sin autorización.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-cinzel text-lg font-bold text-amber-950 uppercase tracking-wider mb-4">
              4. Propiedad intelectual e industrial
            </h2>
            <p>
              Todos los contenidos del sitio web (textos, fotografías, gráficos, imágenes, iconos,
              tecnología, software, diseño gráfico, código fuente, etc.), así como las marcas y
              nombres comerciales, son propiedad del titular o de terceros que han autorizado su
              uso, y están protegidos por la legislación española e internacional sobre propiedad
              intelectual e industrial. Queda prohibida su reproducción, distribución o
              modificación sin autorización expresa.
            </p>
          </section>

          <section>
            <h2 className="font-cinzel text-lg font-bold text-amber-950 uppercase tracking-wider mb-4">
              5. Exclusión de responsabilidades
            </h2>
            <p className="mb-3">
              El titular no se hace responsable de:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>La continuidad o disponibilidad de los contenidos y servicios.</li>
              <li>Los daños derivados del uso del sitio web o de la imposibilidad de acceder a él.</li>
              <li>Los contenidos o servicios proporcionados por terceros a los que se enlace desde este sitio.</li>
              <li>Los posibles errores u omisiones en los contenidos.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-cinzel text-lg font-bold text-amber-950 uppercase tracking-wider mb-4">
              6. Enlaces
            </h2>
            <p>
              Este sitio puede incluir enlaces a páginas de terceros. El titular no asume ninguna
              responsabilidad sobre el contenido, información o servicios de dichos sitios, ni
              garantiza la ausencia de virus u otros elementos lesivos.
            </p>
          </section>

          <section>
            <h2 className="font-cinzel text-lg font-bold text-amber-950 uppercase tracking-wider mb-4">
              7. Legislación aplicable
            </h2>
            <p>
              La relación entre el titular y el usuario se regirá por la normativa española vigente.
              Para cualquier controversia, las partes se someten a los juzgados y tribunales del
              domicilio del titular, salvo que la ley disponga otra cosa.
            </p>
          </section>

          <p className="text-sm text-amber-900/60 pt-4 border-t border-amber-800/20">
            Última actualización: octubre 2026
          </p>
        </article>

        <div className="mt-10 text-center">
          <Link
            href="/privacidad"
            className="font-cinzel text-xs uppercase tracking-[0.2em] text-amber-900/70 hover:text-amber-950 underline underline-offset-4"
          >
            Ver Política de Privacidad →
          </Link>
        </div>
      </div>
    </main>
  );
}
