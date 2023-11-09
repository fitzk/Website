import "@/lib/globals.css";
import { Inter } from "next/font/google";
import Nav from "@/app/nav";
import Providers from "./providers";
import type { Metadata } from "next";
import React from "react";
import ThemeSwitcher from "./themeSwitcher";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  description: "Software Developer",
  title: "Kayla Fitzsimmons",
  icons: [{ url: "./icon.svg", rel: "icon", type: "image/svg+xml" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={inter.className} suppressHydrationWarning lang="en">
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
