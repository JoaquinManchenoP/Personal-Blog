import React from "react";
import Link from "next/link";

export default function Profile() {
  return (
    <div>
      <div className="title__info flex pt-2">
        <div className="profile__image h-20 w-20 ">
          <Link href="/">
            <img className="" src="../images/Joaquin-circle.png"></img>
          </Link>
        </div>
        <div className="blog__description pl-8 pt-2 text-white font-light text-sm tracking-wider">
          <p>Personal blog by Joaquin Mancheno</p>
          <p>I share everything I find interesting</p>
          <div className="contact text-pink-400 pt-2 flex space-x-8 ">
            <Link href="https://www.linkedin.com/in/joaquinjm/">
              <p className=" hover:text-pink-500" style={{ cursor: "pointer" }}>
                LinkedIn
              </p>
            </Link>

            <Link href="https://github.com/JoaquinManchenoP">
              <p className=" hover:text-pink-500" style={{ cursor: "pointer" }}>
                Github
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
