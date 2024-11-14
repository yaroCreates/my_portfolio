"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import ReactLogo from "../../public/assets/atom.png";
import JSLogo from "../../public/assets/js.png";
import TSLogo from "../../public/assets/typescript.png";
import HtmlLogo from "../../public/assets/html.png";
import CssLogo from "../../public/assets/css.png";
import SassLogo from "../../public/assets/sass.png";
import RemixLogo from "../../public/assets/remix-js.png";
import NextLogo from "../../public/assets/next-js.webp";
import ProjectList from "./ProjectList";

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

const Projects = () => {
  return (
    <div id="projects" className="py-20 h-screen max-w-4xl mx-auto px-4">
      <h1 className="text-6xl text-white">Projects</h1>
      {/* <div className="mt-4">
        <SkillLogos />
      </div> */}
      <ProjectList/>
    </div>
  );
};

export default Projects;

const SkillLogos = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-1 overflow-hidden hide-scroll-bar max-w-4xl mx-auto px-8 pt-8 bg">
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
