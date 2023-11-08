"use client";
import { Image, Button } from "@nextui-org/react";
import React from "react";

export default function Home() {
  function onClick() {
    const pdfUrl =
      "https://drive.google.com/file/d/1WXDDjxJIQBlohT9wsrveQ6CQco8Ijahn/view?usp=sharing";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.target = "_blank";
    link.download = "fitzsimmons_kayla_resume.pdf"; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return (
    <section className="flex min-h-screen flex-col items-center justify-between p-8">
      <Button
        color="secondary"
        variant="bordered"
        className="text-bold text-secondary"
        onClick={onClick}
      >
        View Resume
      </Button>
      <Image alt="github contributions" src="contributions.png" width={1000} />
    </section>
  );
}
