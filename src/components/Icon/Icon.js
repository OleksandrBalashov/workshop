import React from "react";
import sprite from "../../assets/images/sprite.svg";

const Icon = ({ icon }) => {
  return (
    <svg width={32} height={32}>
      <use href={`${sprite}#${icon}`}></use>
    </svg>
  );
};

export default Icon;
