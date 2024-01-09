"use client";

import Navbar from "./components/Navbar";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div
      initial={{ y: "100%" }}
      animate={{ y: "0%" }}
      transition={{ duration: 0.50, ease: "easeOut" }}
      className="text-gray-900 absolute top-0 left-0 w-full h-full bg-orange-100 lg:px-48 px-16"
      exit={{ opacity: 1 }}
    >
      <main>
        <div className="my-96 p-1 overflow-hidden">
          <motion.h1 animate={{y: 0}} initial={{y: "100%"}} transition={{delay: 0.5, duration: 0.5}} className="text-6xl text-center lg:text-right lg:text-9xl">
            Happy Pickle
          </motion.h1>
        </div>
        <div className="flex justify-between">
          <div>
            <h2>Design</h2>
            <h2>Company</h2>
            <h2>2022</h2>
          </div>
          <div>
            <h3>This pickle gonna make you smile.</h3>
            <h3>This pickle gonna make you smile.</h3>
            <h3>This pickle gonna make you smile.</h3>
          </div>
        </div>
      </main>
    </motion.div>
  );
}
