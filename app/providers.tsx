"use client";
import { NextUIProvider } from "@nextui-org/react";
import { SharedContextProvider } from "./context";
import { ThemeProvider as NextThemeProvider } from "next-themes";

import React from "react";

export default function Providers({ children, ...props }: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      <NextThemeProvider {...props} attribute="class" defaultTheme="dark-theme" themes={['light-theme', 'dark-theme']}>
        <SharedContextProvider>{children}</SharedContextProvider>
      </NextThemeProvider>
    </NextUIProvider>
  );
}
