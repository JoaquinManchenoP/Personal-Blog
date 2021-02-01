import React from "react";
import Link from "next/link";

export default function MainTitle() {
  return (
    <div className="blog__title text-pink-400 text-4xl font-londrina lg:mx-96 md:mx-52 sm:mx-40 xs:mx-12 pt-16">
      <Link href="/">
        <h1 style={{ cursor: "pointer" }} className="">
          Sniasnias
        </h1>
      </Link>
    </div>
  );
}
