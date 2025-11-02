export default function Home() {
  return (
    <main className="min-h-screen bg-black text-zinc-100 flex items-center justify-center">
      <div className="max-w-3xl mx-auto px-6 py-20 text-center">
        {/* Logotipo */}
        <div className="mb-6">
          <img
            src="/vercel.svg"
            alt="Evolupia Logo"
            className="mx-auto w-24 opacity-80"
          />
        </div>

        <h1 className="text-3xl md:text-5xl font-semibold leading-tight">
          Entre a <span className="text-amber-400">alma</span> e o algoritmo
        </h1>

        <p className="mt-4 text-lg md:text-xl text-zinc-400">
          Desenvolvimento comportamental humano, potencializado pela inteligência artificial.
        </p>

        <div className="mt-10">
          <a
            href="#"
            className="inline-flex items-center justify-center rounded-2xl px-6 py-3 text-base font-medium
                       border border-amber-400/70 text-amber-400
                       hover:bg-amber-400 hover:text-black
                       transition duration-300"
          >
            Quero ser avisado
          </a>
        </div>

        <div className="mt-12 text-sm text-zinc-500 italic">
          “A Evolupia mantém a alma, mas exige um corpo estruturado. Cada ideia deve provar-se na vida real,
          nos números e nas pessoas. Crescer com consciência, entregar com precisão e medir com verdade.”
        </div>

        <footer className="mt-16 text-xs text-zinc-600">
          © {new Date().getFullYear()} EVOLUPIA — Formex Angola
        </footer>
      </div>
    </main>
  );
}
