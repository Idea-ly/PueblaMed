import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import { site } from "@/lib/site";
import "./globals.css";

const display = Plus_Jakarta_Sans({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const body = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: "Renta de Consultorios Médicos en Atlixco | PueblaMed Atlixco",
  description:
    "Renta tu consultorio médico en PueblaMed Atlixco desde $8,000 + IVA. Consultorios nuevos amueblados y sin amueblar (23 a 28 m²), recepción, elevador, sala de espera, estacionamiento y farmacia dentro del complejo. Primeros 6 meses de mantenimiento incluidos.",
  keywords: [
    "renta de consultorios Atlixco",
    "consultorio médico en renta",
    "PueblaMed Atlixco",
    "consultorios Puebla",
    "espacios médicos Atlixco",
  ],
  openGraph: {
    title: "Renta de Consultorios Médicos en Atlixco | PueblaMed",
    description:
      "Consultorios médicos nuevos de 23 a 28 m² en PueblaMed Atlixco. Desde $8,000 + IVA con 6 meses de mantenimiento incluidos.",
    locale: "es_MX",
    type: "website",
    images: ["/og.jpg"],
  },
  alternates: { canonical: "/" },
  icons: {
    icon: [
      { url: "/img/favicon.png", type: "image/png" },
      { url: "/favicon.ico" }
    ],
    shortcut: "/img/favicon.png",
    apple: "/img/favicon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a2150",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es-MX" className={`${display.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  );
}
