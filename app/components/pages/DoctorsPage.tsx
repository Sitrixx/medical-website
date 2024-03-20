"use client";

import TitleReveal from "@/app/animations/TitleReveal";
import { motion } from "framer-motion";

const customEase = [0.2, 0.1, 0.2, 1];

const Circle = ({ angle }: any) => {
  const radius = 314;
  const x = 295 + radius * Math.cos((angle * Math.PI) / 180);
  const y = 295 + radius * Math.sin((angle * Math.PI) / 180);

  return (
    <div
      className="w-24 h-24 bg-red-400 absolute rounded-full"
      style={{
        top: `${y}px`,
        left: `${x}px`,
      }}
    />
  );
};

const DoctorsPage = () => {
  return (
    <section className="h-svh w-full p-8 md:px-14 md:py-10 lg:px-16 bg-white relative flex items-center justify-center">
      <div className="h-full flex flex-col w-full items-center">
        <div className="h-full flex items-center justify-center max-w-2xl flex-col md:w-9/12">
          <div className="flex flex-col md:w-7/12 space-y-16 md:space-y-9 items-center justify-center">
            <div className="w-full p-2 flex flex-row gap-6 xs:gap-8 flex-wrap items-center justify-center md:hidden">
              {[...Array(6)].map((_, index) => (
                <div
                  className="w-16 h-16 bg-red-200 rounded-full"
                  key={index}
                ></div>
              ))}
            </div>
            <div className="flex flex-col space-y-3 items-center justify-center">
              <TitleReveal className="text-center -tracking-wider text-4xl md:text-5xl font-semibold">
                1000+ Doctors from Around the World
              </TitleReveal>
              <p className="text-xs lg:text-sm leading-relaxed font-light text-center md:text-sm md:font-normal max-w-xs">
                Regardless of your healthcare needs, we have experts in various
                fields ready to deliver exceptional health services.
              </p>
            </div>
            <div className="w-full p-2 flex flex-row gap-6 xs:gap-8 flex-wrap items-center justify-center md:hidden">
              {[...Array(6)].map((_, index) => (
                <div
                  className="w-16 h-16 bg-red-200 rounded-full"
                  key={index}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ delay: 0.3, ease: customEase, duration: 0.9 }}
        viewport={{ once: true }}
        className="w-full h-full absolute p-8 md:px-14 md:py-10 lg:px-16 items-center justify-center hidden md:flex"
      >
        <motion.div
          className="rounded-full relative flex items-center justify-center p-[21.4rem]"
          initial={{ rotate: 0 }}
          whileInView={{ rotate: 180 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, ease: customEase, duration: 0.9 }}
        >
          {[...Array(12)].map((_, index) => (
            <Circle key={index} angle={(index * 360) / 12} />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default DoctorsPage;
