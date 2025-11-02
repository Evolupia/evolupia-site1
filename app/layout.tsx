export const metadata = {
  title: 'Evolupia | Desenvolvimento humano + IA',
  description:
    'Entre a alma e o algoritmo. Desenvolvimento comportamental humano, potencializado pela inteligência artificial.',
  openGraph: {
    title: 'Evolupia | Desenvolvimento humano + IA',
    description:
      'Entre a alma e o algoritmo. Desenvolvimento comportamental humano, potencializado pela inteligência artificial.',
    url: 'https://evolupia-site1.vercel.app',
    siteName: 'Evolupia',
    images: [
      {
        url: '/evolupia.svg',
        width: 1200,
        height: 630,
        alt: 'Evolupia',
      },
    ],
    locale: 'pt_PT',
    type: 'website',
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt" className="h-full bg-white text-black dark:bg-black dark:text-white">
      <body className="min-h-screen font-sans">{children}</body>
    </html>
  );
}
