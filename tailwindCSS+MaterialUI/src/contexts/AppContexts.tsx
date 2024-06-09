import { StyledEngineProvider, ThemeProvider } from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ReactNode } from "react";
import NextAuthProvider from "../contexts/NextAuthProvider";
import "../styles/globals.css";
import { muiTheme } from "../styles/muiTheme";

export function AppContexts({ children }: { children: ReactNode }) {
  return (
    <NextAuthProvider>
      <AppRouterCacheProvider
        options={{ key: "css", enableCssLayer: true, prepend: true }}
      >
        <StyledEngineProvider injectFirst>
          <ThemeProvider theme={muiTheme}>{children}</ThemeProvider>
        </StyledEngineProvider>
      </AppRouterCacheProvider>
    </NextAuthProvider>
  );
}
