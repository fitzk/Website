"use client";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemeProvider } from "next-themes";
import { SharedContextProvider } from "./context";

import React from "react";

export default function Providers({
  children,
  ...props
}: {
  children: React.ReactNode;
}) {
  return (
    <NextUIProvider>
      <NextThemeProvider
        {...props}
        attribute="class"
        defaultTheme="dark-theme"
        themes={["light-theme", "dark-theme"]}
      >
        <SharedContextProvider>{children}</SharedContextProvider>
      </NextThemeProvider>
    </NextUIProvider>
  );
}
