'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const articles = [
  { id: 1, title: 'Restaurant', image: '/assets/demo.png' },
  { id: 1, title: 'Restaurant', image: '/assets/demo_2.png' },
  { id: 1, title: 'Restaurant', image: '/assets/demo.png' },
  { id: 1, title: 'Restaurant', image: '/assets/demo_2.png' },
  { id: 1, title: 'Restaurant', image: '/assets/demo.png' },
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
            scale: 0.5,
            translateY: -50,
          }}
          animate={{ opacity: 1, translateX: 0, translateY: 0, scale: 1 }}
          transition={{
            duration: 4,
            delay: i * 0.5,
            ease: [0, 0.71, 0.5, 1.01],
            scale: {
              type: 'spring',
              damping: 5,
              stiffness: 100,
              restDelta: 0.001,
            },
          }}
        >
          <Image src={article.image} width={600} height={600} alt="cover" />
          <div className="flex justify-between px-5">
            <h2>{article.title}</h2>
            <button>Demo</button>
          </div>
        </motion.div>
      ))}
      {/*<div>
                    <motion.div
                        className="box"
                        initial={{opacity: 0, scale: 0.5}}
                        animate={{opacity: 1, scale: 1}}
                        transition={{
                            duration: 0.3,
                            ease: [0, 0.71, 0.2, 1.01],
                            scale: {
                                type: "spring",
                                damping: 5,
                                stiffness: 100,
                                restDelta: 0.001
                            }
                        }}
                    >
                        <Image src="/assets/demo.png" width={600} height={600} alt="cover" />
                    </motion.div>
                </div>*/}
    </div>
  );
}
