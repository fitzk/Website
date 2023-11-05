"use client";
import { Image } from "@nextui-org/react";

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between p-10">
        <Image
          alt="github contributions"
          src="contributions.png"
          width={1000}
        />
      </main>
    </>
  );
}
