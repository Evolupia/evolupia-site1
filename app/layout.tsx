// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Evolupia | Desenvolvimento humano + IA",
  description:
    "Entre a alma e o algoritmo. Desenvolvimento comportamental humano, potencializado pela inteligência artificial.",
  openGraph: {
    title: "Evolupia | Desenvolvimento humano + IA",
    description:
      "Entre a alma e o algoritmo. Desenvolvimento comportamental humano, potencializado pela inteligência artificial.",
    url: "https://evolupia-site1.vercel.app",
    siteName: "Evolupia",
    images: [
      {
        url: "/evolupia.png",
        width: 1200,
        height: 630,
        alt: "Evolupia",
      },
    ],
    locale: "pt_PT",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt">
      <body className="min-h-screen font-sans bg-white text-black dark:bg-black dark:text-white">
        {children}
      </body>
    </html>
  );
}

