import { StyledEngineProvider, ThemeProvider } from '@mui/material';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import theme from './theme';

const inter = Inter({ subsets: ["latin"] });

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
    <html lang="en">
      <body className={inter.className} id="__next">
        <AppRouterCacheProvider options={{ key: 'css', enableCssLayer: true, prepend: true }}>
            <StyledEngineProvider injectFirst>
              <ThemeProvider theme={theme}>
                  {children}
              </ThemeProvider>
            </StyledEngineProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
