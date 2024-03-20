"use client";

import SecondTitleReveal from "@/app/animations/SecondTitleReveal";
import clsx from "clsx";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { useLayoutEffect, useRef, useState } from "react";

const ExpertisesPage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  const [isVisible, setIsVisible] = useState(true);
  const [words, setWords] = useState([
    "Dermatology",
    "Neurology",
    "Gastroenterology",
    "Endocrinology",
    "Cardiology",
  ]);

  const getDelay = (i: any) => {
    let delay = 0;

    if (i === 2) delay = 0.2;
    else if (i === 1 || i === 3) delay = 0.4;
    else if (i === 0 || i === 4) delay = 0.6;

    return delay;
  };

  useLayoutEffect(() => {
    if (isInView) {
      const timeoutId = setTimeout(() => {
        setIsVisible((prev) => !prev);
        setWords((prevWords) => {
          const newWords = [...prevWords];
          const firstWord: any = newWords.shift();
          newWords.push(firstWord);
          return newWords;
        });
        setTimeout(() => {
          setIsVisible((prev) => !prev);
        }, 1000);
      }, 2000);

      return () => clearTimeout(timeoutId);
    }
  }, [isInView]);

  return (
    <section className="h-svh w-full p-8 md:px-14 md:py-10 lg:px-16 bg-white relative flex items-center justify-center">
      <div className="h-full flex flex-col w-full items-center" ref={ref}>
        <div className="h-full space-y-12 md:space-y-16 flex items-center justify-center max-w-2xl flex-col md:w-9/12">
          <div className="w-full flex flex-row max-w-screen-2xl items-center justify-center">
            <SecondTitleReveal
              className="text-lg font-medium tracking-tight"
              delay={0}
            >
              Our Expertises
            </SecondTitleReveal>
          </div>
          <div className="flex flex-col space-y-1 xl:space-y-3 w-full items-center justify-center">
            <AnimatePresence>
              {isVisible &&
                words.map((item, i) => (
                  <div className="overflow-hidden p-2" key={i}>
                    <motion.h1
                      className={clsx(
                        "text-3xl tracking-tighter md:text-4xl lg:text-5xl xl:text-6xl",
                        i === 2 &&
                          "text-black font-semibold  text-4xl md:text-5xl lg:text-6xl xl:text-7xl",
                        (i === 1 || i === 3) && "text-zinc-400 font-medium",
                        (i === 0 || i === 4) && "text-zinc-300 font-normal"
                      )}
                      initial={{ y: "140px" }}
                      animate={isInView === true && { y: 0 }}
                      exit={{ y: "-140px" }}
                      transition={{
                        type: "spring",
                        stiffness: 30,
                        damping: 10,
                        ease: "easeInOut",
                        duration: 0.2,
                        delay: getDelay(i),
                      }}
                      style={{ whiteSpace: "nowrap" }}
                    >
                      {item}
                    </motion.h1>
                  </div>
                ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertisesPage;
