import Link from "next/link";

export default function GaleriaPage() {
  // Aquí es donde en el futuro haremos el: 
  // const fotos = await fetch('http://localhost:1337/api/galeria...')

  return (
    <main className="min-h-screen p-10 flex flex-col items-center">
      <h1 className="text-[#1a2e1a] font-serif text-5xl mb-4">Crónicas Visuales</h1>
      <p className="text-[#722f37] font-serif italic mb-12">Imágenes de lo inexplicable</p>

      {/* Grid de imágenes (por ahora vacío) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
        {/* Placeholder de lo que vendrá de Strapi */}
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div
            key={i}
            className="aspect-[3/4] border-4 border-[#722f37] bg-[#1a2e1a]/10 flex items-center justify-center relative overflow-hidden group"
          >
            <span className="text-[#722f37]/40 font-serif italic">Espacio para Artefacto {i}</span>
            {/* Overlay medieval al pasar el ratón */}
            <div className="absolute inset-0 bg-[#722f37]/20 opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        ))}
      </div>

      <Link href="/" className="mt-16 text-[#1a2e1a] hover:text-[#722f37] transition-colors font-serif uppercase tracking-widest text-sm">
        ← Volver a la Cámara Principal
      </Link>
    </main>
  );
}
