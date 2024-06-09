import { AppContexts } from "@/contexts/AppContexts";
import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "../styles/globals.css";

const nunito = Nunito_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-nunito",
});

export const metadata: Metadata = {
  title: "Book wise",
  description: "Seu app de livros",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const bodyClassNames = `${nunito.variable} tw-min-w-full tw-min-h-screen tw-overflow-hidden`;
  return (
    <html lang="pt-BR">
      <body className={bodyClassNames} id="__next">
        <AppContexts>{children}</AppContexts>
      </body>
    </html>
  );
}
