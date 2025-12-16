import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dili - Crece Sin Complicarte",
  description: "La plataforma que te ayuda a vender más rápido y controlar tu negocio sin estrés. Punto de venta, inventarios y reportes en un solo lugar.",
  keywords: ["punto de venta", "pos software", "inventario", "ventas", "pyme", "mexico", "facturacion", "control de negocio", "app de ventas"],
  authors: [{ name: "Dili Team" }],
  openGraph: {
    title: "Dili - El Punto de Venta que Sí Entiendes",
    description: "Vende más rápido, controla tu inventario y toma mejores decisiones con Dili. Diseñado para PyMEs en crecimiento.",
    url: "https://dili.io", // Placeholder URL, update when deployed
    siteName: "Dili",
    locale: "es_MX",
    type: "website",
    images: [
      {
        url: "/dili_Orange.svg", // Using logo as placeholder OG image for now, ideally strictly should be a 1200x630 png
        width: 1200,
        height: 630,
        alt: "Dili Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dili - Crece Sin Complicarte",
    description: "La plataforma todo en uno para gestionar tu negocio. Ventas, inventario y reportes simples.",
    images: ["/dili_Orange.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/dili_Orange.svg",
    apple: "/dili_Orange.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${outfit.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
