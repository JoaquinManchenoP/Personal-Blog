import React from "react";
import Link from "next/link";

export default function MainTitle() {
  return (
    <div className="blog__title text-pink-400 text-4xl font-londrina mx-96 pt-16">
      <Link href="/">
        <h1 style={{ cursor: "pointer" }} className="ml-24">
          Sniasnias
        </h1>
      </Link>
    </div>
  );
}
