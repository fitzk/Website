"use client";
import { NextUIProvider } from "@nextui-org/react";
import { SharedContextProvider } from "./context";
import React from "react";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      <SharedContextProvider> {children}</SharedContextProvider>
    </NextUIProvider>
  );
}
