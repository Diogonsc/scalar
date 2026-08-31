import type { Metadata } from "next";
import { Archivo, IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";

import { MotionProvider } from "@/components/motion-provider";
import { cn } from "@/lib/utils";

import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["700", "800", "900"],
  variable: "--font-heading",
});

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-sans",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Scalar Telecom — Engenharia de Redes Ópticas",
  description:
    "Mais de 7.000 km de redes ópticas projetadas, licenciadas e construídas para as maiores operadoras do país.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={cn(
        "dark h-full antialiased",
        archivo.variable,
        ibmPlexSans.variable,
        ibmPlexMono.variable,
      )}
    >
      <body className="flex min-h-full flex-col bg-background font-sans text-foreground">
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
