import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import type { Metadata } from "next";
import "./globals.css";
import { Quicksand } from "next/font/google";
import { ThemeProvider } from "@mui/material";
import theme from "../theme/theme";

const quicksand = Quicksand({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-quicksand",
});

export const metadata: Metadata = {
  title: "Brian Blomlie",
  description: "Webdesigner based in Oslo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={quicksand.variable}>
      <AppRouterCacheProvider>
        <ThemeProvider theme={theme}>
          <body
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {children}
          </body>
        </ThemeProvider>
      </AppRouterCacheProvider>
    </html>
  );
}
