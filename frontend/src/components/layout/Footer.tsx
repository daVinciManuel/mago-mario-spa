import Link from 'next/link';

const FOOTER_LINKS = [
  { href: '/', label: 'Inicio' },
  { href: '/#servicios', label: 'Servicios' },
  { href: '/contact', label: 'Contacto' },
  { href: '/links', label: 'Redes' },
  { href: '/aviso-legal', label: 'Aviso Legal' },
  { href: '/privacidad', label: 'Privacidad' },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-amber-800/30 bg-[#0c0a09]">
      {/* subtle top rule */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-700/40 to-transparent" />

      <div className="max-w-5xl mx-auto px-6 py-12 md:py-16">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">
          {/* Brand */}
          <div className="max-w-xs">
            <p className="font-cinzel text-amber-100/90 text-sm tracking-[0.25em] uppercase mb-3">
              Mario Wenceslao
            </p>
            <p className="font-crimson text-amber-200/50 text-sm leading-relaxed italic">
              Guardián de los antiguos secretos arcanos.
              <br />
              Magia y música desde Madrid.
            </p>
          </div>

          {/* Links */}
          <nav aria-label="Enlaces del pie de página">
            <ul className="flex flex-wrap gap-x-6 gap-y-3">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-cinzel text-[11px] uppercase tracking-[0.2em] text-amber-200/60 hover:text-amber-100 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-amber-800/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-crimson text-xs text-amber-200/40 tracking-wide">
            © {year} Mario Wenceslao · Madrid, España
          </p>
          <p className="font-crimson text-xs text-amber-200/30 italic">
            Esta web no utiliza cookies
          </p>
        </div>
      </div>
    </footer>
  );
}
