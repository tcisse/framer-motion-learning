import React from "react";
import { motion } from "framer-motion";

// Typage pour les variants utilisés avec framer-motion
const variants = {
    open: {
        y: 0,
        opacity: 1,
        transition: {
            y: { stiffness: 1000, velocity: -100 }
        }
    },
    closed: {
        y: 0,
        opacity: 0,
        transition: {
            y: { stiffness: 1000 }
        }
    }
};

const colors: string[] = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"];

// Définition du type pour les props du composant MenuItem
interface MenuItemProps {
    i: number;
}

export const MenuItem: React.FC<MenuItemProps> = ({ i }) => {
    const style = { border: `2px solid ${colors[i]}` };
    return (
        <motion.li
            variants={variants}
            // whileHover={{ scale: 1.1 }}
            // whileTap={{ scale: 0.95 }}
        >
            {/*<div className="icon-placeholder" style={style} />*/}
            {/*<div className="text-placeholder" style={style} />*/}
            <ul>
                <li className="text-black text-4xl">Home</li>
                <li className="text-black text-4xl">Contact</li>
                <li className="text-black text-4xl">Skills</li>
            </ul>
        </motion.li>
    );
};
