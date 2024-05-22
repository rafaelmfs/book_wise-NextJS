import { StyledEngineProvider, ThemeProvider } from '@mui/material';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import { muiTheme } from '../styles/muiTheme';
import "./globals.css";

const nunito = Nunito_Sans({ subsets: ["latin"], weight: ['400', '700'], variable: '--font-nunito' });

export const metadata: Metadata = {
  title: "Book wise",
  description: "Seu app de livros",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={nunito.variable} id="__next">
        <AppRouterCacheProvider options={{ key: 'css', enableCssLayer: true, prepend: true }}>
            <StyledEngineProvider injectFirst>
              <ThemeProvider theme={muiTheme}>
                  {children}
              </ThemeProvider>
            </StyledEngineProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
