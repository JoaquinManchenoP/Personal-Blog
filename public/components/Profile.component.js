import React from "react";

export default function Profile() {
  return (
    <div>
      <div className="title__info flex pt-2">
        <div className="profile__image h-20 w-20 ">
          <img className="" src="../images/Joaquin-circle.png"></img>
        </div>
        <div className="blog__description pt-2 pl-8 text-white font-extralight text-sm tracking-wider">
          <p>Personal blog by Joaquin Mancheno</p>
          <p>I share everything I find interesting</p>
        </div>
      </div>
    </div>
  );
}
