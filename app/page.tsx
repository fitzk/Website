"use client";
import { Image } from "@nextui-org/react";
import React from "react";

export default function Home() {
  React.useEffect(() => {
    window.scroll({
      behavior: "smooth",
      left: 0,
      top: 0,
    });
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8">
      <Image
        alt="github contributions"
        className="animate-jump-in animate-once animate-fill-forwards"
        src="contributions.png"
        width={1000}
      />
    </main>
  );
}
