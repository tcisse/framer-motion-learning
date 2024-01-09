'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { container, item } from '../../../animation';
import { skills_container, skill_item } from '../../utils/skills_animations';

const skills = [
  { id: 'html', icons: './assets/html.svg' },
  { id: 'php', icons: './assets/php.svg' },
  { id: 'css', icons: './assets/css.svg' },
  { id: 'js', icons: './assets/js.svg' },
  { id: 'nextjs', icons: './assets/next.svg' },
];

export default function Skills() {
  return (
    <motion.div
      initial={{ y: '100%' }}
      animate={{ y: '0%' }}
      transition={{ duration: 0.75, ease: 'easeOut' }}
      className="text-gray-900 absolute top-0 left-0 w-full h-full bg-pink-400 lg:px-48 px-16"
    >
      <div className="my-96 p-1 space-y-10">
        <motion.ul variants={container} initial="hidden" animate="show" className="flex gap-10">
          <div className="overflow-hidden">
            <motion.li variants={item} className="pb-2 rounded-md p-3">
              <Image src="/assets/js.svg" width={100} height={100} alt="icons" />
            </motion.li>
          </div>
          <div className="overflow-hidden">
            <motion.li variants={item} className="pb-2 rounded-md p-3">
              <Image src="/assets/css.svg" width={100} height={100} alt="icons" />
            </motion.li>
          </div>
          <div className="overflow-hidden">
            <motion.li variants={item} className="pb-2 rounded-md p-3">
              <Image src="/assets/html.svg" width={100} height={100} alt="icons" />
            </motion.li>
          </div>
          <div className="overflow-hidden">
            <motion.li variants={item} className="pb-2 rounded-md p-3">
              <Image src="/assets/php.svg" width={100} height={100} alt="icons" />
            </motion.li>
          </div>
        </motion.ul>
        <motion.ul variants={skills_container} initial="hidden" animate="show" className="flex gap-10">
          <div className="overflow-hidden">
            <motion.li variants={skill_item} className="pb-2 rounded-md p-3">
              <Image src="/assets/tailwindcss.svg" width={100} height={100} alt="icons" />
            </motion.li>
          </div>
          <div className="overflow-hidden">
            <motion.li variants={skill_item} className="pb-2 rounded-md p-3">
              <Image src="/assets/next.svg" width={100} height={100} alt="icons" />
            </motion.li>
          </div>
          <div className="overflow-hidden">
            <motion.li variants={skill_item} className="pb-2 rounded-md p-3">
              <Image src="/assets/react.svg" width={100} height={100} alt="icons" />
            </motion.li>
          </div>
        </motion.ul>
      </div>
    </motion.div>
  );
}
