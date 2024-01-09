"use client";

import { motion } from "framer-motion";
import {container, item} from "../../../animation";


export default function Contact() {
  return (
    <motion.div
      initial={{ y: "100%" }}
      animate={{ y: "0%" }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      className="text-gray-900 absolute top-0 left-0 w-full h-full bg-red-400 lg:px-48 px-16"
    >
      <div className="my-96 p-1">
        <h1 className="text-6xl text-center lg:text-right lg:text-9xl">
          Let's talk
        </h1>
      </div>
      <div className="flex justify-between gap-40">
        <div className="lg:text-2xl text-base">
          <h4>Find me:</h4>
        </div>
        <div className="lg:text-2xl text-2xl underline">
          <motion.ul variants={container} initial="hidden" animate="show">
            <div className="overflow-hidden">
            <motion.li variants={item} className="pb-2">X</motion.li>
            </div>
            <div>
            <motion.li variants={item} className="pb-2">Instagram</motion.li>
            </div>
          </motion.ul>
        </div>
      </div>
    </motion.div>
  );
}
