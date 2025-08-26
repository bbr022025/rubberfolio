import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import type { Metadata } from "next";
import "./globals.css";
// import { Quicksand } from "next/font/google";
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "../theme/theme";
import DrawerComponent from "./drawer/page";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Inter } from "next/font/google";

// const quicksand = Quicksand({
//   weight: ["300", "400", "500", "700"],
//   subsets: ["latin"],
//   display: "swap",
//   variable: "--font-quicksand",
// });

const inter = Inter({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Brian Blomlie",
  description: "Webdesigner based in Oslo",
  authors: [{ name: "Brian Blomlie" }],
  openGraph: {
    title: "Brian Blomlie",
    description:
      "Webdesigner basert i Oslo. Webdesign og -løsninger for alle typer aktører.",
    url: "rubberfolio.vercel.app",
    type: "website",
    images: [
      {
        url: "/app/favicon.png",
        alt: "Stylized Capital Letters B and B.",
        type: "image/png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <AppRouterCacheProvider>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <body
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <DrawerComponent />
            {children}
            <Analytics />
            <SpeedInsights />
          </body>
        </ThemeProvider>
      </AppRouterCacheProvider>
    </html>
  );
}
