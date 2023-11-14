"use client";
import { Button } from "@nextui-org/react";
import React from "react";
import Banner from "./banner";

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
    <section className="flex min-h-screen flex-col items-center justify-start">
      <Banner />
      <Button
        className="bg-gradient-to-br from-pink to-secondary text-background text-lg delay-150 animate-jump animate-twice"
        endContent={
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
            />
          </svg>
        }
        onClick={onClick}
      >
        Resume
      </Button>
    </section>
  );
}
