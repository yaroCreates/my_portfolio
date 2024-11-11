import React from "react";

const Hero = () => {
  return (
    <div className="max-w-4xl mx-auto flex items-center justify-center h-screen p-3 sm:p-0">
      <div className="h-full flex flex-col justify-center items-left gap-2">
        <h3 className="text-sm md:text-lg text-white w-full">Hi there 👋🏼</h3>
        <h1 className="text-white text-3xl sm:text-6xl">
          I&apos;m{" "}
          <span className="italic font-semibold relative">
            James Yaro <hr className="absolute w-full right-0 border border-[#FBFCB0]" />
          </span>
        </h1>
        <h1 className="text-white text-2xl sm:text-4xl">Frontend Developer</h1>
      </div>
    </div>
  );
};

export default Hero;
