'use client';

import { useEffect, useState } from 'react';

const NOTIFY_URL =
  'mailto:contact@evolupia.com?subject=Quero%20ser%20avisado%20-%20Evolupia'; // ← troca pelo teu Typeform/Brevo quando tiveres

export default function Home() {
  // Tema: 'dark' por defeito + toggle guardado em localStorage
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  useEffect(() => {
    const saved = (localStorage.getItem('theme') as 'dark' | 'light') || 'dark';
    setTheme(saved);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') root.classList.add('dark');
    else root.classList.remove('dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  const isDark = theme === 'dark';

  return (
    <main
      className={
        'min-h-screen flex items-center justify-center ' +
        (isDark ? 'bg-black text-zinc-100' : 'bg-white text-zinc-900')
      }
    >
      {/* Toggle de tema */}
      <button
        onClick={() => setTheme(isDark ? 'light' : 'dark')}
        className={
          'fixed top-4 right-4 rounded-full px-3 py-1 text-sm ' +
          (isDark
            ? 'border border-zinc-700 text-zinc-300 hover:bg-zinc-800'
            : 'border border-zinc-300 text-zinc-700 hover:bg-zinc-100')
        }
        aria-label="Alternar tema"
      >
        {isDark ? 'Tema claro' : 'Tema escuro'}
      </button>

      <div className="max-w-3xl mx-auto px-6 py-20 text-center">
        {/* Logotipo Evolupia */}
        <div className="mb-8">
          <img
            src="/evolupia.svg"
            alt="Evolupia"
            className="mx-auto w-28 opacity-90"
          />
        </div>

        <h1
          className={
            'text-4xl md:text-6xl font-semibold leading-tight ' +
            (isDark ? '' : 'text-zinc-900')
          }
        >
          Entre a <span className="text-amber-400">alma</span> e o algoritmo
        </h1>

        <p
          className={
            'mt-5 text-lg md:text-xl ' +
            (isDark ? 'text-zinc-300' : 'text-zinc-600')
          }
        >
          Desenvolvimento comportamental humano, potencializado pela
          inteligência artificial.
        </p>

        <div className="mt-10">
          <a
            href={NOTIFY_URL}
            className={
              'inline-flex items-center justify-center rounded-2xl px-6 py-3 text-base font-medium transition ' +
              (isDark
                ? 'border border-amber-400/70 text-amber-400 hover:bg-amber-400 hover:text-black'
                : 'border border-amber-500 text-amber-600 hover:bg-amber-500 hover:text-white')
            }
          >
            Quero ser avisado
          </a>
        </div>

        <div
          className={
            'mt-12 text-sm italic ' +
            (isDark ? 'text-zinc-500' : 'text-zinc-500')
          }
        >
          “A Evolupia mantém a alma, mas exige um corpo estruturado. Cada ideia
          deve provar-se na vida real, nos números e nas pessoas. Crescer com
          consciência, entregar com precisão e medir com verdade.”
        </div>

        <footer
          className={
            'mt-16 text-xs ' + (isDark ? 'text-zinc-600' : 'text-zinc-500')
          }
        >
          © {new Date().getFullYear()} EVOLUPIA — Formex Angola
        </footer>
      </div>
    </main>
  );
}
