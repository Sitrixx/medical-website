"use client";

import { motion } from "framer-motion";

interface IRevealWord {
  word: string;
  index: number;
}

interface ITitleReveal {
  children: string;
  className: string;
}

const RevealWord: React.FC<IRevealWord> = ({ word, index }) => {
  const delay = index === 0 ? 0 : 0.14 * index;

  return (
    <motion.span
      whileInView={{
        opacity: [0, 0.5, 1],
        x: [-80, 70, 0],
        scale: [0.4, 1.3, 1],
      }}
      transition={{
        duration: 0.3,
        delay: delay,
      }}
      className="inline-block"
      viewport={{ once: true }}
    >
      {word}&nbsp;
    </motion.span>
  );
};

const TitleReveal: React.FC<ITitleReveal> = ({ children, className }) => {
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
