"use client";

import { AnimatePresence, motion } from "framer-motion";
import Button from "./Button";
import styles from "./style.module.scss";
import Nav from "./Nav";
import { useRef, useState } from "react";
import useOutsideClick from "../hooks/useOutsideClick";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  const closeNavbarRef = useRef(null);

  useOutsideClick({
    ref: closeNavbarRef,
    handler: () => setIsActive(false),
  });


  const menu = {
    open: {
      width: "480px",
      height: "650px",
      top: "-25px",
      right: "-25px",
      transition: { duration: 0.75, type: "tween", ease: [0.76, 0, 0.24, 1] },
    },
    closed: {
      width: "100px",
      height: "40px",
      top: "0px",
      right: "0px",
      transition: {
        duration: 0.75,
        delay: 0.35,
        type: "tween",
        ease: [0.76, 0, 0.24, 1],
      },
    },
  };

  return (
    <div ref={closeNavbarRef} className={styles.header}>
      <motion.div
        className={styles.menu}
        variants={menu}
        animate={isActive ? "open" : "closed"}
        initial="closed"
      >
        <AnimatePresence>
          {isActive && <Nav setIsActive={setIsActive} isActive={isActive} />}
        </AnimatePresence>
      </motion.div>
      <Button
        isActive={isActive}
        toggleMenu={() => {
          setIsActive(!isActive);
        }}
      />
    </div>
  );
};

export default Navbar;
