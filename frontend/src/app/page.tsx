export default function Home() {
  return (
    <main className="min-h-screen text-[#1a2e1a] flex flex-col items-center justify-center p-8 relative overflow-hidden">


      {/* Marco decorativo "Rojo Vino" */}
      <div className="z-10 border-4 border-[#722f37] p-12 md:p-20 flex flex-col items-center max-w-4xl shadow-2xl bg-[#f5e6d3]/80">

        <header className="text-center mb-8">
          <p className="text-[#722f37] font-serif tracking-[0.4em] uppercase text-xs mb-4">
            Magia y artes esc&eacute;nicas
          </p>

          {/* Nombre Elegante Antiguo */}
          <h1 className="text-6xl md:text-8xl font-serif text-[#1a2e1a] leading-tight">
            Mario <br />
            <span className="text-[#722f37] italic">Wenceslao</span>
          </h1>
        </header>

        <div className="h-px w-48 bg-[#1a2e1a]/30 my-6"></div>

        <p className="text-center font-serif text-lg italic max-w-md leading-relaxed">
          &quot;Donde la realidad se dobla ante el peso de la tradición y el misterio.&quot;
        </p>

        <nav className="mt-12 flex flex-wrap justify-center gap-8">
          <button className="text-[#722f37] font-serif hover:underline tracking-widest uppercase text-sm">
            El Libro de Actos
          </button>
          <button className="text-[#722f37] font-serif hover:underline tracking-widest uppercase text-sm">
            Contactar al Mago
          </button>
        </nav>
      </div>

      {/* Sello de cera o detalle final */}
      <div className="absolute bottom-10 right-10 w-24 h-24 bg-[#722f37] rounded-full flex items-center justify-center shadow-lg transform rotate-12 opacity-80 border-2 border-[#5a252b]">
        <span className="text-[#f5e6d3] font-serif text-4xl italic">MW</span>
      </div>
    </main>
  );
}
