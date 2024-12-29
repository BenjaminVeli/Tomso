import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tomso",
  description: "Desarrollador de landing pages y sitios web optimizados para SEO, con experiencia en tecnologías actuales y enfoque en resultados.",
  openGraph: {
    title: 'Tomso',
    description: "Desarrollador de landing pages y sitios web optimizados para SEO, con experiencia en tecnologías actuales y enfoque en resultados.",
    url: 'https://tomso.vercel.app/',
    siteName: 'Tomso',
    images: [
      {
        url: 'https://tomso.vercel.app/Tomso.png',
        width: 300,
        height: 300,
        alt: 'Tomso Logo',
      },
    ],
  },
  alternates: {
    canonical: 'https://tomso.vercel.app/',
  },
  keywords: "Desarrollo web, optimización SEO, landing pages y website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <meta name="author" content="Tomso" />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="es-ES" />
      <meta property="og:published_time" content="2024-12-28T10:30:00Z" />
      <meta property="og:updated_time" content="2024-12-28T10:45:00Z" />

      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
