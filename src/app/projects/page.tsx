"use client";

import React from "react";
import {motion} from "framer-motion";
import Image from "next/image";

const articles = [
    { id: 1, title: "Restaurant", image: "/assets/demo.png" },
    { id: 1, title: "Restaurant", image: "/assets/demo_2.png" },
    { id: 1, title: "Restaurant", image: "/assets/demo.png" },
    { id: 1, title: "Restaurant", image: "/assets/demo_2.png" },
    { id: 1, title: "Restaurant", image: "/assets/demo.png" },
];
export default function Projects() {
    return (
            <div className="grid grid-cols-3 gap-10 pt-20">
                {articles.map((article, i) => (
                    <motion.div
                        key={article.id}
                        className=""
                        initial={{
                            opacity: 0,
                            translateX: i % 2 === 0 ? -50 : 50,
                            translateY: -50,
                        }}
                        // whileHover={{scale: 1, rotate:2}}
                        animate={{opacity: 1, translateX: 0, translateY: 0}}
                        transition={{duration: 0.5, delay: i * 0.5}}
                    >
                        <Image src={article.image} width={600} height={600} alt="cover" />
                        <div className="flex justify-between px-5">
                        <h2>{article.title}</h2>
                            <button>Demo</button>
                        </div>
                    </motion.div>
                ))}
            </div>
    )
}