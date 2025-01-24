"use client"

import Link from "next/link";
import { motion } from "framer-motion";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { fadeInAnimation } from "@/utils/animations";

export const Socials = ({ animationDelay = 1 }) => {
  return (
    <motion.div
      className="fixed bottom-6 left-6 flex gap-8 text-xl text-gray-400"
      {...fadeInAnimation}
      transition={{ delay: animationDelay, duration: 1 }}
    >
      <Link href="https://github.com/yarocreates" target="blank" title="GitHub">
        <AiFillGithub className="size-8 md:size-10 transition-all duration-300 hover:scale-125" />
      </Link>

      <Link
        href="https://linkedin.com/in/jamesyaroonuh"
        target="blank"
        title="LinkedIn"
      >
        <AiFillLinkedin className="size-8 md:size-10 transition-all duration-300 hover:scale-125" />
      </Link>
    </motion.div>
  );
};