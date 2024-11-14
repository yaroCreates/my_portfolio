"use client";

import { motion } from "framer-motion";
import ReactLogo from "../../public/assets/atom.png";
import JSLogo from "../../public/assets/js.png";
import TSLogo from "../../public/assets/typescript.png";
import HtmlLogo from "../../public/assets/html.png";
import CssLogo from "../../public/assets/css.png";
import SassLogo from "../../public/assets/sass.png";
import RemixLogo from "../../public/assets/remix-js.png";
import NextLogo from "../../public/assets/next-js.webp";
import Image from "next/image";

const skillsLogoList = [
  HtmlLogo,
  CssLogo,
  JSLogo,
  TSLogo,
  SassLogo,
  ReactLogo,
  NextLogo,
  RemixLogo,
  HtmlLogo,
  CssLogo,
  JSLogo,
  TSLogo,
  SassLogo,
  ReactLogo,
  NextLogo,
  RemixLogo,
  HtmlLogo,
  CssLogo,
  JSLogo,
  TSLogo,
  SassLogo,
  ReactLogo,
  NextLogo,
  RemixLogo,
  HtmlLogo,
  CssLogo,
  JSLogo,
  TSLogo,
  SassLogo,
  ReactLogo,
  NextLogo,
  RemixLogo,
];

const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -100 }}
      transition={{ duration: 0.8 }}
      className="max-w-4xl mx-auto"
    >
      <div className="flex items-center justify-center flex-col h-screen p-3 sm:p-0">
        <div className="h-full flex flex-col justify-center items-left gap-2">
          <h3 className="text-sm md:text-lg text-white w-full">Hi there 👋🏼</h3>
          <h1 className="text-white text-3xl sm:text-6xl">
            I&apos;m{" "}
            <span className="italic font-semibold relative">
              James Yaro{" "}
              <hr className="absolute w-full right-0 border border-[#FBFCB0]" />
            </span>
          </h1>
          <h1 className="text-white text-2xl sm:text-4xl">
            Frontend Developer
          </h1>
        </div>
      </div>
      {/* <div className="mb-">
        <SkillLogos />
      </div> */}
    </motion.div>
  );
};

export default Hero;

const SkillLogos = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-1 overflow-hidden hide-scroll-bar max-w-4xl mx-auto px-8 pt-8 ">
        <motion.div
          initial={{ translateX: "-50%" }}
          animate={{ translateX: "0" }}
          transition={{
            repeat: Infinity,
            duration: 30,
            ease: "linear",
          }}
          className="flex flex-none gap-5 pr-5 -translate-x-1/2"
        >
          {skillsLogoList.map((image, index) => (
            <Image
              src={image}
              alt="Network"
              className="mx-auto object-contain w-8 sm:w-5"
              key={index}
            />
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};
