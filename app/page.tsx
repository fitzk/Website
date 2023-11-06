"use client";
import { Image } from "@nextui-org/react";
import React from "react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8">
      <Image alt="github contributions" src="contributions.png" width={1000} />
    </main>
  );
}
