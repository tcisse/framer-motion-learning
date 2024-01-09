/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect, useRef } from "react";
import { useAnimation, useInView, motion } from "framer-motion";
import { AiFillAmazonCircle } from "react-icons/ai";

export default function Page() {
  const ref = useRef(null);
  const isInView = useInView(ref);

  const mainControlls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControlls.start("visible");
    }
  });
  
  return (
    <div>
      <section className="text-black">
        <div className="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-center sm:text-5xl ">
              Empowering Business
            </h2>
            <p className="max-w-3xl mx-auto mt-4 text-xl text-center ">
              Growth Through Advanced Technology Solutions, Analytics and
              Professionaly Trained Personnel
            </p>
          </div>
          <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <h3 className="text-2xl font-bold tracking-tight sm:text-3xl ">
                Inovation Begins Here
              </h3>
              <p className="mt-3 text-lg ">
                Unleash business growth with advanced technology solutions,
                optimizing operations, integrating innovative technologies, and
                receiving personalized support.
              </p>
              <div className="mt-12 space-y-12">
                <motion.div
                  ref={ref}
                  variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  initial="hidden"
                  animate={mainControlls}
                  transition={{ duration: 0.5, delay: 0.15 }}
                  className="flex"
                >
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-md dark:text-gray-900">
                      <AiFillAmazonCircle size={25} />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium leading-6 ">
                      Advanced Algorithmic Solutions
                    </h4>
                    <p className="mt-2 ">
                      Our advanced algorithms optimize your operations, boosting
                      efficiency and profitability. Make data-driven decisions
                      with actionable insights.
                    </p>
                  </div>
                </motion.div>
                <motion.div
                  ref={ref}
                  variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  initial="hidden"
                  animate={mainControlls}
                  transition={{ duration: 0.5, delay: 1 }}
                  className="flex"
                >
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-md  dark:text-gray-900">
                      <AiFillAmazonCircle size={25} />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium leading-6 ">
                      Innovative Technology Integration
                    </h4>
                    <p className="mt-2 ">
                      Seamlessly integrate cutting-edge technologies like AI,
                      IoT, and cloud computing. Automate tasks, improve
                      communication, and unlock growdddddth potential.
                    </p>
                  </div>
                </motion.div>
                <motion.div
                  ref={ref}
                  variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  initial="hidden"
                  animate={mainControlls}
                  transition={{ duration: 0.5, delay: 1 }}
                  className="flex"
                >
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-md  dark:text-gray-900">
                      <AiFillAmazonCircle size={25} />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium leading-6 ">
                      Trained Personnel Support
                    </h4>
                    <p className="mt-2 ">
                      Our trained experts ensure smooth implementation and
                      ongoing guidance. Leverage our software effectively with
                      personalized assistance.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
            <div>
              <img
                src="/assets/blur.png"
                alt="image1"
                className="taos:translate-x-[200px] taos:opacity-0 hover:-translate-y-2 transition ease-in-out duration-300 hover:drop-shadow-xl mx-auto rounded-lg shadow-lg dark:bg-gray-500"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
