"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface ISecondTitleReveal {
  children: React.ReactNode;
  className: string;
  delay: number;
}

const SecondTitleReveal: React.FC<ISecondTitleReveal> = ({
  children,
  className,
  delay,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <div className="overflow-hidden" ref={ref}>
      <motion.h1
        className={className}
        initial={{ y: "100px" }}
        animate={isInView === true && { y: 0 }}
        transition={{
          type: "spring",
          stiffness: 50,
          damping: 15,
          ease: "easeInOut",
          duration: 0.7,
          delay: delay,
        }}
        style={{ whiteSpace: "nowrap" }}
      >
        {children}
      </motion.h1>
    </div>
  );
};

export default SecondTitleReveal;
