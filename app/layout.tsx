import Nav from "@/app/nav";
import "@/lib/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import React from "react";
import Providers from "./providers";
import ThemeSwitcher from "./themeSwitcher";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  description: "Software Developer",
  icons: [{ rel: "icon", type: "image/svg+xml", url: "./icon.svg" }],
  title: "Kayla Fitzsimmons",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={inter.className} lang="en" suppressHydrationWarning>
      <body className="bg-background text-foreground">
        <Providers>
          <Nav />
          {children}
          <ThemeSwitcher />
        </Providers>
      </body>
    </html>
  );
}
