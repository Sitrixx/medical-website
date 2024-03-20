"use client";

import { motion } from "framer-motion";

const RevealWord = ({ word, index }: any) => {
  const delay = index === 0 ? 0 : 0.08 * index;

  return (
    <motion.span
      whileInView={{
        opacity: [0, 0.5, 1],
        x: [-80, 70, 0],
        scale: [0.4, 1.3, 1],
      }}
      transition={{
        duration: 0.2,
        delay: delay,
      }}
      className="inline-block"
      viewport={{ once: true }}
    >
      {word}&nbsp;
    </motion.span>
  );
};

const TitleReveal = ({ children, className }: any) => {
  const words = children.split(" ");

  return (
    <h1 className={className}>
      {words.map((word: string, index: number) => (
        <RevealWord key={index} index={index} word={word} />
      ))}
    </h1>
  );
};

export default TitleReveal;
