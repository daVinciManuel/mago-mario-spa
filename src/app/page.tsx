export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#020617] text-slate-200 selection:bg-purple-500/30">
      {/* Efecto de luz difusa en el fondo (Nebulosa) */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        <div className="absolute -top-[10%] -left-[10%] h-[40%] w-[40%] rounded-full bg-purple-900/20 blur-[120px]" />
        <div className="absolute -bottom-[10%] -right-[10%] h-[40%] w-[40%] rounded-full bg-blue-900/20 blur-[120px]" />
      </div>

      <div className="z-10 flex flex-col items-center gap-6 px-4 text-center">
        <h1 className="text-5xl font-light tracking-widest uppercase md:text-7xl">
          Mago <span className="font-serif italic text-purple-400">Mario</span>
        </h1>

        <div className="h-px w-24 bg-gradient-to-r from-transparent via-purple-500 to-transparent" />

        <p className="max-w-md text-lg font-light tracking-wide text-slate-400">
          Explorando los límites de la percepción y los misterios de lo invisible.
        </p>

        <button className="mt-8 px-8 py-3 border border-purple-500/30 bg-purple-500/10 hover:bg-purple-500/20 transition-all duration-500 rounded-full text-sm tracking-[0.2em] uppercase">
          Entrar en el Misterio
        </button>
      </div>

      <footer className="absolute bottom-8 text-[10px] tracking-[0.3em] uppercase text-slate-500">
        Próximamente • 2026
      </footer>
    </main>
  );
}
