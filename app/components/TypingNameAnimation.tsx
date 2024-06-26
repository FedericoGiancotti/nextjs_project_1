"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";

const TypingNameAnimation: React.FC = () => {
  return (
    <TypeAnimation
      sequence={["Hey, I'm Jondar", 2000, "This is my website", 2000]}
      wrapper="span"
      repeat={Infinity}
    />
  );
};

export default TypingNameAnimation;
